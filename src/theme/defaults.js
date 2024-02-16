import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: { 
    fontFamily: "Roboto, sans-serif",
    myCustomText:{
      color: "black",
    } 
  },
  palette: {
    primary: {
      main: '#121212'
    },
  },
});

export default theme;
