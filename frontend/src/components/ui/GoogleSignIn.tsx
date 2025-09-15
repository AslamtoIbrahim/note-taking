import { FaGoogle } from "react-icons/fa";

const GoogleSignIn = () => {
  return (
    <button className="bg-border text-text-dark dark:text-border dark:bg-text-dark dark:hover:bg-text-dark hover:bg-border/50 flex cursor-pointer items-center gap-x-2 rounded px-3 py-1 w-full justify-center md:w-fit md:px-13">
      <FaGoogle />
      Sign in with google
    </button>
  );
};

export default GoogleSignIn;
