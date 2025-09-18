import type { ChangeEvent } from "react";
import { FiSearch } from "react-icons/fi";

type SearchInputProp = {
  onChangeSearch: (value: string) => void;
};
const SearchInput = ({ onChangeSearch }: SearchInputProp) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    onChangeSearch(event.currentTarget.value);
  };

  return (
    <div className="bg-secondary/1 ring-secondary flex items-center rounded-md px-4 py-2 ring-1">
      <FiSearch className="text-secondary" />
      <input
        onChange={onChangeHandler}
        type="search"
        className="w-full truncate px-2 outline-none placeholder:truncate placeholder-shown:truncate"
        placeholder="search by title, content or tags"
      />
    </div>
  );
};

export default SearchInput;
