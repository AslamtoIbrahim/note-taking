import "./App.css";
import Header from "./components/layout/Header";
import BottomNav from "./navigation/BottomNav";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="relative h-screen bg-primary/8">
      <Header />
      {/* <NoteContent /> */}
      {/* <HomePage /> */}
      <SearchPage />
      <BottomNav />
    </div>
  );
}

export default App;
