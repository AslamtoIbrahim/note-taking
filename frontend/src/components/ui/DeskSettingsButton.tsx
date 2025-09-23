import { FiSettings } from "react-icons/fi";

type DeskSettingsButtonProp = {
  onClick?: () => void;
};
const DeskSettingsButton = ({ onClick }: DeskSettingsButtonProp) => {
  return (
    <button
      onClick={onClick}
      className="text-secondary cursor-pointer transition-transform duration-200 ease-in-out hover:scale-115"
    >
      <FiSettings />
    </button>
  );
};

export default DeskSettingsButton;
