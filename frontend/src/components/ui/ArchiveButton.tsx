import { BiArchiveIn } from "react-icons/bi";

type ArchiveButtonProp = {
  onclick?: () => void;
};
const ArchiveButton = ({ onclick }: ArchiveButtonProp) => {
  return (
    <button
      onClick={onclick}
      className="text-secondary icon-button hover:text-text-dark desk-button cursor-pointer"
    >
      <BiArchiveIn />
      <p className="hidden capitalize lg:block">archive note</p>
    </button>
  );
};

export default ArchiveButton;
