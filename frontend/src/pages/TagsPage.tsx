import { useState } from "react";
import Loader from "../components/ui/Loader";
import SearchInput from "../components/ui/SearchInput";
import TagItem from "../components/ui/TagItem";
import { useQueryTags } from "../hooks/use-query-tag";

const TagsPage = () => {
  const [search, setSearch] = useState("");
  const { data, error, status } = useQueryTags(search);
  
  const onSearchHandler = (value: string) => {
    setSearch(value);
  };

  if (status === "error") {
    return (
      <div className="my-auto flex h-[30rem] items-center justify-center md:h-[35rem]">
        <p className="text-red-500">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="padx font-body h-full space-y-2 rounded-t-xl py-4">
      <SearchInput
        search={search}
        onChangeSearch={onSearchHandler}
        placeholder="Enter tag name"
        className="text-sm xl:mx-4"
      />
      <h1 className="text-secondary lg:px-2 dark:text-white/65">Tags</h1>
      {status === "pending" && (
        <div className="my-auto flex h-96 items-center justify-center">
          <Loader />
        </div>
      )}
      <section className="space-y-2 lg:px-3">
        {data && (
          <div className="">
            {data.pages.map((p) =>
              p.tags.map((t) => <TagItem key={t._id} tagId={t._id} tag={t.title} />),
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default TagsPage;
