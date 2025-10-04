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
        " w-96 rounded-md bg-white dark:bg-text-dark dark:shadow-none dark:border dark:border-secondary/50 p-4 shadow-2xl transition-all duration-700 ease-in-out",
      )}
    >
      <SettingsPage />
    </div>
  );
};

export default SettingsPopup;
