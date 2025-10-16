import { FaTrash, FaTrashRestore } from "react-icons/fa";
import {
  useDeleteForeverNote,
  useRestoreNote,
} from "../../hooks/use-query-note";
import type { Note } from "../../utils/types";

type TrashItemProp = {
  note: Note;
  searchForCaching: string;
};
const TrashItem = ({ note, searchForCaching }: TrashItemProp) => {
  const restoreNoteMutation = useRestoreNote(searchForCaching);
  const deleteForverNoteMutation = useDeleteForeverNote(searchForCaching);

  const onDeleteForever = () => {
    const id = note._id;
    if (id) {
      deleteForverNoteMutation.mutate(id);
    }
  };
  const onRestore = () => {
    const id = note._id;
    if (id) {
      restoreNoteMutation.mutate({ id, note: { deletedAt: null } });
    }
  };
  return (
    <div className="border-secondary/50 hover:bg-primary/15 group flex cursor-pointer items-center justify-between rounded border px-3 py-2">
      <section className="space-y-1">
        <p className="text-sm text-gray-700 capitalize dark:text-white/65">
          {note.title}
        </p>
       
        <p className="ml-0.5 font-mono text-xs tracking-tighter text-gray-500">
          {note.deletedAt &&
            new Date(note.deletedAt).toLocaleDateString("en-UK", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
        </p>
      </section>
      <section className="text-secondary lg:invisible flex items-center space-x-2 text-sm lg:opacity-0 transition-opacity duration-700 ease-in-out lg:group-hover:visible lg:group-hover:opacity-100">
        <div className="relative">
          <FaTrash className="peer trash-icon" onClick={onDeleteForever} />
          <span className="bg-secondary status absolute -top-5 -left-8 z-20 rounded-xs px-0.5 text-[0.6rem] text-nowrap text-white">
            delete forever
          </span>
        </div>
        <div className="relative">
          <FaTrashRestore className="peer trash-icon" onClick={onRestore} />
          <span className="bg-secondary status absolute -top-5 -left-4 z-20 rounded-xs px-0.5 text-[0.6rem] text-nowrap text-white">
            restore
          </span>
        </div>
      </section>
    </div>
  );
};

export default TrashItem;
