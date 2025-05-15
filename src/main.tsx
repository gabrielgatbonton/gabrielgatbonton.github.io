import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Providers
import ThemeProvider from "./providers/theme-provider";
import ReactRouterProvider from "./providers/react-router-provider";

// Styles
import "@mantine/core/styles.layer.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ReactRouterProvider />
    </ThemeProvider>
  </StrictMode>
);
