import { useState } from "react";
import MobileAddNoteButton from "../components/ui/MobileAddNoteButton";
import NoteItem from "../components/ui/NoteItem";
import SearchInput from "../components/ui/SearchInput";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  function onChangeSearchHnadler(value: string): void {
    setSearch(value);
  }

  return (
    <div className="padx font-body h-full space-y-2 rounded-t-xl bg-white py-4">
      <SearchInput onChangeSearch={onChangeSearchHnadler} />
      {search && (
        <p className="text-sm">
          All notes matching "<span className="font-semibold">{search}</span>"
          are displayed below
        </p>
      )}
      <section className="divide-secondary/50 divide-y">
        {/* <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem /> */}
      </section>
      <MobileAddNoteButton />
    </div>
  );
};

export default SearchPage;
