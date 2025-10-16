import { useState } from "react";
import { useAddQueryTag, useQueryTags } from "../../hooks/use-query-tag";
import { useAddLink, useDeleteLink } from "../../hooks/use-query-tags";
import type { TagLink } from "../../utils/types";
import CreateNewTage from "./CreateNewTage";
import Loader from "./Loader";
import SearchInput from "./SearchInput";
import TagCheckItem from "./TagCheckItem";
import { toast } from "sonner";

type TagsDialog = {
  id: string;
  tags: TagLink[];
};

const TagsDialog = ({ id, tags }: TagsDialog) => {
  const [search, setSearch] = useState("");
  const [tagTitles, setTagTitles] = useState(() =>
    tags?.map((t) => t.tagId.title),
  );
  const { data: allTags, error, status } = useQueryTags(search);

  const addTagMutation = useAddQueryTag(id);

  const addTagLinkNote = useAddLink();
  const deleteTagLinkNote = useDeleteLink();

  const onSearchHandler = (value: string) => {
    setSearch(value);
  };

  const onCreateNewTag = async () => {
    if (id) {
      const tag = await addTagMutation.mutateAsync(search);
      setTagTitles([tag.title, ...tagTitles])
      addTagLinkNote.mutate({ noteId: id, tagId: tag._id });
      setSearch("");
    } else {
      toast.warning(
        "you should first add a note then you can come back and add tags",
      );
    }
  };

  const onCheckTagHandler = (tagId: string, checked: boolean) => {
    if (id) {
      if (checked) {
        addTagLinkNote.mutate({ noteId: id, tagId });
      } else {
        deleteTagLinkNote.mutate({ noteId: id, tagId });
      }
    } else {
      toast.warning(
        "you should first add a note then you can come back and add tags",
      );
    }
  };

  if (status === "error") {
    return (
      <div className="my-auto flex h-[30rem] items-center justify-center md:h-[35rem]">
        <p className="text-red-500">{error.message}</p>
      </div>
    );
  }
  return (
    <div className="marx dark:bg-text-dark flex h-80 flex-col justify-between rounded bg-white">
      <div className="w-fit space-y-4 px-12 pt-8">
        <h2 className="dark:text-white/65">Add tags note</h2>
        <SearchInput
          search={search}
          onChangeSearch={onSearchHandler}
          placeholder="Enter tag name"
          className="text-sm"
        />
        {status === "pending" && (
          <div className="my-auto flex items-center justify-center py-10">
            <Loader />
          </div>
        )}
        {allTags && (
          <div className="h-34 space-y-4 overflow-y-scroll px-4">
            {allTags.pages.map((p) =>
              p.tags.map((alt) => (
                <TagCheckItem
                  tagId={alt._id}
                  key={alt._id}
                  name={alt.title}
                  check={
                    // tags?.map((t) => t.tagId.title).includes(alt.title) || false
                    tagTitles?.includes(alt.title) || false
                  }
                  onCheckTag={onCheckTagHandler}
                />
              )),
            )}
          </div>
        )}
      </div>
      {allTags?.pages.map((p) => p.tags.map((t) => t)).flat().length === 0 &&
        search && <CreateNewTage newTage={search} onClick={onCreateNewTag} />}
    </div>
  );
};

export default TagsDialog;
