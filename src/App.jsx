import { AppBar, Box, Drawer, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 224;

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        backgroundColor: "blue",
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
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Permanent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
