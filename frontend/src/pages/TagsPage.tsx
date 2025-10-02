import { useState } from "react";
import TagItem from "../components/ui/TagItem";
import SearchInput from "../components/ui/SearchInput";
import { useQuery } from "@tanstack/react-query";
import { getAndSearchTags } from "../lib/note-query";
import Loader from "../components/ui/Loader";

const TagsPage = () => {
  const [search, setSearch] = useState("");

  const { data, error, status } = useQuery({
    queryKey: ["tags", search],
    queryFn: getAndSearchTags,
  });

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
    <div className="padx font-body h-full space-y-2 rounded-t-xl  bg-white py-4">
      <SearchInput
        search={search}
        onChangeSearch={onSearchHandler}
        placeholder="Enter tag name"
        className="text-sm xl:mx-4"
      />
      <h1 className="text-secondary lg:px-2">Tags</h1>
      {status === "pending" && (
        <div className="my-auto flex h-96 items-center justify-center">
          <Loader />
        </div>
      )}
      <section className="space-y-2 lg:px-3">
        {data && (
          <div className="">
            {data.map((t) => (
              <TagItem key={t} tag={t} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default TagsPage;
