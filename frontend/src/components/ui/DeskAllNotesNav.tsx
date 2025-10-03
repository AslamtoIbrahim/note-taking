import { use } from "react";
import { CgChevronRight } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { NavLink } from "react-router-dom";
import LayoutContext from "../../store/layout-context";

const DeskAllNotesNav = () => {
  const { setIsVisible, setSearch } = use(LayoutContext);
  const onClickHandler = () => {
    setIsVisible(false);
    setSearch("");
  };
  return (
    <NavLink
      to={"home"}
      className={({ isActive }) => {
        return `${isActive ? "active" : "bg-transparent"} group`;
      }}
    >
      <button
        onClick={onClickHandler}
        className="hover:bg-primary/10 text-text-dark flex w-full cursor-pointer items-center justify-between px-4 py-2 hover:rounded"
      >
        <div className="flex items-center gap-x-2">
          <GoHome />
          <p className="capitalize">all notes</p>
        </div>
        {
          <CgChevronRight className="invisible size-5 group-[.active]:visible" />
        }
      </button>
    </NavLink>
  );
};

export default DeskAllNotesNav;
