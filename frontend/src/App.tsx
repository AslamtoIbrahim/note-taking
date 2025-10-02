import { useMediaQuery } from "react-responsive";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LargeApp from "./LargeApp";
import MobileApp from "./MobileApp";
import AllNotes from "./components/layout/AllNotes";
import ArchivedPage from "./pages/ArchivedPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import NoteContentPage from "./pages/NoteContentPage";
import SearchPage from "./pages/SearchPage";
import SettingsPage from "./pages/SettingsPage";
import SignUpPage from "./pages/SignUpPage";
import TagsPage from "./pages/TagsPage";

function App() {
  const isLarge = useMediaQuery({ minWidth: 1024 });

  return isLarge ? (
    <Routes>
      <Route path="/" Component={LargeApp}>
        <Route index={true} element={<Navigate to={"home"} />} />
        <Route path="home" Component={AllNotes}>
          <Route path="editor/:id" Component={NoteContentPage} />
          <Route path="editor" Component={NoteContentPage} />
        </Route>
        <Route path="archived" Component={ArchivedPage}>
          <Route path="editor/:id" Component={NoteContentPage} />
        </Route>
        <Route path="search/:tag" Component={SearchPage}>
          <Route path="editor/:id" Component={NoteContentPage} />
        </Route>
        <Route path="search" Component={SearchPage}>
          <Route path="editor/:id" Component={NoteContentPage} />
        </Route>
      </Route>
      <Route path="/sign-in" Component={LoginPage} />
      <Route path="/sign-up" Component={SignUpPage} />
      <Route path="/*" Component={NotFoundPage} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" Component={MobileApp}>
        <Route index={true} element={<Navigate to={"home"} replace />} />
        <Route path="home" Component={HomePage} />
        <Route path="editor" Component={NoteContentPage} />
        <Route path="editor/:id" Component={NoteContentPage} />
        <Route path="search" Component={SearchPage} />
        <Route path="archived" Component={ArchivedPage} />
        <Route path="tags" Component={TagsPage} />
        <Route path="settings" Component={SettingsPage} />
      </Route>
      <Route path="/sign-in" Component={LoginPage} />
      <Route path="/sign-up" Component={SignUpPage} />
      <Route path="/*" Component={NotFoundPage} />
    </Routes>
  );
}

export default App;
