import { Navigate, createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { Home } from "../pages/Home";
import { Users } from "../pages/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);
