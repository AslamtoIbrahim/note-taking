import { useState } from "react";
import MobileAddNoteButton from "../components/ui/MobileAddNoteButton";
import NoteItem from "../components/ui/NoteItem";
import SearchInput from "../components/ui/SearchInput";
import { useInfiniteQuery } from "@tanstack/react-query";
import { searchNotes } from "../lib/note-query";
import Loader from "../components/ui/Loader";
import { useNavigate } from "react-router-dom";
import { InView } from "react-intersection-observer";

const SearchPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  function onChangeSearchHnadler(value: string): void {
    setSearch(value);
  }

  const { data, status, error, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["search", search] as [string, string],
    initialPageParam: null,
    queryFn: searchNotes,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const onClickAddNoteHandler = () => {
    navigate("/editor/");
  };

  const onFetchNoteHandler = (inView: boolean) => {
    if (inView) {
      fetchNextPage();
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
    <div className="padx font-body h-full space-y-2 rounded-t-xl bg-white py-4">
      <SearchInput onChangeSearch={onChangeSearchHnadler} />
      {search && (
        <p className="text-sm">
          All notes matching "<span className="font-semibold">{search}</span>"
          are displayed below
        </p>
      )}
      <section className="divide-secondary/50 divide-y">
        {status === "pending" && (
          <div className="my-auto flex h-[30rem] items-center justify-center md:h-[35rem]">
            <Loader />
          </div>
        )}
        {data &&
          data.pages.map((p) =>
            p.notes.map((n) => <NoteItem key={n._id} note={n} />),
          )}
        {hasNextPage && (
          <InView className="py-4" onChange={onFetchNoteHandler}>
            <Loader className="mx-auto" />
          </InView>
        )}
      </section>
      <MobileAddNoteButton onclick={onClickAddNoteHandler} />
    </div>
  );
};

export default SearchPage;
