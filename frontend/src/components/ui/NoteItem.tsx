import { BiArchiveOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import type { Note } from "../../utils/types";
import { useUnarchiveNote } from "../../hooks/use-query-note";

type NoteItemProp = {
  note: Note;
  onclick?: () => void;
};

const NoteItem = ({ note, onclick }: NoteItemProp) => {
  const unarchiveNote = useUnarchiveNote();
  const onUnrachiveNote = () => {
    if (note._id && note.archivedAt) {
      console.log('note._id',note._id);
      console.log('note.archivedAt',note.archivedAt);
      unarchiveNote.mutate(note._id);
    }
  };
  return (
    <div className="flex justify-between hover:bg-primary/10">
      <NavLink
        to={`/editor/${note._id}`}
        className={({ isActive }) =>
          isActive ? "active " : "block bg-transparent flex-12"
        }
      >
        <div
          onClick={onclick}
          className=" cursor-pointer space-y-3 p-4 hover:rounded lg:px-2"
        >
          <div className="flex justify-between">
            <h1 className="text-lg font-black capitalize">{note.title}</h1>
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
            {note.lastEdit &&
              new Date(note.lastEdit).toLocaleDateString("en-UK", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
          </p>
        </div>
      </NavLink>
      {note.archivedAt && (
        <BiArchiveOut
          onClick={onUnrachiveNote}
          className="text-primary  mt-2 size-6 cursor-pointer p-1 transition-transform duration-200 ease-in-out hover:scale-115"
        />
      )}
    </div>
  );
};

export default NoteItem;
