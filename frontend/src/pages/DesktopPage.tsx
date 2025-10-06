import { use } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Settings from "../components/layout/Settings";
import SearchInput from "../components/ui/SearchInput";
import SideNav from "../navigation/SideNav";
import LayoutContext from "../store/layout-context";
import NoteContentPage from "./NoteContentPage";

const DesktopPage = () => {
  const { search, setSearch,} = use(LayoutContext);
  const navigate = useNavigate()
  const onChangeSearch = (value: string): void => {
    setSearch(value);
    navigate('search/')
  };

  

  return (
    <div className="divide-secondary/50 hidden h-screen grid-cols-5 divide-x lg:grid ">
      {/* Side Nav Root */}
      <section className="col-span-1">
        <SideNav />
      </section>
      <section className="divide-secondary/50 col-span-4 grid grid-rows-10 divide-y">
        <div className="row-span-1 flex items-center justify-between px-8">
          <p className="text-2xl font-bold dark:text-white/85">All Notes</p>
          <div className="flex items-center gap-x-4 ">
            <SearchInput search={search} onChangeSearch={onChangeSearch} />
            <Settings />
          </div>
        </div>
        <div className="divide-secondary/50 row-span-9 grid grid-cols-4 divide-x">
          {/* Side Nav Outlet */}
          <section className="col-span-1">
            {/* <AllNotes /> */}
            <Outlet />
          </section>
          <NoteContentPage />
        </div>
      </section>
    </div>
  );
};

export default DesktopPage;

