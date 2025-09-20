import Profile from "../components/layout/Profile";
import ArchivedNotesNavigate from "../components/ui/ArchivedNotesNavigate";
import ToggleTheme from "../components/ui/ToggleTheme";
import TrashNavigate from "../components/ui/TrashNavigate";

const SettingsPage = () => {
  return (
    <div className="padx font-body h-full space-y-2 rounded-t-xl bg-white py-4">
      <h1 className="text-secondary text-lg">Settings</h1>
      <section className="bg-secondary/5 divide-secondary/15 divide-y rounded">
        <ArchivedNotesNavigate />
        <TrashNavigate />
      </section>
      <section className="bg-secondary/5 rounded">
        <ToggleTheme />
      </section>
      <h1 className="text-secondary text-lg">Profile</h1>
      <section className="bg-secondary/5 rounded">
        <Profile />
      </section>
    </div>
  );
};

export default SettingsPage;
