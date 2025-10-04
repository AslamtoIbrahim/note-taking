import type { ChangeEvent } from "react";
import { FiSearch } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

type SearchInputProp = {
  search: string;
  onChangeSearch: (value: string) => void;
  className?: string;
  placeholder?: string;
};
const SearchInput = ({
  search,
  onChangeSearch,
  className,
  placeholder = "search by title, content or tags",
}: SearchInputProp) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    onChangeSearch(event.currentTarget.value);
  };

  return (
    <div
      className={twMerge(
        className,
        "bg-secondary/1 ring-secondary dark:placeholder:text-secondary flex items-center rounded-md px-4 py-2 ring-1 dark:text-white/65",
      )}
    >
      <FiSearch className="text-secondary" />
      <input
        value={search}
        onChange={onChangeHandler}
        type="search"
        className="w-full truncate px-2 outline-none placeholder:truncate placeholder-shown:truncate"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
