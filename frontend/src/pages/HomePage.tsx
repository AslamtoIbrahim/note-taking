import MobileAddNoteButton from "../components/ui/MobileAddNoteButton";
import NoteItem from "../components/ui/NoteItem";

const HomePage = () => {
  return (
    <div className="padx font-body relative space-y-2 rounded-t-xl bg-white py-4 lg:rounded-none lg:py-0">
      <section className="divide-secondary/50 divide-y lg:flex lg:h-[37rem] lg:flex-col lg:gap-y-4 lg:overflow-auto lg:scroll-smooth">
        <NoteItem value="4a84sas8" />
        <NoteItem value="a54s54a6" />
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
