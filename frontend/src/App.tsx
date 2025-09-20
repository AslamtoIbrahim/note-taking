import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import BottomNav from "./navigation/BottomNav";
import { useRequireAuth } from "./hooks/use-require-auth";

function App() {
  const session = useRequireAuth();
  if (!session) {
    return (
      <div className="bg-primary/8 flex h-screen items-center justify-center lg:bg-white">
        <div className="border-l-primary/50 border-primary size-6 animate-spin rounded-full border-4 md:size-8 md:border-6"></div>
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
}

export default App;
