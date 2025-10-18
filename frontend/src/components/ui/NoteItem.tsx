import { use, useEffect, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import { useTagsLinkToNote } from "../../hooks/use-query-tags";
import LayoutContext from "../../store/layout-context";
import type { Note } from "../../utils/types";
import PopupControler from "./PopupControler";

type NoteItemProp = {
  note: Note;
  onclick?: () => void;
};

const NoteItem = ({ note, onclick }: NoteItemProp) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [path, setPath] = useState(`/editor/`);
  const { setIsVisible } = use(LayoutContext);
  const { data: tags } = useTagsLinkToNote(note._id);

  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    if (isDesktop) {
      setPath(`editor/`);
    }
  }, [isDesktop]);

  const onClickHandler = () => {
    setIsVisible(true);
  };

  const onMoreMenuClick = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setPopupActive((prv) => !prv);
  };

  const onPopupClickHandler = () => {
    setPopupActive(false);
  };

  return (
    <NavLink
      to={`${path}${note._id}`}
      className={({ isActive }) =>
        `${isActive ? "active" : "bg-transparent"} block h-fit`
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
            <h1 className="text-lg font-black capitalize dark:text-white/75">
              {note.title}
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {tags &&
              tags.map((t, i) => {
                return (
                  <p
                    className="bg-secondary/20 dark:bg-primary/30 rounded px-2 text-sm dark:text-white/60"
                    key={i}
                  >
                    {t.tagId.title}
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

        <div className="pr-4">
          <FiMoreHorizontal
            className="editor-icons text-text-dark dark:text-secondary mt-4 size-4 cursor-pointer"
            onClick={onMoreMenuClick}
          />
          {popupActive && (
            <PopupControler onPopupClick={onPopupClickHandler} note={note} />
          )}
        </div>
      </div>
    </NavLink>
  );
};

export default NoteItem;
