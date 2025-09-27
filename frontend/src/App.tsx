import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import MobileApp from "./MobileApp";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ArchivedPage from "./pages/ArchivedPage";
import TagsPage from "./pages/TagsPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import LargeApp from "./LargeApp";
import AllNotes from "./components/layout/AllNotes";
import TagedNotes from "./components/layout/TagedNotes";
import NoteContentPage from "./pages/NoteContentPage";

function App() {
  const isLarge = useMediaQuery({ minWidth: 1024 });

  return isLarge ? (
    <Routes>
      <Route path="/" Component={LargeApp}>
        <Route index={true} element={<Navigate to={"/all-notes"} />} />
        <Route path="/all-notes" Component={AllNotes}>
          <Route path=":id" Component={NoteContentPage} />
        </Route>
        <Route path="/archived-notes" Component={ArchivedPage} />
        <Route path="/taged-notes/:id" Component={TagedNotes} />
      </Route>
      <Route path="/sign-in" Component={LoginPage} />
      <Route path="/sign-up" Component={SignUpPage} />
      <Route path="/*" Component={NotFoundPage} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" Component={MobileApp}>
        <Route index={true} element={<Navigate to={"/home"} replace />} />
        <Route path="/home" Component={HomePage} />
        <Route path="/editor" Component={NoteContentPage} />
        <Route path="/editor/:id" Component={NoteContentPage} />
        <Route path="/search" Component={SearchPage} />
        <Route path="/archived" Component={ArchivedPage} />
        <Route path="/tags" Component={TagsPage} />
        <Route path="/settings" Component={SettingsPage} />
      </Route>
      <Route path="/sign-in" Component={LoginPage} />
      <Route path="/sign-up" Component={SignUpPage} />
      <Route path="/*" Component={NotFoundPage} />
    </Routes>
  );
}

export default App;
