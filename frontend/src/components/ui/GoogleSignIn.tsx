import { FaGoogle } from "react-icons/fa";
import Loader from "./Loader";

type GoogleSignInProp = {
  onClick?: () => void;
  loading: boolean;
};

const GoogleSignIn = ({ onClick, loading }: GoogleSignInProp) => {
  return (
    <button
      onClick={onClick}
      className="bg-border text-text-dark dark:text-border dark:bg-text-dark dark:hover:bg-primary/50 hover:bg-border/50 flex w-full cursor-pointer items-center justify-center gap-x-2 rounded px-3 py-1 
      dark:border dark:border-primary/50 sm:w-fit sm:px-13"
    >
      <FaGoogle />
      <p>Sign in with google</p>
      {loading && (
        <Loader className="border-text-dark border-l-text-dark/30 size-4" />
      )}
    </button>
  );
};

export default GoogleSignIn;
