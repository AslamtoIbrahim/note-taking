import Metadata from "../components/layout/Metadata";
import NoteText from "../components/ui/NoteText";
import ActionBar from "../navigation/ActionBar";

const NoteContentPage = () => {
  return (
    <div className="padx font-body h-full space-y-2 rounded-t-xl bg-white">
      <ActionBar />
      <hr className="text-secondary/50 lg:hidden" />
      <h1 className="text-2xl font-black capitalize">
        react performance optimization
      </h1>
      <Metadata />
      <hr className="text-secondary/50" />
      {/* Add a WYSIWYG editor with text formatting for the notes */}
      <NoteText />
    </div>
  );
};

export default NoteContentPage;
