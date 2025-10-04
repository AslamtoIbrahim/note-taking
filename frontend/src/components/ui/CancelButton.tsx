
type CancelButtonProp = {
  onclick?: () => void;
};
const CancelButton = ({ onclick }: CancelButtonProp) => {
  return (
    <button onClick={onclick} className="text-secondary cursor-pointer capitalize dark:border dark:border-secondary/50 hover:text-text-dark
    lg:bg-secondary/10 lg:px-4 lg:rounded lg:hover:bg-secondary/15 icon-button">
      cancel
    </button>
  );
};

export default CancelButton;
