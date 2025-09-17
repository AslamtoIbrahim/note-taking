import { FiTrash2 } from "react-icons/fi";

type DeleteButtonProp = {
  onclick?: () => void;
};

const DeleteButton = ({ onclick }: DeleteButtonProp) => {
  return (
    <button
      onClick={onclick}
      className="text-secondary hover:text-text-dark cursor-pointer"
    >
      <FiTrash2 />
    </button>
  );
};

export default DeleteButton;
