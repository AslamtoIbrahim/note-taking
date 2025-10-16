import { CgChevronLeft } from "react-icons/cg";
import { twMerge } from "tailwind-merge";

type GoBackButtonProp = {
  className?: string;
  onclick?: () => void;
};

const GoBackButton = ({ className, onclick }: GoBackButtonProp) => {
  return (
    <button
      onClick={onclick}
      className={twMerge(
        className,
        "text-secondary hover:text-text-dark flex cursor-pointer items-center gap-0.5 capitalize dark:hover:text-white/65",
      )}
    >
      <CgChevronLeft className="size-5" />
      <p className="hidden md:block">go back</p>
    </button>
  );
};

export default GoBackButton;
