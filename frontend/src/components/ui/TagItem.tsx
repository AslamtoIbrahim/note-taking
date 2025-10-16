import { use } from "react";
import { BsTag } from "react-icons/bs";
import { CgChevronRight } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";
import { useNotesLinkToTag } from "../../hooks/use-query-tags";
import LayoutContext from "../../store/layout-context";

type TagItemProp = {
  tag: string;
  tagId: string;
};
const TagItem = ({ tag, tagId }: TagItemProp) => {
  const { setIsVisible } = use(LayoutContext);
  const { data } = useNotesLinkToTag(tagId);

  const onClickHandler = () => {
    if (data?.pages.map((p) => p.notes).flat(Infinity).length === 0) {
      toast.warning("no items in this tag 😁");
      return;
    }
    setIsVisible(false);
  };

  return (
    <NavLink
      onClick={onClickHandler}
      to={`/tags/${tagId}`}
      className={({ isActive }) =>
        `${isActive ? "active" : "block w-full bg-transparent"} group hover:bg-primary/10 lg:my-1`
      }
    >
      <div className="flex w-full items-center justify-between lg:pr-8">
        <div className="dark:text-secondary flex w-full cursor-pointer items-center gap-x-4 rounded px-4 py-2 capitalize">
          <BsTag className="text-lg" />
          <p>{tag}</p>
        </div>
        <CgChevronRight className="dark:text-secondary invisible mr-4 lg:mr-0 size-5 group-[.active]:visible" />
      </div>
    </NavLink>
  );
};

export default TagItem;
