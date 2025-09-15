import { FaUserPlus } from "react-icons/fa";
import SignUpForm from "../components/auth/SignUpForm";

const SignUpPage = () => {
    return (
      <div className="py-8 mt-16 font-body">
        <div className="flex items-center justify-center gap-x-2">
          <FaUserPlus />
          <h1>Sign Up</h1>
        </div>
        <SignUpForm />
      </div>
    );
}

export default SignUpPage
