import NoteItem from "../ui/NoteItem";

const TagedNotes = () => {
  return (
    <div className="bg-pink-400 divide-secondary/50 divide-y lg:flex lg:h-[37rem] lg:flex-col lg:gap-y-4 lg:overflow-auto lg:scroll-smooth">
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
    </div>
  );
};

export default TagedNotes;
