import cx from "clsx";
import { Container, createTheme, MantineProvider } from "@mantine/core";

// Types
import { ReactNode } from "react";

// Theme
import classes from "./ThemeProvider.module.css";

const theme = createTheme({
  fontFamily: "Outfit, sans-serif",
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === "responsive" }),
      }),
    }),
  },
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
