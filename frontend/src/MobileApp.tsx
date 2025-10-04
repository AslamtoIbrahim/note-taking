import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import { useRequireAuth } from "./hooks/use-require-auth";
import BottomNav from "./navigation/BottomNav";
import Loader from "./components/ui/Loader";

const MobileApp = () => {
  const session = useRequireAuth();
  if (!session) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader className="md:size-8 md:border-6" />
      </div>
    );
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
