import { FaSignInAlt } from "react-icons/fa";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="py-8 pt-24 font-body dark:bg-text-dark h-screen">
      <div className="flex items-center justify-center gap-x-2 dark:text-white/65">
        <FaSignInAlt />
        <h1>Sign In</h1>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
