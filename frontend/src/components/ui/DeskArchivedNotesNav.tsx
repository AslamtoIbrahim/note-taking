import { useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import { GoArchive } from "react-icons/go";
import { NavLink } from "react-router-dom";

const DeskArchivedNotesNav = () => {
  const [active, setActive] = useState(false);

  return (
    <NavLink
      to={"/archived-notes"}
      className={({ isActive }) => {
        setActive(isActive);
        return isActive ? "active" : "bg-transparent";
      }}
    >
      <button className="hover:bg-primary/10 mt-2 text-text-dark flex w-full cursor-pointer items-center justify-between px-4 py-2 hover:rounded">
        <div className="flex items-center gap-x-2">
          <GoArchive />
          <p className="capitalize">archived notes</p>
        </div>
        {active && <CgChevronRight className="size-5" />}
      </button>
    </NavLink>
  );
};

export default DeskArchivedNotesNav;
