import { Editor, type JSONContent } from "@tiptap/react";
import { use, useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import Metadata from "../components/layout/Metadata";
import ArchiveButton from "../components/ui/ArchiveButton";
import CancelButton from "../components/ui/CancelButton";
import DeleteButton from "../components/ui/DeleteButton";
import Loader from "../components/ui/Loader";
import NoteText from "../components/ui/NoteText";
import SaveNoteButton from "../components/ui/SaveNoteButton";
import TagsDialog from "../components/ui/TagsDialog";
import TitleInput from "../components/ui/TitleInput";
import UnarchiveButton from "../components/ui/UnarchiveButton";
import {
  useAddNote,
  useArchiveNote,
  useDelteNote,
  useQueryNote,
  useUnarchiveNote,
  useUpdateNote,
} from "../hooks/use-query-note";
import ActionBar from "../navigation/ActionBar";
import LayoutContext from "../store/layout-context";
import { fullback } from "../utils/types";

const NoteContentPage = () => {
  const { id } = useParams();
  const { isVisible, setIsVisible } = use(LayoutContext);
  const { data: noteDetails, isPending, error } = useQueryNote(id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<JSONContent>(fullback);
  const [activeTag, setActiveTag] = useState(false);

  const navigate = useNavigate();

  const addNoteMutation = useAddNote();

  const updateNoteMutation = useUpdateNote(id);

  const deleteNoteMutation = useDelteNote(id);

  const archiveNoteMutation = useArchiveNote();

  const unarchiveNoteMutation = useUnarchiveNote();

  useEffect(() => {
    if (noteDetails) {
      setTitle(noteDetails.title);
      setContent(noteDetails.content);
    } else {
      setTitle("");
      setContent(fullback);
    }
  }, [id, noteDetails]);

  const onTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const onUpdateNoteText = (editor: Editor) => {
    const json = editor.getJSON();
    setContent(json);
  };

  const onSaveUpdateNoteHandler = () => {
    if (!title || !content) {
      toast.warning("title or content must not be empty");
      return;
    }
    if (id) {
      // update note
      const updatedNote = {
        title,
        content,
      };
      updateNoteMutation.mutate({
        id,
        note: updatedNote,
      });
    } else {
      // save new note
      const newNote = {
        title,
        content,
        tags: [],
      };
      addNoteMutation.mutate(newNote);
    }
    setIsVisible(false);
    navigate(-1);
  };

  const onDeleteNoteHandler = () => {
    if (id) {
      deleteNoteMutation.mutate(id);
    }
    setIsVisible(false);
    navigate(-1);
  };

  const onArchiveNoteHandler = () => {
    if (id) {
      archiveNoteMutation.mutate(id);
    }

    setIsVisible(false);
    navigate(-1);
   
  };

  const onUnarchiveNoteHandler = () => {
    if (id && noteDetails?.archivedAt) {
      unarchiveNoteMutation.mutate(id);
      navigate(-1);
      setIsVisible(false);
    }
  };

  const onCancelHandler = () => {
    setIsVisible(false);
    navigate(-1);
  };

  const onShowTagsHandler = () => {
    setActiveTag((prev) => !prev);
  };

  if (id && isPending) {
    return (
      <div className="my-auto flex h-[30rem] items-center justify-center md:h-[35rem]">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-auto flex h-[30rem] items-center justify-center md:h-[35rem]">
        <p className="text-red-500">{error.message}</p>
      </div>
    );
  }

  return (
    <section className="lg:divide-secondary/50 lg:col-span-3 lg:grid lg:grid-cols-3 lg:divide-x">
      {/* 🟢 Outlet Notes */}
      <div
        className={`lg:col-span-2 lg:grid lg:grid-rows-9 ${isVisible ? "lg:visible" : "lg:invisible"}`}
      >
        <div className="lg:row-span-8 lg:p-4">
          {/* 🧧 NoteContentPage code here 🧧*/}
          <div className="padx font-body h-full space-y-2 rounded-t-xl">
            <ActionBar
              archivedAt={noteDetails?.archivedAt}
              onArchiveClick={onArchiveNoteHandler}
              onUnarchiveClick={onUnarchiveNoteHandler}
              onSaveUpdateClick={onSaveUpdateNoteHandler}
              onDeleteClick={onDeleteNoteHandler}
              onTagClick={onShowTagsHandler}
              id={id}
            />
            <hr className="text-secondary/50 lg:hidden" />
            <TitleInput title={title} onChange={onTitleChangeHandler} />
            <Metadata
              tags={noteDetails?.tags}
              lastEdit={noteDetails?.lastEdit}
            />
            <hr className="text-secondary/50" />
            {/* Add a WYSIWYG editor with text formatting for the notes */}
            <NoteText content={content} onUpdate={onUpdateNoteText} />
            {activeTag && (
              <div
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setActiveTag((prev) => !prev);
                  }
                }}
                className="absolute top-0 left-0 z-10 flex h-screen w-full items-center justify-center bg-black/50"
              >
                {<TagsDialog tags={noteDetails?.tags} id={id} />}
              </div>
            )}
          </div>
          {/* 🧧 NoteContentPage code here 🧧*/}
          <hr className="lg:text-secondary/50 hidden lg:block" />
        </div>
        <div className="hidden lg:row-span-1 lg:block lg:p-2">
          <div className="flex gap-x-4 px-4">
            <SaveNoteButton
              onclick={onSaveUpdateNoteHandler}
              text={id ? "update note" : "save note"}
            />
            <CancelButton onclick={onCancelHandler} />
          </div>
        </div>
      </div>
      <div
        className={`hidden lg:col-span-1 lg:block lg:space-y-4 lg:p-4 ${isVisible ? "lg:visible" : "lg:invisible"} `}
      >
        {noteDetails?.archivedAt ? (
          <UnarchiveButton onclick={onUnarchiveNoteHandler} />
        ) : (
          <ArchiveButton onclick={onArchiveNoteHandler} />
        )}
        <DeleteButton onclick={onDeleteNoteHandler} />
      </div>
    </section>
  );

};

export default NoteContentPage;
