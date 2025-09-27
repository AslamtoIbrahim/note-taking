type SaveNoteButtonProp = {
  text: string;
  onclick?: () => void;
};
const SaveNoteButton = ({
  text = "save note",
  onclick,
}: SaveNoteButtonProp) => {
  return (
    <button
      onClick={onclick}
      className="text-primary lg:bg-primary cursor-pointer capitalize hover:text-blue-600 lg:rounded lg:px-4 lg:py-2 lg:text-white lg:hover:bg-blue-600 lg:hover:text-white"
    >
      {text}
    </button>
  );
};

export default SaveNoteButton;
