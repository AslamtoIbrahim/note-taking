import { useState } from "react";

type TagCheckItemProp = {
  tagId: string;
  check: boolean;
  name: string;
  onCheckTag: (tagId: string, checked: boolean) => void;
};
const TagCheckItem = ({ tagId, check, name, onCheckTag }: TagCheckItemProp) => {
  const [checked, setChecked] = useState(check);
  return (
    <div className="flex items-center gap-x-2">
      <input
        className="size-4"
        type="checkbox"
        checked={checked}
        id={name}
        onChange={(e) => {
          setChecked(e.currentTarget.checked);
          onCheckTag(tagId, e.currentTarget.checked);
        }}
      />
      <label htmlFor={name}>
        <p className="text-secondary">{name}</p>
      </label>
    </div>
  );
};

export default TagCheckItem;
