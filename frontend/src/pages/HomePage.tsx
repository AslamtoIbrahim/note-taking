import MobileAddNoteButton from "../components/ui/MobileAddNoteButton";
import NoteItem from "../components/ui/NoteItem";

const HomePage = () => {
  return (
    <div className="padx font-body relative  space-y-2 rounded-t-xl lg:rounded-none bg-white py-4 lg:py-0">
      <section className="divide-secondary/50 divide-y lg:h-[37rem] lg:overflow-auto lg:scroll-smooth ">
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
