import CreateNewNote from "../ui/CreateNewNote";
import HomePage from "../../pages/HomePage";

const AllNotes = () => {
  return (
    <div className="space-y-4 p-4">
      <CreateNewNote />
      <HomePage />
    </div>
  );
};

export default AllNotes;
