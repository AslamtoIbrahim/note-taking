import { use } from "react";
import { BsTag } from "react-icons/bs";
import { CgChevronRight } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import LayoutContext from "../../store/layout-context";

type TagItemProp = {
  tag: string;
};
const TagItem = ({ tag }: TagItemProp) => {
  const { setIsVisible, setSearch } = use(LayoutContext);

  const onClickHandler = () => {
    setSearch(tag);
    setIsVisible(false);
  };
  return (
    <NavLink
      onClick={onClickHandler}
      to={`/search/${tag}`}
      className={({ isActive }) =>
        `${isActive ? "active" : "block w-full bg-transparent"} group hover:bg-primary/10 lg:my-1 `
      }
    >
      <div className="w-full items-center justify-between flex lg:pr-8">
        <div className="flex w-full cursor-pointer items-center gap-x-4 rounded px-4 py-2 capitalize dark:text-secondary">
          <BsTag className="text-lg" />
          <p>{tag}</p>
        </div>
        <CgChevronRight className="invisible size-5 group-[.active]:visible" />
      </div>
    </NavLink>
  );
};

export default TagItem;
