import { useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { NavLink } from "react-router-dom";

const DeskAllNotesNav = () => {
  const [active, setActive] = useState(false);
  return (
    <NavLink
      to={"/all-notes"}
      className={({ isActive }) => {
        setActive(isActive);
        return isActive ? "active" : "bg-transparent";
      }}
    >
      <button className="hover:bg-primary/10 text-text-dark flex w-full cursor-pointer items-center justify-between px-4 py-2 hover:rounded">
        <div className="flex items-center gap-x-2">
          <GoHome />
          <p className="capitalize">all notes</p>
        </div>
        {active && <CgChevronRight className="size-5" />}
      </button>
    </NavLink>
  );
};

export default DeskAllNotesNav;
