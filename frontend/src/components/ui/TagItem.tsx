import { BsTag } from "react-icons/bs";
import { NavLink } from "react-router-dom";

type TagItemProp = {
  tag: string;
};
const TagItem = ({ tag }: TagItemProp) => {
  return (
    <NavLink to={`/taged-notes/${tag}`} className={(({isActive}) => isActive ? "active" : "bg-transparent")}>
      <div className="hover:bg-primary/10 flex cursor-pointer items-center gap-x-4 rounded px-4 py-2 capitalize ">
        <BsTag className="text-lg " />
        <p>{tag}</p>
      </div>
    </NavLink>
  );
};

export default TagItem;
