
type SaveNoteButtonProp = {
    onclick?: () => void
}
const SaveNoteButton = ({onclick}: SaveNoteButtonProp) => {
  return (
    <button onClick={onclick} className="text-primary capitalize cursor-pointer hover:text-blue-600
    lg:text-white lg:bg-primary lg:py-2 lg:px-4 lg:rounded lg:hover:text-white lg:hover:bg-blue-600">
      save note
    </button>
  )
}

export default SaveNoteButton
