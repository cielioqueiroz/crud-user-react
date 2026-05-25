import { createTheme } from "@mui/material";

const baseShadow =
  "0 4px 6px -1px rgba(15,23,42,0.06), 0 2px 4px -2px rgba(15,23,42,0.04)";
const elevatedShadow =
  "0 10px 15px -3px rgba(15,23,42,0.08), 0 4px 6px -4px rgba(15,23,42,0.05)";
const tallShadow =
  "0 20px 25px -5px rgba(15,23,42,0.1), 0 8px 10px -6px rgba(15,23,42,0.04)";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0f172a",
      light: "#1e293b",
      dark: "#020617",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#4f46e5",
      light: "#6366f1",
      dark: "#4338ca",
      contrastText: "#ffffff",
    },
    success: { main: "#10b981", light: "#34d399", dark: "#059669" },
    error: { main: "#dc2626", light: "#ef4444", dark: "#b91c1c" },
    warning: { main: "#f59e0b", light: "#fbbf24", dark: "#d97706" },
    info: { main: "#0284c7", light: "#0ea5e9", dark: "#0369a1" },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#64748b",
    },
    divider: "#e2e8f0",
  },
  typography: {
    fontFamily: '"Roboto", "Inter", system-ui, -apple-system, sans-serif',
    h1: { fontWeight: 700, letterSpacing: "-0.025em" },
    h2: { fontWeight: 700, letterSpacing: "-0.025em" },
    h3: { fontWeight: 700, letterSpacing: "-0.02em" },
    h4: { fontWeight: 700, letterSpacing: "-0.02em", fontSize: "1.75rem" },
    h5: { fontWeight: 600, letterSpacing: "-0.015em", fontSize: "1.25rem" },
    h6: { fontWeight: 600, fontSize: "1.125rem" },
    subtitle1: { fontWeight: 500 },
    subtitle2: { fontWeight: 500 },
    body2: { color: "#64748b" },
    button: { textTransform: "none", fontWeight: 600, letterSpacing: 0 },
    overline: {
      fontWeight: 600,
      letterSpacing: "0.08em",
      fontSize: "0.7rem",
      lineHeight: 1.4,
    },
  },
  shape: { borderRadius: 10 },
  shadows: [
    "none",
    "0 1px 2px 0 rgba(15,23,42,0.04)",
    "0 1px 3px 0 rgba(15,23,42,0.08), 0 1px 2px -1px rgba(15,23,42,0.05)",
    baseShadow,
    baseShadow,
    baseShadow,
    elevatedShadow,
    elevatedShadow,
    elevatedShadow,
    elevatedShadow,
    elevatedShadow,
    elevatedShadow,
    tallShadow,
    tallShadow,
    tallShadow,
    tallShadow,
    tallShadow,
    tallShadow,
    tallShadow,
    tallShadow,
    tallShadow,
    tallShadow,
    tallShadow,
    tallShadow,
    tallShadow,
  ],
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 8,
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16,
          paddingRight: 16,
          transition: "all 0.2s ease",
        },
        containedPrimary: {
          backgroundColor: "#0f172a",
          "&:hover": {
            backgroundColor: "#1e293b",
            transform: "translateY(-1px)",
            boxShadow: "0 4px 12px rgba(15,23,42,0.25)",
          },
        },
        containedError: {
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 4px 12px rgba(220,38,38,0.25)",
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid #e2e8f0",
          boxShadow:
            "0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.03)",
          transition: "box-shadow 0.2s ease",
        },
      },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          borderBottom: "none",
          boxShadow:
            "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: "none",
          backgroundColor: "#ffffff",
          boxShadow: "4px 0 16px rgba(15, 23, 42, 0.05)",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "2px 12px",
          paddingTop: 8,
          paddingBottom: 8,
          "&:hover": { backgroundColor: "#f1f5f9" },
          "&.Mui-selected": {
            backgroundColor: "#eef2ff",
            color: "#4f46e5",
            "& .MuiListItemIcon-root": { color: "#4f46e5" },
            "&:hover": { backgroundColor: "#e0e7ff" },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 36,
          color: "#64748b",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: "#f8fafc",
          fontWeight: 600,
          fontSize: "0.72rem",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "#64748b",
          borderBottom: "1px solid #e2e8f0",
        },
        root: {
          borderBottom: "1px solid #f1f5f9",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          transition: "background-color 0.15s ease",
          "&:hover": { backgroundColor: "#f8fafc" },
          "&:last-child td": { borderBottom: 0 },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 0.15s ease",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600, fontSize: "0.72rem" },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#4f46e5",
            borderWidth: 1.5,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
          border: "none",
          boxShadow:
            "0 20px 25px -5px rgba(15, 23, 42, 0.15), 0 8px 10px -6px rgba(15, 23, 42, 0.08)",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#0f172a",
          fontSize: "0.72rem",
          fontWeight: 500,
        },
        arrow: { color: "#0f172a" },
      },
    },
  },
});

export default theme;
