import type { ChangeEvent } from "react";

type TitleInputProp = {
  title: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TitleInput = ({ title, onChange }: TitleInputProp) => {
   
  return (
    <input
      onChange={onChange}
      className="py-2 text-2xl dark:text-white/65 dark:placeholder:text-secondary font-black outline-none capitalize truncate w-full"
      type="text"
      value={title}
      placeholder="Title..."
    />
  );
};

export default TitleInput;
