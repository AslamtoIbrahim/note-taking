import { twMerge } from "tailwind-merge";

type LoaderProp = {
  className?: string;
};
const Loader = ({ className }: LoaderProp) => {
  return (
    <div
      className={twMerge(
        "border-primary border-l-primary/50  size-6 animate-spin rounded-full border-4",
        className,
      )}
    ></div>
  );
};

export default Loader;
