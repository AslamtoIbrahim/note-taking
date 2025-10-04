import { FaPlus } from "react-icons/fa";

type MobileAddNoteButtonProp = {
  onclick?: () => void;
};

const MobileAddNoteButton = ({ onclick }: MobileAddNoteButtonProp) => {
  return (
    <button
      onClick={onclick}
      className="bg-primary shadow-text-dark fixed right-4 bottom-20 md:bottom-24 md:right-6 flex size-12 cursor-pointer items-center justify-center rounded-full text-white shadow-lg/25 hover:bg-blue-600 xl:hidden dark:text-text-dark"
    >
      <FaPlus />
    </button>
  );
};

export default MobileAddNoteButton;
