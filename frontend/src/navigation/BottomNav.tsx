import { BsTags } from "react-icons/bs";
import { FiSearch, FiSettings } from "react-icons/fi";
import { GoArchive, GoHome } from "react-icons/go";
import { NavLink } from "react-router-dom";
const BOTTOM_NAV = "bottomNav";

const BottomNav = () => {
  // const [selected, setSelected] = useState(() =>
  //   !(BOTTOM_NAV in localStorage) ? "home" : localStorage.getItem(BOTTOM_NAV),
  // );
  // const onClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   const value = e.currentTarget.value;
  //   setSelected(value);
  //   localStorage.setItem(BOTTOM_NAV, value);
  // };
  return (
    <nav className="shadow-text-dark fixed bottom-0 left-0 flex w-full items-center justify-evenly bg-white px-2 py-4 shadow-2xl lg:hidden">
      <NavLink
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? "text-primary" : "text-secondary"
        }
        to={"/home"}
      >
        <div className="nav-div">
          <GoHome />
          <p className="nav-p">Home</p>
        </div>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "text-primary" : "text-secondary"
        }
        to="/search"
      >
        <div className="nav-div">
          <FiSearch />
          <p className="nav-p">Search</p>
        </div>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "text-primary" : "text-secondary"
        }
        to="/archived"
      >
        <div className="nav-div">
          <GoArchive />
          <p className="nav-p">Archived</p>
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-primary" : "text-secondary"
        }
        to="/tags"
      >
        <div className="nav-div">
          <BsTags />
          <p className="nav-p">Tags</p>
        </div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-primary" : "text-secondary"
        }
        to="/settings"
      >
        <div className="nav-div">
          <FiSettings />
          <p className="nav-p">Settings</p>
        </div>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
