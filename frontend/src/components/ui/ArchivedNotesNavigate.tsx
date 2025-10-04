import { CgChevronRight } from "react-icons/cg";
import { GoArchive } from "react-icons/go";

type ArchivedNotesNavigateProp = {
  onClick?: () => void;
};
const ArchivedNotesNavigate = ({ onClick }: ArchivedNotesNavigateProp) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-primary/5 text-text-dark/90 flex w-full cursor-pointer items-center justify-between p-4"
    >
      <div className="flex items-center gap-x-2 capitalize dark:text-secondary">
        <GoArchive />
        <p>archived</p>
      </div>
      <CgChevronRight className="size-5 dark:text-secondary" />
    </button>
  );
};

export default ArchivedNotesNavigate;
