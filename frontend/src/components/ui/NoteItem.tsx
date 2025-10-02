import { BiArchiveOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import type { Note } from "../../utils/types";
import { useUnarchiveNote } from "../../hooks/use-query-note";
import { use, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import LayoutContext from "../../store/layout-context";

type NoteItemProp = {
  note: Note;
  onclick?: () => void;
};

const NoteItem = ({ note, onclick }: NoteItemProp) => {
  const unarchiveNote = useUnarchiveNote();
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [path, setPath] = useState(`/editor/`);
  const { setIsVisible } = use(LayoutContext);

  useEffect(() => {
    if (isDesktop) {
      setPath(`editor/`);
    }
  }, [isDesktop]);

  const onUnrachiveNote = () => {
    if (note._id && note.archivedAt) {
      unarchiveNote.mutate(note._id);
    }
  };

  const onClickHandler = () => {
    setIsVisible(true);
  };

  return (
    <NavLink
      to={`${path}${note._id}`}
      className={({ isActive }) =>
        isActive ? "active" : "h-fit block  bg-transparent"
      }
    >
      <div
        onClick={onClickHandler}
        className="hover:bg-primary/10 flex justify-between"
      >
        <div
          onClick={onclick}
          className="cursor-pointer space-y-3 p-4 hover:rounded lg:px-2"
        >
          <div className="flex justify-between">
            <h1 className="text-lg font-black capitalize">{note.title}</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {note.tags.map((t, i) => {
              return (
                <p className="bg-secondary/20 rounded px-2 text-sm" key={i}>
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

        {note.archivedAt && (
          <BiArchiveOut
            onClick={onUnrachiveNote}
            className="text-primary mt-3 size-6 cursor-pointer p-1 transition-transform duration-200 ease-in-out hover:scale-115 lg:mt-6 lg:mr-4"
          />
        )}
      </div>
    </NavLink>
  );
};

export default NoteItem;
