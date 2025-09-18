
type CancelButtonProp = {
  onclick?: () => void;
};
const CancelButton = ({ onclick }: CancelButtonProp) => {
  return (
    <button onClick={onclick} className="text-secondary cursor-pointer capitalize hover:text-text-dark
    lg:bg-secondary/10 lg:px-4 lg:rounded lg:hover:bg-secondary/15">
      cancel
    </button>
  );
};

export default CancelButton;
