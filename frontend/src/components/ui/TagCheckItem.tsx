import { useState } from "react";

type TagCheckItemProp = {
  check: boolean;
  name: string;
  onCheckTag: (checked: boolean, name: string) => void;
};
const TagCheckItem = ({ check, name, onCheckTag }: TagCheckItemProp) => {
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
          onCheckTag(e.currentTarget.checked, name)
        }}
      />
      <label htmlFor={name}>
        <p className="text-secondary">{name}</p>
      </label>
    </div>
  );
};

export default TagCheckItem;
