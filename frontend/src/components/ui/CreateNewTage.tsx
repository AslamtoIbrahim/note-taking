import { BiPlus } from "react-icons/bi";

type CreateNewTageProp = {
  newTage: string;
  onClick: () => void;
};
const CreateNewTage = ({ newTage, onClick }: CreateNewTageProp) => {
  return (
    <div onClick={onClick} className="hover:bg-secondary/5 cursor-pointer">
      <hr className="text-secondary/50 dark:text-secondary" />
      <div className="dark:text-secondary flex items-center gap-x-2 px-6 py-4 text-gray-700">
        <BiPlus />
        <p>Create "{<span className="dark:text-white/65">{newTage}</span>}"</p>
      </div>
    </div>
  );
};

export default CreateNewTage;
