import { FaSignInAlt } from "react-icons/fa";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="py-8 mt-16 font-body">
      <div className="flex items-center justify-center gap-x-2">
        <FaSignInAlt />
        <h1>Sign in</h1>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
