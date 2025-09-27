import { BiArchiveOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import type { Note } from "../../utils/types";

type NoteItemProp = {
  note: Note;
  onclick?: () => void;
};

const NoteItem = ({ note, onclick }: NoteItemProp) => {
  const isDeleted = false;
  return (
    <NavLink
      to={`/editor/${note._id}`}
      className={({ isActive }) => (isActive ? "active" : "bg-transparent block")}
    >
      <div
        onClick={onclick}
        className="hover:bg-primary/10 cursor-pointer space-y-3 p-4 hover:rounded lg:px-2"
      >
        <div className="flex justify-between">
          <h1 className="text-lg font-black capitalize">{note.title}</h1>
          {isDeleted && (
            <BiArchiveOut className="text-primary mt-2 size-5 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-115" />
          )}
        </div>
        <div className="flex items-center gap-4">
          {note.tags.map((t, i) => {
            return (
              <p className="bg-secondary/20 rounded px-2" key={i}>
                {t}
              </p>
            );
          })}
        </div>
        <p className="text-secondary">
          {note.lastEdit && new Date(note.lastEdit).toLocaleDateString("en-UK", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </NavLink>
  );
};

export default NoteItem;
