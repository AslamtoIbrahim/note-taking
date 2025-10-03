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
      <div>
        <SettingsPopup
          className={`${isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        />
      </div>
    </div>
  );
};

export default Settings;
