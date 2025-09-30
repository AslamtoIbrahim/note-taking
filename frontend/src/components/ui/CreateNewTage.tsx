import { BiPlus } from "react-icons/bi";

type CreateNewTageProp = {
    newTage: string
    onClick: () => void
}
const CreateNewTage = ({newTage, onClick}: CreateNewTageProp) => {
  return (
    <div onClick={onClick} className="cursor-pointer hover:bg-secondary/5">
      <hr className="text-secondary/50" />
      <div className="px-6 py-4 flex items-center gap-x-2 text-gray-700">
        <BiPlus />
        <p>Create "{newTage}"</p>
      </div>
    </div>
  );
};

export default CreateNewTage;
