import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

import Root from "./layouts/Root";
import LoginPage from "./pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",

        element: <HomePage />,
      },
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
    ],
  },
]);
