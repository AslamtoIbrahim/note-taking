import ArchiveButton from "../components/ui/ArchiveButton";
import CancelButton from "../components/ui/CancelButton";
import DeleteButton from "../components/ui/DeleteButton";
import GoBackButton from "../components/ui/GoBackButton";
import SaveNoteButton from "../components/ui/SaveNoteButton";

const ActionBar = () => {
  return (
    <div className="flex items-center justify-between py-3 text-sm  md:py-4 md:text-base">
      <GoBackButton />
      <section className="flex items-center gap-x-3 md:gap-x-4">
        <DeleteButton />
        <ArchiveButton />
        <CancelButton />
        <SaveNoteButton />
      </section>
    </div>
  );
};

export default ActionBar;
