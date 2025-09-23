import Loader from "./components/ui/Loader";
import { useRequireAuth } from "./hooks/use-require-auth";
import DesktopPage from "./pages/DesktopPage";

const LargeApp = () => {
  const session = useRequireAuth();
  if (!session) {
    return (
      <div className="bg-primary/8 flex h-screen items-center justify-center lg:bg-white">
        <Loader className="border-l-primary/35 md:size-8 md:border-6" />
      </div>
    );
  }
  return (
    <div className="bg-primary/8 relative h-screen lg:bg-white">
      <DesktopPage />
    </div>
  );
};

export default LargeApp;
