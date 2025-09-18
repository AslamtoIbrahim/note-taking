import { BsTag } from "react-icons/bs";

type TagItemProp = {
  tag: string;
};
const TagItem = ({ tag }: TagItemProp) => {
  return (
    <div className="hover:bg-primary/10 flex cursor-pointer items-center gap-x-4 rounded px-4 py-2 capitalize ">
      <BsTag className="text-lg " />
      <p>{tag}</p>
    </div>
  );
};

export default TagItem;
