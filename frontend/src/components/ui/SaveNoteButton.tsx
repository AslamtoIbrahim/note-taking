
type SaveNoteButtonProp = {
    onclick?: () => void
}
const SaveNoteButton = ({onclick}: SaveNoteButtonProp) => {
  return (
    <button onClick={onclick} className="text-primary capitalize cursor-pointer hover:text-blue-800">
      save note
    </button>
  )
}

export default SaveNoteButton
