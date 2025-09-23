import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import { useRequireAuth } from "./hooks/use-require-auth";
import BottomNav from "./navigation/BottomNav";
import Loader from "./components/ui/Loader";

const MobileApp = () => {
  const session = useRequireAuth();
  if (!session) {
    return (
      <div className="bg-primary/8 flex h-screen items-center justify-center lg:bg-white">
        <Loader className="md:size-8 md:border-6 border-l-primary/35" />
      </div>
    );
  }
  return (
    <div className="bg-primary/8 relative h-screen lg:bg-white">
      <Header />
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default MobileApp;
