import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Training } from "./pages/Training.tsx";
import { Messages } from "./pages/Messages.tsx";
import { Plan } from "./pages/Plan.tsx";
import { Profile } from "./pages/Profile.tsx";
import { Progress } from "./pages/Progress.tsx";
import { AppLayout } from "./Layout/AppLayout.tsx";
import { Settings } from "./pages/Settings.tsx";
import { MainPage } from "./pages/MainPage.tsx";
import { RegisterPage } from "./pages/RegisterPage.tsx";
import { LoginPage } from "./pages/LoginPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/training", element: <Training /> },
      { path: "/messages", element: <Messages /> },
      { path: "/plan", element: <Plan /> },
      { path: "/profile", element: <Profile /> },
      { path: "/progress", element: <Progress /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
