import MobileAddNoteButton from "../components/ui/MobileAddNoteButton";
import NoteItem from "../components/ui/NoteItem";

const HomePage = () => {
  return (
    <div className="padx font-body relative h-full space-y-2 rounded-t-xl bg-white py-4">
      <section className="divide-secondary/50 divide-y ">
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
      </section>
      <MobileAddNoteButton />
    </div>
  );
};

export default HomePage;
