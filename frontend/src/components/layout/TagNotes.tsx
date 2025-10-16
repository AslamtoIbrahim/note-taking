import { InView } from "react-intersection-observer";
import { useNavigate, useParams } from "react-router-dom";
import { useNotesLinkToTag } from "../../hooks/use-query-tags";
import GoBackButton from "../ui/GoBackButton";
import Loader from "../ui/Loader";
import NoteItem from "../ui/NoteItem";

const TagNotes = () => {
  // const location = useLocation();
  const { tagId } = useParams();

  const {
    data: notes,
    status,
    fetchNextPage,
    hasNextPage,
  } = useNotesLinkToTag(tagId || "");

  const navigate = useNavigate();

  const onChangeHandler = (inView: boolean) => {
    if (inView) {
      fetchNextPage();
    }
  };

  const goBackHandler = () => {
    navigate(-1);
  };

  if (status === "pending") {
    return (
      <div className="my-auto flex h-full items-center justify-center">
        <Loader className="size-4" />
      </div>
    );
  }

  return (
    <div className="px-4">
      <GoBackButton className="lg:hidden" onclick={goBackHandler} />
      <div className="divide-secondary/50 divide-y lg:flex lg:max-h-[42rem] lg:flex-col lg:gap-y-4 lg:overflow-auto lg:scroll-smooth">
        {notes?.pages.map((p) =>
          p.notes.map((n) => <NoteItem key={n.noteId._id} note={n.noteId} />),
        )}
        {hasNextPage && (
          <InView className="py-4" onChange={onChangeHandler}>
            <Loader className="mx-auto size-4" />
          </InView>
        )}
      </div>
    </div>
  );
};

export default TagNotes;
