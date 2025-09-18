import ArchiveButton from "../components/ui/ArchiveButton";
import CancelButton from "../components/ui/CancelButton";
import CreateNewNote from "../components/ui/CreateNewNote";
import DeleteButton from "../components/ui/DeleteButton";
import DeskAllNotesNav from "../components/ui/DeskAllNotesNav";
import DeskArchivedNotesNav from "../components/ui/DeskArchivedNotesNav";
import DeskSettingsButton from "../components/ui/DeskSettingsButton";
import Logo from "../components/ui/Logo";
import SaveNoteButton from "../components/ui/SaveNoteButton";
import SearchInput from "../components/ui/SearchInput";
import HomePage from "./HomePage";
import NoteContentPage from "./NoteContentPage";
import TagsPage from "./TagsPage";

const DesktopPage = () => {
  const onChangeSearch = (value: string): void => {
    throw new Error("Function not implemented.");
  };

  return (
    <div className="divide-secondary/50 hidden h-screen grid-cols-5 divide-x lg:grid">
      <section className="col-span-1 grid grid-rows-4">
        <div className="row-span-1 p-4">
          <Logo />
          <div className="space-y-2 p-2">
            <DeskAllNotesNav />
            <DeskArchivedNotesNav />
          </div>
          <hr className="text-secondary/50" />
        </div>
        <div className="row-span-3 -mt-4 h-full">
          <TagsPage />
        </div>
      </section>
      <section className="divide-secondary/50 col-span-4 grid grid-rows-10 divide-y">
        <div className="row-span-1 flex items-center justify-between px-8">
          <p className="text-2xl font-bold">All Notes</p>
          <div className="flex items-center gap-x-4">
            <SearchInput onChangeSearch={onChangeSearch} />
            <DeskSettingsButton />
          </div>
        </div>
        <div className="divide-secondary/50 row-span-9 grid grid-cols-4 divide-x">
          <div className="col-span-1 space-y-4 p-4">
            <CreateNewNote />
            <HomePage />
          </div>
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
          <div className="col-span-1 p-4 space-y-4">
            <ArchiveButton />
            <DeleteButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesktopPage;
