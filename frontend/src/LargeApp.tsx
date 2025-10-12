import { Navigate } from "react-router-dom";
import Loader from "./components/ui/Loader";
import { useRequireAuth } from "./hooks/use-require-auth";
import useSession from "./lib/auth-session";
import DesktopPage from "./pages/DesktopPage";

const LargeApp = () => {
  // const session = useRequireAuth();
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
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
