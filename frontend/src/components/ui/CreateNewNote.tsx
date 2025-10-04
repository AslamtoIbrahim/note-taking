import { use } from "react";
import { BiPlus } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import LayoutContext from "../../store/layout-context";

const CreateNewNote = () => {
  const { setIsVisible, setSearch } = use(LayoutContext);
  const onClickHandler = () => {
    setIsVisible(true);
    setSearch("");
  };
  return (
    <NavLink className={"block"} to={"editor/"}>
      <button
        onClick={onClickHandler}
        className="bg-primary flex w-full cursor-pointer items-center justify-center gap-x-2 rounded py-2 text-white capitalize hover:bg-blue-600 dark:bg-primary/75 dark:text-white/80"
      >
        <BiPlus />
        <p>create new note</p>
      </button>
    </NavLink>
  );
};

export default CreateNewNote;
