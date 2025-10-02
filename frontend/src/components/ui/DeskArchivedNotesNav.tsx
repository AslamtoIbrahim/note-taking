import { use } from "react";
import { CgChevronRight } from "react-icons/cg";
import { GoArchive } from "react-icons/go";
import { NavLink } from "react-router-dom";
import LayoutContext from "../../store/layout-context";

const DeskArchivedNotesNav = () => {
  const { setIsVisible } = use(LayoutContext);
  const onClickHandler = () => {
    setIsVisible(false);
  };

  return (
    <NavLink
      to={"/archived"}
      className={({ isActive }) => {
        return `${isActive ? "active" : "bg-transparent"} group`;
      }}
    >
      <button
        onClick={onClickHandler}
        className="hover:bg-primary/10 text-text-dark mt-2 flex w-full cursor-pointer items-center justify-between px-4 py-2 hover:rounded"
      >
        <div className="flex items-center gap-x-2">
          <GoArchive />
          <p className="capitalize">archived notes</p>
        </div>
        <CgChevronRight className="invisible size-5 group-[.active]:visible" />
      </button>
    </NavLink>
  );
};

export default DeskArchivedNotesNav;
