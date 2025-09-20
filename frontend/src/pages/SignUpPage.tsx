import { FaUserPlus } from "react-icons/fa";
import SignUpForm from "../components/auth/SignUpForm";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";

const SignUpPage = () => {
  return (
    <div className="font-body py-8">
      <Link
        to={"/sign-in"}
        className="text-secondary hover:text-text-dark flex items-center px-4 py-4 md:px-8"
      >
        <BiChevronLeft className="size-6" />
        <p className="capitalize">go back</p>
      </Link>

      <div className="mt-14 flex items-center justify-center gap-x-2">
        <FaUserPlus />
        <h1>Sign Up</h1>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
