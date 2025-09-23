import { BiArchiveOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const tags = ["Dev", "React"];

type NoteItemProp = {
  value?: string
  onclick?: () => void;
};

const NoteItem = ({value,  onclick }: NoteItemProp) => {
  const isDeleted = false;
  return (
    <NavLink
      to={`/all-notes/${value}`}
      className={({ isActive }) => (isActive ? "active" : "bg-transparent")}
    >
      <div
        onClick={onclick}
        className="hover:bg-primary/10 cursor-pointer space-y-3 p-4 hover:rounded lg:px-2"
      >
        <div className="flex justify-between">
          <h1 className="text-lg font-black capitalize">
            react performance optimization
          </h1>
          {isDeleted && (
            <BiArchiveOut className="text-primary mt-2 size-5 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-115" />
          )}
        </div>
        <div className="flex items-center gap-4">
          {tags.map((t, i) => {
            return (
              <p className="bg-secondary/20 rounded px-2" key={i}>
                {t}
              </p>
            );
          })}
        </div>
        <p className="text-secondary">29 Oct 2024</p>
      </div>
    </NavLink>
  );
};

export default NoteItem;
