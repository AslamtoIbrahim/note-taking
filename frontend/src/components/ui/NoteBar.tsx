import type { Editor } from "@tiptap/react";
import {
  BiBold,
  BiFontColor,
  BiItalic,
  BiStrikethrough,
  BiUnderline,
} from "react-icons/bi";
import { BsJustifyLeft, BsJustifyRight, BsTextCenter } from "react-icons/bs";
import { PiHighlighterBold } from "react-icons/pi";
import ColorBar from "./ColorBar";
import { useState } from "react";
import { GoListOrdered, GoListUnordered } from "react-icons/go";

const NoteBar = ({ editor }: { editor: Editor }) => {
  if (!editor) {
    return;
  }

  const [fontPopupColor, setFontPopupColor] = useState(false);
  const [hilightPopupColor, setHilightPopupColor] = useState(false);

  const selectFontColor = (color: string) => {
    setFontPopupColor(false);
    editor.chain().focus().setColor(color).run();
  };

  const showFontColorBar = () => {
    setFontPopupColor((prev) => !prev);
  };

  const selectHilightColor = (color: string) => {
    setHilightPopupColor(false);
    editor.chain().focus().setHighlight({ color: color }).run();
  };

  const showHilightColorBar = () => {
    setHilightPopupColor((prev) => !prev);
  };

  return (
    <div className="text-secondary flex items-center justify-between gap-x-2 px-2 py-4 md:p-4">
      <BsJustifyLeft
        className="editor-icons"
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
      />
      <BsTextCenter
        className="editor-icons"
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
      />
      <BsJustifyRight
        className="editor-icons"
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
      />
      <BiBold
        className="editor-icons"
        onClick={() => editor.chain().focus().toggleBold().run()}
      />
      <BiItalic
        className="editor-icons"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      />
      <BiStrikethrough
        className="editor-icons"
        onClick={() => editor.chain().focus().toggleStrike().run()}
      />
      <BiUnderline
        className="editor-icons"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      />
      <GoListOrdered
        className="editor-icons"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      />
      <GoListUnordered
        className="editor-icons"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      />

      <div className="relative">
        <BiFontColor
          className="editor-icons border-secondary rounded-full border"
          onClick={showFontColorBar}
        />
        <ColorBar isPopupOn={fontPopupColor} onChangeColor={selectFontColor} />
      </div>

      <div className="relative">
        <PiHighlighterBold
          className="editor-icons"
          onClick={showHilightColorBar}
        />
        <ColorBar
          isPopupOn={hilightPopupColor}
          onChangeColor={selectHilightColor}
        />
      </div>
    </div>
  );
};

export default NoteBar;
