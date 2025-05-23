import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Providers
import ThemeProvider from "./providers/theme-provider";
import ReactRouterProvider from "./providers/react-router-provider";

// Systems
import { Notifications } from "@mantine/notifications";

// Styles
import "@mantine/core/styles.layer.css";
import "@mantine/notifications/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Notifications />
      <ReactRouterProvider />
    </ThemeProvider>
  </StrictMode>
);
