import { useTheme } from "@mui/material/styles";
import { Box, Drawer } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function App() {
  const theme = useTheme();
  return (
    <>
      <Drawer variant="permanent" anchor="left">
        teste
        <Link to="/home">Home</Link>
        <Link to="/users">Users</Link>
      </Drawer>
      <Box marginLeft={theme.spacing(28)}>
        <header>Teste Header</header>
        <Outlet />
      </Box>
    </>
  );
}

export default App;
