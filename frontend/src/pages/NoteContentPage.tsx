import { Editor, type JSONContent } from "@tiptap/react";
import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import Metadata from "../components/layout/Metadata";
import Loader from "../components/ui/Loader";
import NoteText from "../components/ui/NoteText";
import TitleInput from "../components/ui/TitleInput";
import {
  useAddNote,
  useArchiveNote,
  useDelteNote,
  useQueryNote,
  useUnarchiveNote,
  useUpdateNote,
} from "../hooks/use-query-note";
import ActionBar from "../navigation/ActionBar";

const fullback: JSONContent = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      attrs: {
        textAlign: null,
      },
      content: [
        {
          type: "text",
          text: "",
        },
      ],
    },
  ],
};

const NoteContentPage = () => {
  const { id } = useParams();

  const { data: noteDetails, isPending, error } = useQueryNote(id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<JSONContent>(fullback);
  const [activeTag, setActiveTag] = useState(false);

  const navigate = useNavigate();

  const addNoteMutation = useAddNote();

  const updateNoteMutation = useUpdateNote(id);

  const deleteNoteMutation = useDelteNote();

  const archiveNoteMutation = useArchiveNote();

  const unarchiveNoteMutation = useUnarchiveNote();

  useEffect(() => {
    if (noteDetails) {
      setTitle(noteDetails.title);
      setContent(noteDetails.content);
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
    navigate(-1);
  };

  const onDeleteNoteHandler = () => {
    if (id) {
      deleteNoteMutation.mutate(id);
      navigate(-1);
    }
  };

  const onArchiveNoteHandler = () => {
    if (id) {
      archiveNoteMutation.mutate(id);
      navigate(-1);
    }
  };

  const onUnarchiveNoteHandler = () => {
    if (id && noteDetails?.archivedAt) {
      unarchiveNoteMutation.mutate(id);
      navigate(-1);
    }
  };

  const onShowTagsHandler = () => {
    setActiveTag(prev => !prev)
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
    <div className=" padx font-body h-full space-y-2 rounded-t-xl bg-white">
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
      <TitleInput
        title={title}
        onChange={onTitleChangeHandler}
      />
      <Metadata tags={noteDetails?.tags} lastEdit={noteDetails?.lastEdit} />
      <hr className="text-secondary/50" />
      {/* Add a WYSIWYG editor with text formatting for the notes */}
      <NoteText content={content} onUpdate={onUpdateNoteText} />
      {activeTag && <div onClick={onShowTagsHandler} className="bg-black/50 z-100 h-screen absolute top-0 left-0 w-full ">
        
      </div>}
    </div>
  );
};

export default NoteContentPage;
