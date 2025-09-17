import Metadata from "../components/layout/Metadata";
import NoteText from "../components/ui/NoteText";
import ActionBar from "../navigation/ActionBar";

const NoteContent = () => {
  return (
    <div className="h-full rounded-t-xl bg-white padx space-y-2 font-body">
      <ActionBar />
      <hr className="text-secondary/50 " />
      <h1 className="capitalize font-black text-2xl">react performance optimization</h1>
      <Metadata />
      <hr className="text-secondary/50 " />
      {/* Add a WYSIWYG editor with text formatting for the notes */}
      <NoteText />
    </div>
  );
};

export default NoteContent;
