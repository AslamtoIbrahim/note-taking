import { useNavigate } from "react-router-dom";
import ArchiveButton from "../components/ui/ArchiveButton";
import CancelButton from "../components/ui/CancelButton";
import DeleteButton from "../components/ui/DeleteButton";
import GoBackButton from "../components/ui/GoBackButton";
import SaveNoteButton from "../components/ui/SaveNoteButton";

type ActionBarProp = {
  id?: string;
  onSaveUpdateClick?: () => void;
  onDeleteClick?: () => void;
  onArchiveClick?: () => void;
};
const ActionBar = ({ id, onSaveUpdateClick, onDeleteClick, onArchiveClick }: ActionBarProp) => {
  const navigate = useNavigate();
  const onClickGoBackHandler = () => {
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-between py-3 text-sm md:py-4 md:text-base lg:hidden">
      <GoBackButton onclick={onClickGoBackHandler} />
      <section className="flex items-center gap-x-3 md:gap-x-4">
        {id && <DeleteButton onclick={onDeleteClick} />}
        {id && <ArchiveButton onclick={onArchiveClick}/>}
        <CancelButton onclick={onClickGoBackHandler} />
        <SaveNoteButton
          onclick={onSaveUpdateClick}
          text={id ? "update note" : "save note"}
        />
      </section>
    </div>
  );
};

export default ActionBar;
