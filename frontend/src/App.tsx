import "./App.css";
import Header from "./components/layout/Header";
import BottomNav from "./navigation/BottomNav";
import HomePage from "./pages/HomePage";
import NoteContent from "./pages/NoteContent";

function App() {
  return (
    <div className="relative h-screen bg-primary/8">
      <Header />
      {/* <NoteContent /> */}
      <HomePage />
      <BottomNav />
    </div>
  );
}

export default App;
