import DeskAllNotesNav from "../components/ui/DeskAllNotesNav";
import DeskArchivedNotesNav from "../components/ui/DeskArchivedNotesNav";
import Logo from "../components/ui/Logo";
import TagsPage from "../pages/TagsPage";

const SideNav = () => {
  return (
    <div className="grid grid-rows-4">
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
    </div>
  );
};

export default SideNav;
