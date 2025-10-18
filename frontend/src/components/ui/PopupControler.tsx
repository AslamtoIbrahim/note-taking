import { useState } from "react";
import {
  useArchiveNote,
  useDeleteNote,
  useUnarchiveNote,
} from "../../hooks/use-query-note";
import { useTagsLinkToNote } from "../../hooks/use-query-tags";
import type { Note } from "../../utils/types";
import DeleteDialog from "./DeleteDialog";
import PopupMenu from "./PopupMenu";
import TagsDialog from "./TagsDialog";

type PopupControlerProp = {
  onPopupClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  note: Note;
};
const PopupControler = ({ onPopupClick, note }: PopupControlerProp) => {
  const [deleteActive, setDeleteActive] = useState(false);
  const [tagsActive, setTagsActive] = useState(false);
  const unarchiveNote = useUnarchiveNote();
  const deleteNote = useDeleteNote(note._id);
  const archiveNote = useArchiveNote();
  const { data: tags } = useTagsLinkToNote(note._id);

  const onPopupClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      setTagsActive(false);
      setDeleteActive(false);
      onPopupClick?.(e);
    }
  };

  const onCloseDeleteDialog = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      setDeleteActive(false);
    }
  };

  const onCloseTagsDialog = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      setTagsActive(false);
    }
  };

  const onActiveDeleteDialog = () => {
    setDeleteActive((prv) => !prv);
  };

  const onActiveTagsDialog = () => {
    setTagsActive((prv) => !prv);
  };

  const onDeleteClickNoteHandler = () => {
    const id = note._id;
    if (id) {
      deleteNote.mutate(id);
      setDeleteActive(false);
    }
  };

  const onArchiveClickHandler = () => {
    const id = note._id;
    if (id) {
      if (note.archivedAt) {
        unarchiveNote.mutate(id);
      } else {
        archiveNote.mutate(id);
      }
      setDeleteActive(false);
    }
  };

  return (
    <div>
      {/* bg popuo */}
      <div className="bc-dg z-10" onClick={onPopupClickHandler} />
      <PopupMenu
        onShowTagsDialogClick={onActiveTagsDialog}
        isArchived={note.archivedAt ? true : false}
        onArchiveClick={onArchiveClickHandler}
        onShowDeleteDialogClick={onActiveDeleteDialog}
        className="absolute right-10 z-10"
      />
      {/* bg delete dialog */}
      {deleteActive && (
        <div>
          <div
            className="bc-dg bg-text-dark/20 dark:bg-text-dark/85 z-10"
            onClick={onCloseDeleteDialog}
          />
          <DeleteDialog
            onCancelClick={() => setDeleteActive(false)}
            onDeleteClick={onDeleteClickNoteHandler}
          />
        </div>
      )}
      {/* bg tags dialog */}
      {tagsActive && (
        <div>
          <div
            className="bc-dg bg-text-dark/20 dark:bg-text-dark/85 z-10"
            onClick={onCloseTagsDialog}
          />
          <div className="absolute top-1/2 right-1/2 z-10 w-full translate-x-1/2 -translate-y-34 cursor-default rounded">
            {tags && <TagsDialog tags={tags} id={note._id} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupControler;

// {
//   <div className="relative">
//     {popupActive && (
//       <div onClick={onPopupClickHandler} className={`dialog z-20 bg-amber-700`}>
//         <div className="">
//           <PopupMenu
//             onShowTagsDialogClick={onActiveTagsDialog}
//             isArchived={note.archivedAt ? true : false}
//             onArchiveClick={onArchiveClickHandler}
//             onShowDeleteDialogClick={onActiveDeleteDialog}
//             className="absolute right-0"
//           />
//         </div>
//       </div>
//     )}
//     {(deleteActive || tagsActive) && (
//       <div
//         onClick={onCloseDialog}
//         className={`dialog ${(deleteActive || tagsActive) && "bg-lime-300"} z-30`}
//       >
//         {deleteActive && (
//           <DeleteDialog
//             onCancelClick={() => setDeleteActive(false)}
//             onDeleteClick={onDeleteClickNoteHandler}
//           />
//         )}
//         {tagsActive && (
//           <div className="absolute top-1/2 right-1/2 w-full translate-x-1/2 -translate-y-34 cursor-default rounded">
//             {tags && <TagsDialog tags={tags} id={note._id} />}
//           </div>
//         )}
//       </div>
//     )}
//   </div>;
// }
