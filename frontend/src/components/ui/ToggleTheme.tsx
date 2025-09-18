import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ToggleTheme = () => {
  const [isDark, setisDark] = useState(false);
  const onClick = () => {
    setisDark((prv) => !prv);
  };
  return (
    <div className="text-text-dark/90 flex w-full cursor-pointer items-center justify-between p-4">
      <div className="text-lg flex items-center gap-x-2">
        {isDark ? <FiMoon /> : <FiSun />} <p className="capitalize">theme</p>
      </div>
      <button
        onClick={onClick}
        className="border-text-dark/90 w-12 rounded-full border p-1"
      >
        <div
          className={`bg-text-dark/90 size-4 rounded-full transition-transform duration-300 ease-in-out outline-none ${isDark ? "translate-x-5.5" : "translate-x-0"}`}
        />
      </button>
    </div>
  );
};

export default ToggleTheme;
