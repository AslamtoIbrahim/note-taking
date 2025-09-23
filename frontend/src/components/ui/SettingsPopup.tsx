import { twMerge } from "tailwind-merge";
import SettingsPage from "../../pages/SettingsPage";

type SettingsPopup = {
  className?: string;
};
const SettingsPopup = ({ className }: SettingsPopup) => {
  return (
    <div
      className={twMerge(
        className,
        "absolute right-0 rounded-md w-96 p-4 z-100 bg-white shadow-2xl transition-all duration-700 ease-in-out",
      )}
    >
      <SettingsPage />
    </div>
  );
};

export default SettingsPopup;
