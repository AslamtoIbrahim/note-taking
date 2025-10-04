import { useState } from "react";
import DeskSettingsButton from "../ui/DeskSettingsButton";
import SettingsPopup from "../ui/SettingsPopup";

const Settings = () => {
  const [isActive, setIsActive] = useState(false);
  const onClickHandler = () => {
    setIsActive((prv) => !prv);
  };
  return (
    <div className="lrelative">
      <DeskSettingsButton onClick={onClickHandler} />
      <div onClick={(e)=>{
        if (e.target===e.currentTarget) {
          setIsActive((prv) => !prv);
        }
      }} className={`absolute right-0 top-0 z-100 h-screen w-full bg-text-dark/10
        flex justify-end items-start p-12 ${isActive ? 'visible': 'invisible'}`}>
        <SettingsPopup
          className={`${isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        />
      </div>
    </div>
  );
};

export default Settings;
