import "./App.css";
import Header from "./components/layout/Header";
import BottomNav from "./navigation/BottomNav";
import ArchivedPage from "./pages/ArchivedPage";

function App() {
  return (
    <div className="relative h-screen bg-primary/8">
      <Header />
      {/* <NoteContent /> */}
      {/* <HomePage /> */}
      {/* <SearchPage /> */}
      <ArchivedPage />
      <BottomNav />
    </div>
  );
}

export default App;
