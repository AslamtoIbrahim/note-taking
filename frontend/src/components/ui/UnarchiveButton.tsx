import { BiArchiveOut } from "react-icons/bi";

type UnarchiveButtonProp = {
  onclick?: () => void;
};
const UnarchiveButton = ({ onclick }: UnarchiveButtonProp) => {
  return (
    <button
      onClick={onclick}
      className="text-secondary hover:text-text-dark desk-button cursor-pointer"
    >
      <BiArchiveOut />
      <p className="hidden capitalize lg:block">unarchive note</p>
    </button>
  );
};

export default UnarchiveButton;
