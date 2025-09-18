import { PiTagBold } from "react-icons/pi";

type TagItemProp = {
  tag: string;
};
const TagItem = ({ tag }: TagItemProp) => {
  return (
    <div className="hover:bg-primary/10 flex items-center cursor-pointer gap-x-4 rounded px-4 py-2 capitalize">
      <PiTagBold className="text-lg" />
      <p>{tag}</p>
    </div>
  );
};

export default TagItem;
