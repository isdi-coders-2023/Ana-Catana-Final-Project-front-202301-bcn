import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/LoginPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/user/login",
        element: <LoginPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
