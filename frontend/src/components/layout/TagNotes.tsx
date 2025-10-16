import { InView } from "react-intersection-observer";
import { useNavigate, useParams } from "react-router-dom";
import { useNotsLinkToTag } from "../../hooks/use-query-tags";
import GoBackButton from "../ui/GoBackButton";
import Loader from "../ui/Loader";
import NoteItem from "../ui/NoteItem";

const TagNotes = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  let { tagId } = useParams();
  if (!tagId) return;
  const {
    data: notes,
    status,
    hasNextPage,
    fetchNextPage,
  } = useNotsLinkToTag(tagId);

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
      <GoBackButton className="lg:hidden" onclick={goBackHandler}  />
      <div className="divide-secondary/50 divide-y lg:flex lg:h-[37rem] lg:flex-col lg:gap-y-4 lg:overflow-auto lg:scroll-smooth">
        {notes?.pages.map((p) =>
          p.notes.map((n) => <NoteItem key={n.noteId._id} note={n.noteId} />),
        )}
      </div>
      {hasNextPage && (
        <InView className="py-6" onChange={onChangeHandler}>
          <Loader className="mx-auto size-4" />
        </InView>
      )}
    </div>
  );
};

export default TagNotes;
