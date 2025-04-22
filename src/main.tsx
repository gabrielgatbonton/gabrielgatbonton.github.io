import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeProvider from "./providers/ThemeProvider.tsx";

// Styles
import "@mantine/core/styles.css";

// Components
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
