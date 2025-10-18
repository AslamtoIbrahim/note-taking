import { Navigate } from "react-router-dom";
import Loader from "./components/ui/Loader";
import useSession from "./lib/auth-session";
import DesktopPage from "./pages/DesktopPage";

const LargeApp = () => {
  const { data: session, isPending } = useSession();


  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center bg-white dark:bg-text-dark">
        <Loader className="md:size-8 md:border-6" />
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/sign-in" replace />;
  }
  return (
    <div className="relative h-screen">
      <DesktopPage />
    </div>
  );
};

export default LargeApp;
