import { Outlet } from "react-router-dom";
import ArchiveButton from "../components/ui/ArchiveButton";
import CancelButton from "../components/ui/CancelButton";
import DeleteButton from "../components/ui/DeleteButton";
import DeskSettingsButton from "../components/ui/DeskSettingsButton";
import SaveNoteButton from "../components/ui/SaveNoteButton";
import SearchInput from "../components/ui/SearchInput";
import SideNav from "../navigation/SideNav";
import NoteContentPage from "./NoteContentPage";
import SettingsPopup from "../components/ui/SettingsPopup";
import Settings from "../components/layout/Settings";

const DesktopPage = () => {
  const onChangeSearch = (value: string): void => {
    console.log("msg, value", value);
  };

  return (
    <div className="divide-secondary/50 hidden h-screen grid-cols-5 divide-x lg:grid">
      {/* Side Nav Root */}
      <section className="col-span-1 ">
        <SideNav />
      </section>
      <section className="divide-secondary/50 col-span-4 grid grid-rows-10 divide-y">
        <div className="row-span-1 flex items-center justify-between px-8">
          <p className="text-2xl font-bold">All Notes</p>
          <div className="flex items-center gap-x-4">
            <SearchInput onChangeSearch={onChangeSearch} />
            <Settings />
          </div>
        </div>
        <div className="divide-secondary/50 row-span-9 grid grid-cols-4 divide-x">
          {/* Side Nav Outlet */}
          <div className="col-span-1">
            {/* <AllNotes /> */}
            <Outlet />
          </div>
          {/* Outlet Notes */}
          <div className="col-span-2 grid grid-rows-9">
            <div className="row-span-8 p-4">
              <NoteContentPage />
              <hr className="text-secondary/50" />
            </div>
            <div className="row-span-1 p-2">
              <div className="flex gap-x-4 px-4">
                <SaveNoteButton />
                <CancelButton />
              </div>
            </div>
          </div>
          <div className="col-span-1 space-y-4 p-4">
            <ArchiveButton />
            <DeleteButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesktopPage;
