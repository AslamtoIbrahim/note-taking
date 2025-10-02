import { BiArchiveOut } from "react-icons/bi";
import { useArchives } from "../hooks/use-query-note";
import Loader from "../components/ui/Loader";
import NoteItem from "../components/ui/NoteItem";
import { InView } from "react-intersection-observer";

const ArchivedPage = () => {
  const { data, error, status, hasNextPage, fetchNextPage } = useArchives();

  const onFetchNoteHandler = (inView: boolean) => {
    if (inView) fetchNextPage();
  };

  if (status === "pending") {
    return (
      <div className="my-auto flex h-[30rem] items-center justify-center md:h-[35rem]">
        <Loader />
      </div>
    );
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
      <section className="text-secondary flex items-center gap-2">
        <h1>You can unarchive notes click on</h1>
        <BiArchiveOut />
      </section>
      <section className="divide-secondary/50 divide-y pb-14 lg:flex lg:h-[39.1rem] lg:flex-col lg:gap-y-4 lg:overflow-auto lg:scroll-smooth">
        {data.pages.map((p) =>
          p.notes.map((n) => <NoteItem key={n._id} note={n} />),
        )}
        {hasNextPage && (
          <InView className="py-4" onChange={onFetchNoteHandler}>
            <Loader className="mx-auto" />
          </InView>
        )}
      </section>
    </div>
  );
};

export default ArchivedPage;
