import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ToggleTheme = () => {
  const [isDark, setisDark] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });


  const onClick = () => {
    setisDark((prv) => {
      const newValue = !prv;
      document.documentElement.classList.toggle("dark", newValue);
      localStorage.theme = newValue ? "dark" : "light";
      return newValue;
    });
  };
  return (
    <div className="text-text-dark/90 dark:text-secondary flex w-full items-center justify-between p-4">
      <div className="flex items-center gap-x-2 text-lg">
        {isDark ? <FiMoon /> : <FiSun />} <p className="capitalize">theme</p>
      </div>
      <button
        onClick={onClick}
        className="border-text-dark/90 dark:border-secondary w-12 cursor-pointer rounded-full border p-1"
      >
        <div
          className={`bg-text-dark/90 dark:bg-secondary size-4 rounded-full transition-transform duration-300 ease-in-out outline-none ${isDark ? "translate-x-5.5" : "translate-x-0"}`}
        />
      </button>
    </div>
  );
};

export default ToggleTheme;
