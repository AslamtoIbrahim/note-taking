import { BiArchiveOut } from "react-icons/bi";
import { BsTags } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ArchiveButton from "../components/ui/ArchiveButton";
import CancelButton from "../components/ui/CancelButton";
import DeleteButton from "../components/ui/DeleteButton";
import GoBackButton from "../components/ui/GoBackButton";
import SaveNoteButton from "../components/ui/SaveNoteButton";

type ActionBarProp = {
  id?: string;
  archivedAt: Date | null | undefined,
  onSaveUpdateClick?: () => void;
  onDeleteClick?: () => void;
  onArchiveClick?: () => void;
  onUnarchiveClick?: () => void;
  onTagClick?: () => void;
};
const ActionBar = ({ id,archivedAt, onSaveUpdateClick, onDeleteClick, onArchiveClick, onUnarchiveClick, onTagClick}: ActionBarProp) => {
  const navigate = useNavigate();
  const onClickGoBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-between py-3 text-sm md:py-4 md:text-base lg:hidden">
      <GoBackButton onclick={onClickGoBackHandler} />
      <section className="flex items-center gap-x-3 md:gap-x-4">
        <BsTags className="icon-button" onClick={onTagClick} />
        {id && <DeleteButton onclick={onDeleteClick} />}
        {id && (archivedAt ? <BiArchiveOut className="icon-button" onClick={onUnarchiveClick}/> : <ArchiveButton onclick={onArchiveClick}/>)}
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
