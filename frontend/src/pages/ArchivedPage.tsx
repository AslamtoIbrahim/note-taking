import { BiArchiveOut } from "react-icons/bi";
import NoteItem from "../components/ui/NoteItem";

const ArchivedPage = () => {
  return (
    <div className="padx font-body h-full space-y-2 rounded-t-xl bg-white py-4">
      <section className="flex items-center gap-2 text-secondary">
        <h1>You can unarchive notes click on</h1>
        <BiArchiveOut />
      </section>
      <section className="divide-secondary/50 divide-y">
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
      </section>
    </div>
  );
};

export default ArchivedPage;
