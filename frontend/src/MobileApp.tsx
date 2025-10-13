import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Loader from "./components/ui/Loader";
import useSession from "./lib/auth-session";
import BottomNav from "./navigation/BottomNav";
const MobileApp = () => {
  // const session = useRequireAuth();
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader className="md:size-8 md:border-6" />
      </div>
    );
  }

  console.log("mobile session: ", session);

  if (!session) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <div className="relative flex h-screen flex-col">
      <Header />
      <div className="dark:border-secondary/50 dark:bg-text-dark flex-11/12 rounded-t-xl bg-white pt-4 dark:border-t">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};

export default MobileApp;
