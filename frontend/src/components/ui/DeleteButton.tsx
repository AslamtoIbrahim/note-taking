import { FiTrash2 } from "react-icons/fi";

type DeleteButtonProp = {
  onclick?: () => void;
};

const DeleteButton = ({ onclick }: DeleteButtonProp) => {
  return (
    <button
      onClick={onclick}
      className="text-secondary hover:text-text-dark icon-button cursor-pointer desk-button"
    >
      <FiTrash2 />
      <p className="hidden lg:block capitalize">delete note</p>
    </button>
  );
};

export default DeleteButton;
