import "./App.css";
import Header from "./components/layout/Header";
import BottomNav from "./navigation/BottomNav";
import ArchivedPage from "./pages/ArchivedPage";
import DesktopPage from "./pages/DesktopPage";
import SettingsPage from "./pages/SettingsPage";
import TagsPage from "./pages/TagsPage";

function App() {
  return (
    <div className="relative h-screen bg-primary/8 lg:bg-white">
      <Header />
      {/* <NoteContent /> */}
      {/* <HomePage /> */}
      {/* <SearchPage /> */}
      {/* <ArchivedPage /> */}
      {/* <TagsPage /> */}
      {/* <SettingsPage /> */}

      <DesktopPage />
      <BottomNav />
    </div>
  );
}

export default App;
