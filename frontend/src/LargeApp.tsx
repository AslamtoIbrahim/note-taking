import Loader from "./components/ui/Loader";
import { useRequireAuth } from "./hooks/use-require-auth";
import DesktopPage from "./pages/DesktopPage";

const LargeApp = () => {
  const session = useRequireAuth();
  if (!session) {
    return (
      <div className="flex h-screen items-center justify-center ">
        <Loader className="border-l-primary/35 md:size-8 md:border-6" />
      </div>
    );
  }
  return (
    <div className="relative h-screen ">
      <DesktopPage />
    </div>
  );
};

export default LargeApp;
