import { AppBar, Box, Drawer, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 224;

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
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
      <Box
        sx={{
          width: "100%",
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            backgroundColor: "#fff",
          }}
        >
          <Toolbar>
            <Typography variant="myCustomText" noWrap component="h4">
              Sistema de Usuários
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            backgroundColor: "#eeeeee",
            height: "100%",
            padding: "100px 50px 50px",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
