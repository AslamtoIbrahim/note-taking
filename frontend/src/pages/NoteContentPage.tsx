import { useParams } from "react-router-dom";
import Metadata from "../components/layout/Metadata";
import NoteText from "../components/ui/NoteText";
import TitleInput from "../components/ui/TitleInput";
import ActionBar from "../navigation/ActionBar";
import { Editor } from "@tiptap/react";
import type { ChangeEvent } from "react";

const jsonexample = {
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
          marks: [
            {
              type: "textStyle",
              attrs: {
                color: "#8a2be2",
              },
            },
          ],
          text: "hello gyus ",
        },
        {
          type: "text",
          marks: [
            {
              type: "textStyle",
              attrs: {
                color: "#7ccf00",
              },
            },
          ],
          text: "ahmed ",
        },
      ],
    },
  ],
};

const NoteContentPage = () => {
  const { id } = useParams();

  const onTitleChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {};

  const onEditUpdate = (editor: Editor) => {
    const json = editor.getJSON()
  };

  return (
    <div className="padx font-body h-full space-y-2 rounded-t-xl bg-white">
      <ActionBar />
      <hr className="text-secondary/50 lg:hidden" />
      <TitleInput title={id + ""} onChange={onTitleChangeHandler} />
      <Metadata />
      <hr className="text-secondary/50" />
      {/* Add a WYSIWYG editor with text formatting for the notes */}
      <NoteText content={jsonexample} onUpdate={onEditUpdate} />
    </div>
  );
};

export default NoteContentPage;
