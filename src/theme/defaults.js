import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    myCustomText: {
      color: "black",
    },
  },
  palette: {
    primary: {
      main: "#121212",
    },
  },
});
