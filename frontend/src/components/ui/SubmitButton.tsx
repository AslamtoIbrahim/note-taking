import Loader from "./Loader";

type ButtonProp = {
  loading: boolean;
  text: string;
};
const SubmitButton = ({ text, loading }: ButtonProp) => {
  return (
    <button
      className="bg-primary hover:bg-primary/80 dark:bg-primary/90 dark:text-white/65 flex w-full cursor-pointer items-center justify-center gap-x-2 rounded py-1 text-white capitalize"
      type="submit"
    >
      {loading && <Loader className="size-4 border-white dark:border-white/65 dark:border-l-white/25 border-l-white/30" />}
      {text}
    </button>
  );
};

export default SubmitButton;
