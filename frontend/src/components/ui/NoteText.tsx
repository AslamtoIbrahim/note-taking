import Document from "@tiptap/extension-document";
import Highlight from "@tiptap/extension-highlight";
import { BulletList, ListItem, OrderedList } from "@tiptap/extension-list";
import TextAlign from "@tiptap/extension-text-align";
import { Color, TextStyle } from "@tiptap/extension-text-style";
import { Placeholder } from "@tiptap/extensions";
import Text from '@tiptap/extension-text'
import Paragraph from '@tiptap/extension-paragraph'
import {
  Editor,
  EditorContent,
  useEditor,
  type JSONContent,
} from "@tiptap/react";
import "prosemirror-view/style/prosemirror.css";
import NoteBar from "./NoteBar";
import { useEffect } from "react";

type NoteTextProp = {
  content: JSONContent;
  onUpdate: (editor: Editor) => void;
};

const NoteText = ({ content, onUpdate }: NoteTextProp) => {
  // const [jsonContent, setJsonContent] = useState<JSONContent>(jsonexample);

  const editor = useEditor({
    // schema of editor
    extensions: [
      Document,
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
      Paragraph
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
        className="border-secondary tiptop py-2 outline-none"
        editor={editor}
      />
    </div>
  );
};

export default NoteText;
