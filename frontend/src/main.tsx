import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Training } from "./pages/app/Training.tsx";
import { Bot } from "./pages/app/Bot.tsx";
import { Plan } from "./pages/app/Plan.tsx";
import { Profile } from "./pages/app/Profile.tsx";
import { Progress } from "./pages/app/Progress.tsx";
import { AppLayout } from "./Layout/AppLayout.tsx";
import { Settings } from "./pages/app/Settings.tsx";
import { MainPage } from "./pages/auth/HomePage.tsx";
import { RegisterPage } from "./pages/auth/RegisterPage.tsx";
import { LoginPage } from "./pages/auth/LoginPage.tsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <MainPage />,
  // },
  // {
  //   path: "/register",
  //   element: <RegisterPage />,
  // },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/training", element: <Training /> },
      { path: "/bot", element: <Bot /> },
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
