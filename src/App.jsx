import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import {
  AppBar,
  Box,
  Breadcrumbs,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import {
  AccountCircle,
  ChevronRight,
  Hub,
  Menu as MenuIcon,
  People,
  SpaceDashboard,
} from "@mui/icons-material";

const drawerWidth = 248;
const headerHeight = 64;

const navItems = [
  { to: "/home", label: "Home", Icon: SpaceDashboard, breadcrumb: "Painel" },
  { to: "/users", label: "Usuários", Icon: People, breadcrumb: "Usuários" },
];

const brandGradient = "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)";

function App() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentItem =
    navItems.find((item) => item.to === pathname) ||
    (pathname === "/" ? navItems[0] : null);
  const currentBreadcrumb = currentItem?.breadcrumb || "—";

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const handleDrawerClose = () => setMobileOpen(false);

  const drawerContent = (
    <>
      <Box
        sx={{
          height: headerHeight,
          px: 2.5,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Box
          sx={{
            width: 38,
            height: 38,
            borderRadius: "10px",
            background: brandGradient,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "scale(1.08) rotate(-4deg)",
              boxShadow: "0 6px 16px rgba(79, 70, 229, 0.4)",
            },
          }}
        >
          <Hub fontSize="small" />
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography
            variant="subtitle2"
            sx={{ color: "text.primary", fontWeight: 700, lineHeight: 1.2 }}
          >
            CrudApp
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Painel de gestão
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Typography
        variant="overline"
        sx={{
          px: 2.5,
          pt: 2,
          pb: 1,
          display: "block",
          color: "text.secondary",
        }}
      >
        Navegação
      </Typography>
      <List sx={{ p: 0 }}>
        {navItems.map(({ to, label, Icon }) => {
          const selected =
            pathname === to || (to === "/home" && pathname === "/");
          return (
            <Link to={to} key={to} onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton
                  selected={selected}
                  sx={{ transition: "all 0.15s ease" }}
                >
                  <ListItemIcon>
                    <Icon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      fontWeight: selected ? 600 : 500,
                      fontSize: "0.9rem",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </>
  );

  return (
    <Box sx={{ display: "flex", width: "100%", minHeight: "100vh" }}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
            backgroundColor: "background.paper",
            color: "text.primary",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              minHeight: headerHeight,
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, minWidth: 0 }}>
              <IconButton
                aria-label="abrir menu"
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Breadcrumbs
                separator={
                  <ChevronRight
                    fontSize="small"
                    sx={{ color: "text.disabled" }}
                  />
                }
                aria-label="breadcrumb"
                sx={{ minWidth: 0 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 500,
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  CrudApp
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.primary", fontWeight: 600 }}
                >
                  {currentBreadcrumb}
                </Typography>
              </Breadcrumbs>
            </Box>
            <IconButton
              aria-label="conta"
              sx={{
                color: "text.secondary",
                "&:hover": {
                  color: "secondary.main",
                  backgroundColor: "#eef2ff",
                },
              }}
            >
              <AccountCircle sx={{ fontSize: 28 }} />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box
          component="main"
          sx={{
            backgroundColor: "background.default",
            flex: 1,
            width: "100%",
            padding: {
              xs: "88px 16px 32px",
              sm: "96px 24px 40px",
              md: "96px 48px 48px",
            },
          }}
        >
          <Outlet />
        </Box>

        <Box
          component="footer"
          sx={{
            borderTop: "1px solid",
            borderColor: "divider",
            py: { xs: 2, sm: 2.5 },
            px: { xs: 2, sm: 3, md: 6 },
            backgroundColor: "background.paper",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1.5,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.7rem", sm: "0.75rem" },
            }}
          >
            © 2026 CrudApp · Todos os direitos reservados
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#10b981",
                boxShadow: "0 0 0 3px rgba(16,185,129,0.18)",
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                fontWeight: 500,
                fontSize: { xs: "0.7rem", sm: "0.75rem" },
              }}
            >
              Sistema operacional
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
