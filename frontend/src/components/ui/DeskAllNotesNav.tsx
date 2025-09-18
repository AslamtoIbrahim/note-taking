import { CgChevronRight } from "react-icons/cg";
import { GoHome } from "react-icons/go";

const DeskAllNotesNav = () => {
  return (
    <button className="hover:bg-primary/10 text-text-dark flex w-full cursor-pointer items-center justify-between px-4 py-2 hover:rounded">
      <div className="flex items-center gap-x-2">
        <GoHome />
        <p className="capitalize">all notes</p>
      </div>
      <CgChevronRight className="size-5" />
    </button>
  );
};

export default DeskAllNotesNav;
