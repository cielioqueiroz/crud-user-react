import { Box, Drawer } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 224;

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        backgroundColor: "blue",
      }}
    >
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Link to="/home">Home</Link>
        <Link to="/users">Users</Link>
      </Drawer>
      <Box>
        <header style={{ backgroundColor: "red" }}>Teste Header</header>
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
