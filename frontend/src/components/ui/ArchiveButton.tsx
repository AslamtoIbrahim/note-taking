import { GoArchive } from "react-icons/go";

const ArchiveButton = () => {
  return (
    <button className="text-secondary hover:text-text-dark cursor-pointer
    desk-button">
      <GoArchive />
      <p className="hidden lg:block capitalize">archive note</p>
    </button>
  );
};

export default ArchiveButton;
