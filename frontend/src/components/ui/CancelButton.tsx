
type CancelButtonProp = {
  onclick?: () => void;
};
const CancelButton = ({ onclick }: CancelButtonProp) => {
  return (
    <button onClick={onclick} className="text-secondary cursor-pointer capitalize hover:text-text-dark">
      cancel
    </button>
  );
};

export default CancelButton;
