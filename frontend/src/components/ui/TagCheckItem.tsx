import { useState } from "react";

type TagCheckItemProp = {
  tagId: string;
  check: boolean;
  name: string;
  onCheckTag: (tagId: string, checked: boolean) => void;
};
const TagCheckItem = ({ tagId, check, name, onCheckTag }: TagCheckItemProp) => {
  const [checked, setChecked] = useState(check);
  const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked);
    onCheckTag(tagId, e.currentTarget.checked);
    console.log("value", e.currentTarget.checked);
  };

  const onClickHandler = () => {
    const check = !checked;
    setChecked(check);
    onCheckTag(tagId, check);
  };
  return (
    <div className="flex items-center gap-x-2">
      <input
        className="size-4 cursor-pointer"
        type="checkbox"
        checked={checked}
        id={name}
        onChange={onChangeCheck}
      />
      <label
        className="text-secondary cursor-pointer"
        htmlFor={name}
        onClick={onClickHandler}
      >
        {name}
      </label>
    </div>
  );
};

export default TagCheckItem;
