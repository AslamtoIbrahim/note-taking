type SaveNoteButtonProp = {
  text?: string;
  onclick?: () => void;
};
const SaveNoteButton = ({
  text = "save note",
  onclick,
}: SaveNoteButtonProp) => {
  return (
    <button
      onClick={onclick}
      className="text-primary lg:bg-primary cursor-pointer capitalize md:dark:bg-primary/75 dark:text-white/80  md:rounded md:px-4 md:py-1 lg:py-2 lg:text-white md:hover:bg-blue-600 lg:hover:text-white"
    >
      {text}
    </button>
  );
};

export default SaveNoteButton;
