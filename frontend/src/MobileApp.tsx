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


  if (!session) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <div className="relative flex h-screen flex-col  ">
      <Header />
      <div className="flex-11/12 rounded-t-xl dark:border-t dark:border-secondary/50 pt-4 bg-white dark:bg-text-dark">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};

export default MobileApp;
