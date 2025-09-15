import { useState } from "react";
import { FiArchive, FiHome, FiSearch, FiSettings, FiTag } from "react-icons/fi";
const BOTTOM_NAV = "bottomNav";

const BottomNav = () => {
  const [selected, setSelected] = useState(() =>
    !(BOTTOM_NAV in localStorage) ? "home" : localStorage.getItem(BOTTOM_NAV),
  );
  const onClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setSelected(value);
    localStorage.setItem(BOTTOM_NAV, value);
  };
  return (
    <nav className="fixed bottom-0 left-0 flex w-full items-center justify-evenly px-2 py-4">
      <button
        value="home"
        onClick={onClickOption}
        className={`nav-div ${selected === "home" ? "text-primary" : "text-secondary"}`}
      >
        <FiHome />
        <p className="nav-p">Home</p>
      </button>
      <button
        value="search"
        onClick={onClickOption}
        className={`nav-div ${selected === "search" ? "text-primary" : "text-secondary"}`}
      >
        <FiSearch />
        <p className="nav-p">Search</p>
      </button>
      <button
        value="archived"
        onClick={onClickOption}
        className={`nav-div ${selected === "archived" ? "text-primary" : "text-secondary"}`}
      >
        <FiArchive />
        <p className="nav-p">Archived</p>
      </button>
      <button
        value="tags"
        onClick={onClickOption}
        className={`nav-div ${selected === "tags" ? "text-primary" : "text-secondary"}`}
      >
        <FiTag />
        <p className="nav-p">Tags</p>
      </button>
      <button
        value="settings"
        onClick={onClickOption}
        className={`nav-div ${selected === "settings" ? "text-primary" : "text-secondary"}`}
      >
        <FiSettings />
        <p className="nav-p">Settings</p>
      </button>
    </nav>
  );
};

export default BottomNav;
