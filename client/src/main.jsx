import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router/Router.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </StrictMode>
);
