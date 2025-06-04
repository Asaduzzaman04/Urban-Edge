import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#000000",
      dark: "#1a1a1a",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#333333",
      dark: "#4d4d4d",
      contrastText: "#FFFFFF",
    },

    success: {
      main: "#2ecc71",
      dark: "#27ae60",
      contrastText: "#FFFFFF",
    },

    warning: {
      main: "#e74c3c",
      dark: "#c0392b",
      contrastText: "#FFFFFF",
    },

    background: {
      default: "#F7F7F7",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#000000",
      secondary: "#4D4D4D",
    },

    divider: "#DDDDDD",

    accent: {
      main: "#AAAAAA",
      hover: "#CCCCCC",
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
