type CancelButtonProp = {
  onclick?: () => void;
};
const CancelButton = ({ onclick }: CancelButtonProp) => {
  return (
    <button
      onClick={onclick}
      className="text-secondary dark:border-secondary/50 hover:text-text-dark lg:bg-secondary/10 lg:hover:bg-secondary/15 icon-button cursor-pointer capitalize md:rounded md:px-4 md:py-1 md:dark:border"
    >
      cancel
    </button>
  );
};

export default CancelButton;
