import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  // your theme options
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
