import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/layout/Profile";
import TrashDialog from "../components/layout/TrashDialog";
import ArchivedNotesNavigate from "../components/ui/ArchivedNotesNavigate";
import ToggleTheme from "../components/ui/ToggleTheme";
import TrashNavigate from "../components/ui/TrashNavigate";

const SettingsPage = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const onArchivedNotesHandler = () => {
    navigate("/archived");
  };
  const onTrashHandler = () => {
    setActive((prv) => !prv);
  };

  const onClickHandler = () => {
    setActive((prv) => !prv);
  };

  return (
    <div className="padx font-body h-full space-y-2 rounded-t-xl bg-white py-4">
      <h1 className="text-secondary text-lg">Settings</h1>
      <section className="bg-secondary/5 divide-secondary/15 divide-y rounded">
        <ArchivedNotesNavigate onClick={onArchivedNotesHandler} />
        <TrashNavigate onClick={onTrashHandler} />
      </section>
      <section className="bg-secondary/5 rounded">
        <ToggleTheme />
      </section>
      <h1 className="text-secondary text-lg">Profile</h1>
      <section className="bg-secondary/5 rounded">
        <Profile />
      </section>
      {active && (
        <div
          className="absolute top-0 left-0 z-10 flex h-screen w-full items-center justify-center bg-black/50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setActive((prev) => !prev);
            }
          }}
        >
          <TrashDialog onClick={onClickHandler} />
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
