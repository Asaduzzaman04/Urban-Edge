import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F87171",
      dark: "#EF4444",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FB7185",
      dark: "#F43F5E",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#34D399",
      dark: "#10B981",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#F43F5E",
      dark: "#F43F5E",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F9F5F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#E2E2E2",
    },
    divider: "#FCDADA",
    accent: {
      main: "#c7c5c5",
      hover: "#E2E2E2",
    },
  },
  typography: {
    fontFamily: "'Montserrat', 'Open Sans', sans-serif",
    h1: { fontFamily: "'Montserrat', sans-serif" },
    h2: { fontFamily: "'Montserrat', sans-serif" },
    h3: { fontFamily: "'Montserrat', sans-serif" },
    h4: { fontFamily: "'Montserrat', sans-serif" },
    h5: { fontFamily: "'Montserrat', sans-serif" },
    h6: { fontFamily: "'Montserrat', sans-serif" },
    body1: { fontFamily: "'Open Sans', sans-serif" },
    body2: { fontFamily: "'Open Sans', sans-serif" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
