import { useInfiniteQuery } from "@tanstack/react-query";
import { InView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Loader from "../components/ui/Loader";
import MobileAddNoteButton from "../components/ui/MobileAddNoteButton";
import NoteItem from "../components/ui/NoteItem";
import { getQueryNotes } from "../lib/note-query";

const HomePage = () => {
  const navigate = useNavigate();
  const { data, status, error, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["notes"],
    queryFn: getQueryNotes,
    initialPageParam: null,
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

  console.log('data: ',data);

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
    <div className="padx font-body relative rounded-t-xl bg-white pt-4 pb-14 lg:rounded-none lg:py-0">
      <section className="divide-secondary/50 h-full divide-y lg:flex lg:h-[37rem] lg:flex-col lg:gap-y-4 lg:overflow-auto lg:scroll-smooth">
        {data.pages.map((p) =>
          p.notes.map((note, i) => <NoteItem key={i} note={note} />),
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

export default HomePage;
