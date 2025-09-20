import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";
import { Toaster } from "sonner";
import App from "./App.tsx";
import "./index.css";
import ArchivedPage from "./pages/ArchivedPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import TagsPage from "./pages/TagsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,

    children: [
      {
        index: true,
        element: <Navigate to={"/home"} replace />,
      },
      {
        path: "/home",
        Component: HomePage,
      },
      {
        path: "/search",
        Component: SearchPage,
      },
      {
        path: "/archived",
        Component: ArchivedPage,
      },
      {
        path: "/tags",
        Component: TagsPage,
      },
      {
        path: "/settings",
        Component: SettingsPage,
      },
    ],
  },
  {
    path: "/sign-in",
    Component: LoginPage,
  },
  {
    path: "/sign-up",
    Component: SignUpPage,
  },
  {
    path: "/*",
    Component: NotFoundPage,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster richColors className="" />
    <RouterProvider router={router} />
  </StrictMode>,
);
