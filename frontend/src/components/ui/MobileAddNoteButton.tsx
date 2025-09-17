import { FaPlus } from "react-icons/fa";

type MobileAddNoteButtonProp = {
  onclick?: () => void;
};

const MobileAddNoteButton = ({ onclick }: MobileAddNoteButtonProp) => {
  return (
    <button
      onClick={onclick}
      className="bg-primary hover:bg-blue-600 shadow-text-dark fixed right-4 bottom-20 flex size-12 cursor-pointer items-center justify-center rounded-full text-white shadow-lg/25 xl:hidden"
    >
      <FaPlus />
    </button>
  );
};

export default MobileAddNoteButton;
