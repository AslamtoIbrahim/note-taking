import { BiPlus } from "react-icons/bi";

const CreateNewNote = () => {
  return (
    <button className="bg-primary flex w-full gap-x-2 items-center justify-center rounded py-2 text-white capitalize 
    cursor-pointer hover:bg-blue-600" >
      <BiPlus className="" />
      <p>create new note</p>
    </button>
  );
};

export default CreateNewNote;
