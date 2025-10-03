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
        "absolute right-0 z-100 w-96 rounded-md bg-white p-4 shadow-2xl transition-all duration-700 ease-in-out",
      )}
    >
      <SettingsPage />
    </div>
  );
};

export default SettingsPopup;
