import { useState } from "react";
import DeskSettingsButton from "../ui/DeskSettingsButton";
import SettingsPopup from "../ui/SettingsPopup";

const Settings = () => {
  const [isActive, setIsActive] = useState(false);
  const onClickHandler = () => {
    setIsActive((prv) => !prv);
  };
  return (
    <div className="relative">
      <DeskSettingsButton onClick={onClickHandler} />
      <SettingsPopup className={`${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
    </div>
  );
};

export default Settings;
