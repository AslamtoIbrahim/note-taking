import { CgChevronRight } from "react-icons/cg";
import { GoTrash } from "react-icons/go";

type TrashNavigateProp = {
  onClick?: () => void;
};
const TrashNavigate = ({ onClick }: TrashNavigateProp) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-primary/5 text-text-dark/90 flex w-full cursor-pointer items-center justify-between p-4"
    >
      <div className="flex items-center gap-x-2 capitalize dark:text-secondary">
        <GoTrash />
        <p>trash</p>
      </div>
      <CgChevronRight className="size-5 dark:text-secondary" />
    </button>
  );
};

export default TrashNavigate;
