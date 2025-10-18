import type { Editor } from "@tiptap/react";
import { useEffect, useState } from "react";
import type { RgbaColor } from "react-colorful";
import {
  BiBold,
  BiFontColor,
  BiItalic,
  BiStrikethrough,
  BiUnderline,
} from "react-icons/bi";
import { BsJustifyLeft, BsJustifyRight, BsTextCenter } from "react-icons/bs";
import { GoListOrdered, GoListUnordered } from "react-icons/go";
import { PiHighlighterBold } from "react-icons/pi";
import ColorPicker from "./ColorPicker";

const NoteBar = ({ editor }: { editor: Editor }) => {
  const [fontPopupColor, setFontPopupColor] = useState(false);
  const [hilightPopupColor, setHilightPopupColor] = useState(false);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [strike, setStrike] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [color, setColor] = useState("#000000");
  const [highlight, setHighlight] = useState("");

  useEffect(() => {
    if (!editor) return;

    editor.on("selectionUpdate", ({ editor }) => {
      const colorAttrs = editor.getAttributes("textStyle");
      const highlightAttrs = editor.getAttributes("highlight");
      setColor(colorAttrs.color);
      setHighlight(highlightAttrs.color);

      const { from, to } = editor.state.selection;
      const selectedText = editor.state.doc.textBetween(from, to);
      if (selectedText.length > 0) {
        setBold(editor.isActive("bold"));
        setItalic(editor.isActive("italic"));
        setStrike(editor.isActive("strike"));
        setUnderline(editor.isActive("underline"));
      }
    });
  }, [editor]);

  if (!editor) {
    return;
  }

  const selectFontColor = (newColor: RgbaColor) => {
    const colorString = `rgba(${newColor.r},${newColor.g},${newColor.b},${newColor.a})`;
    editor.chain().focus().setColor(colorString).run();
  };

  const showFontColorBar = () => {
    setFontPopupColor((prev) => !prev);
  };

  const selectHilightColor = (newColor: RgbaColor) => {
    const colorString = `rgba(${newColor.r},${newColor.g},${newColor.b},${newColor.a})`;
    editor.chain().focus().setHighlight({ color: colorString }).run();
  };

  const showHilightColorBar = () => {
    setHilightPopupColor((prev) => !prev);
  };

  const onCloseFontColorHanlder = () => {
    setFontPopupColor(false);
  };
  const onCloseHilightHanlder = () => {
    setHilightPopupColor(false);
  };

  return (
    <div className="text-secondary flex items-center justify-between gap-x-2 px-2 py-4 md:p-4">
      <BsJustifyLeft
        className={`editor-icons`}
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
      />
      <BsTextCenter
        className={`editor-icons`}
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
      />
      <BsJustifyRight
        className={`editor-icons`}
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
      />
      <BiBold
        className={`editor-icons ${bold && "prop-active"}`}
        onClick={() => editor.chain().focus().toggleBold().run()}
      />
      <BiItalic
        className={`editor-icons ${italic && "prop-active"}`}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      />
      <BiStrikethrough
        className={`editor-icons ${strike && "prop-active"}`}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      />
      <BiUnderline
        className={`editor-icons ${underline && "prop-active"}`}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      />
      <GoListOrdered
        className={`editor-icons`}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      />
      <GoListUnordered
        className={`editor-icons`}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      />

      <div className="relative">
        <BiFontColor
          style={{
            color: color,
          }}
          className={`editor-icons border-secondary rounded-sm border text-black`}
          onClick={showFontColorBar}
        />
        <ColorPicker
          onCloseColorPicker={onCloseFontColorHanlder}
          isPopupOn={fontPopupColor}
          onChangeColor={selectFontColor}
        />
      </div>

      <div className="relative">
        <PiHighlighterBold
          style={{
            color: highlight,
          }}
          className="editor-icons border-secondary rounded-sm border"
          onClick={showHilightColorBar}
        />
        <ColorPicker
          onCloseColorPicker={onCloseHilightHanlder}
          isPopupOn={hilightPopupColor}
          onChangeColor={selectHilightColor}
        />
      </div>
    </div>
  );
};

export default NoteBar;
