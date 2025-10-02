import { use } from "react";
import { InView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Loader from "../components/ui/Loader";
import MobileAddNoteButton from "../components/ui/MobileAddNoteButton";
import NoteItem from "../components/ui/NoteItem";
import SearchInput from "../components/ui/SearchInput";
import { useSearchNote } from "../hooks/use-query-note";
import LayoutContext from "../store/layout-context";

const SearchPage = () => {
  const navigate = useNavigate();

  const noteContext = use(LayoutContext);

  const { data, status, error, hasNextPage, fetchNextPage } = useSearchNote(
    noteContext.search,
  );

  const onClickAddNoteHandler = () => {
    navigate("/editor/");
  };

  const onFetchNoteHandler = (inView: boolean) => {
    if (inView) {
      fetchNextPage();
    }
  };

  function onChangeSearchHnadler(value: string): void {
    noteContext.setSearch(value);
  }

  if (status === "error") {
    return (
      <div className="my-auto flex h-[30rem] items-center justify-center md:h-[35rem]">
        <p className="text-red-500">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="padx font-body h-full space-y-2 rounded-t-xl bg-white py-4">
      <SearchInput
        search={noteContext.search}
        onChangeSearch={onChangeSearchHnadler}
        className="lg:hidden"
      />
      {noteContext.search && (
        <p className="text-sm">
          All notes matching "
          <span className="font-semibold">{noteContext.search}</span>" are
          displayed below
        </p>
      )}
      <section className="divide-secondary/50 divide-y lg:flex lg:h-[37rem] lg:flex-col lg:gap-y-4 lg:overflow-auto lg:scroll-smooth">
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
