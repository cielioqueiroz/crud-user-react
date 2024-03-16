import { Link, Outlet } from "react-router-dom";
import { People, SpaceDashboard } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

const DRAWER_WIDTH = 224;

export const App = () => (
  <Box
    sx={{
      display: "flex",
      width: "100%",
      minHeight: "100vh",
    }}
  >
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        <Link to="/home">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SpaceDashboard />
              </ListItemIcon>

              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/users">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <People />
              </ListItemIcon>

              <ListItemText primary="Usuários" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Drawer>

    <Box
      sx={{
        width: "100%",
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${DRAWER_WIDTH}px)`,
          ml: `${DRAWER_WIDTH}px`,
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
