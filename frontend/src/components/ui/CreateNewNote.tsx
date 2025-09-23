import { BiPlus } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const CreateNewNote = () => {
  return (
    <NavLink className={"block"} to={"/all-notes/new-item"}>
      <button className="bg-primary flex w-full gap-x-2 items-center justify-center rounded py-2 text-white capitalize
      cursor-pointer hover:bg-blue-600" >
        <BiPlus className="" />
        <p>create new note</p>
      </button>
    </NavLink>
  );
};

export default CreateNewNote;
