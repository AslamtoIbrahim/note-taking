import { GoArchive } from "react-icons/go";

type ArchiveButtonProp = {
  onclick?: () => void;
};
const ArchiveButton = ({ onclick }: ArchiveButtonProp) => {
  return (
    <button onClick={onclick} className="text-secondary hover:text-text-dark desk-button cursor-pointer">
      <GoArchive />
      <p className="hidden capitalize lg:block">archive note</p>
    </button>
  );
};

export default ArchiveButton;
