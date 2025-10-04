import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { getAndSearchTags } from "../../lib/note-query";
import CreateNewTage from "./CreateNewTage";
import Loader from "./Loader";
import SearchInput from "./SearchInput";
import TagCheckItem from "./TagCheckItem";
import { useUpdateNote } from "../../hooks/use-query-note";

type TagsDialog = {
  id: string | undefined;
  tags: string[] | undefined;
};

const TagsDialog = ({ id, tags }: TagsDialog) => {
  const [search, setSearch] = useState("");
  const [newTags, setNewTags] = useState(tags);
  const queryClient = useQueryClient();

  const { data, error, status } = useQuery({
    queryKey: ["tags", search],
    queryFn: getAndSearchTags,
  });

  const updateNoteMutation = useUpdateNote(id);

  const onSearchHandler = (value: string) => {
    setSearch(value);
  };

  const onCreateNewTag = () => {
    if (id && newTags) {
      const tags = [search, ...newTags];
      setNewTags(tags);
      updateNoteMutation.mutate({ id, note: { tags } });
      queryClient.invalidateQueries({ queryKey: ["tags"] });
      setSearch("");
    }
  };

  const onCheckTagHandler = (checked: boolean, name: string) => {
    if (id && newTags) {
      let tags;
      if (checked) {
        tags = [name, ...newTags];
      } else {
        tags = newTags.filter((t) => t !== name);
      }
      setNewTags(tags);
      updateNoteMutation.mutate({ id, note: { tags: tags } });
      queryClient.invalidateQueries({ queryKey: ["tags"] });
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
    <div className="flex h-80 flex-col marx justify-between rounded bg-white dark:bg-text-dark">
      <div className="z-10 w-fit space-y-4 px-12 pt-8">
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
        {data &&
          <div className="space-y-6 h-30 overflow-y-auto">
           { data.map((t) => (
              <TagCheckItem
                key={t}
                name={t}
                check={tags?.includes(t) || false}
                onCheckTag={onCheckTagHandler}
              />
            ))}
          </div>}
      </div>
      {data?.length === 0 && (
        <CreateNewTage newTage={search} onClick={onCreateNewTag} />
      )}
    </div>
  );
};

export default TagsDialog;
