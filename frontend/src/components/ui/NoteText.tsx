import Document from "@tiptap/extension-document";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { Color, TextStyle } from "@tiptap/extension-text-style";
import { Placeholder } from "@tiptap/extensions";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "prosemirror-view/style/prosemirror.css";
import NoteBar from "./NoteBar";
 import { BulletList, ListItem, OrderedList } from '@tiptap/extension-list'

const NoteText = () => {
  const editor = useEditor({
    extensions: [
      Document,
      StarterKit,
      BulletList,
      OrderedList.configure({
        itemTypeName: 'listItem',
        keepMarks: true
      }),
      ListItem,
      Placeholder.configure({
        placeholder: "Write somthing...",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight.configure({
        multicolor: true,
      }),
      TextStyle,
      Color,
    ],
  });

  return (
    <div>
      <NoteBar editor={editor} />
      <EditorContent
        className="border-secondary tiptop  py-2  outline-none"
        editor={editor}
      />
    </div>
  );
};

export default NoteText;
