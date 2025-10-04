import { CgChevronLeft } from "react-icons/cg";

type GoBackButtonProp = {
  onclick?: () => void;
};

const GoBackButton = ({ onclick }: GoBackButtonProp) => {
  return (
    <button
      onClick={onclick}
      className="text-secondary hover:text-text-dark dark:hover:text-white/65 flex cursor-pointer items-center gap-0.5 capitalize"
    >
      <CgChevronLeft className="size-5" />
      <p className="hidden md:block">go back</p>
    </button>
  );
};

export default GoBackButton;
