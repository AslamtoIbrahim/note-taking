import { Bold } from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Highlight from "@tiptap/extension-highlight";
import { Italic } from "@tiptap/extension-italic";
import { BulletList, ListItem, OrderedList } from "@tiptap/extension-list";
import Paragraph from "@tiptap/extension-paragraph";
import { Strike } from "@tiptap/extension-strike";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import { Color, TextStyle } from "@tiptap/extension-text-style";
import { Underline } from "@tiptap/extension-underline";
import { Placeholder } from "@tiptap/extensions";
import {
  Editor,
  EditorContent,
  useEditor,
  type JSONContent,
} from "@tiptap/react";
import "prosemirror-view/style/prosemirror.css";
import { useEffect } from "react";
import NoteBar from "./NoteBar";

type NoteTextProp = {
  content: JSONContent;
  onUpdate: (editor: Editor) => void;
};

const NoteText = ({ content, onUpdate }: NoteTextProp) => {
  const editor = useEditor({
    // schema of editor
    extensions: [
      Document,
      Bold,
      Italic,
      Strike,
      Underline,
      BulletList,
      OrderedList.configure({
        itemTypeName: "listItem",
        keepMarks: true,
      }),
      ListItem,
      Placeholder.configure({
        placeholder: "Write somthing ...",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight.configure({
        multicolor: true,
      }),
      TextStyle,
      Color,
      Text,
      Paragraph,
    ],
    content,
    onUpdate({ editor }) {
      onUpdate(editor);
    },
  });

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  return (
    <div>
      <NoteBar editor={editor} />
      <EditorContent
        className="border-secondary tiptop py-2 outline-none dark:text-white"
        editor={editor}
      />
    </div>
  );
};

export default NoteText;
