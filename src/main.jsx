import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/useUserContext";

import router from "./Routers/index";
import theme from "./theme/defaults";

import "react-toastify/dist/ReactToastify.css";
import "./assets/index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <UserProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </UserProvider>
  </ThemeProvider>
);
