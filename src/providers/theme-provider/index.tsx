import cx from "clsx";
import { Container, Text, createTheme, MantineProvider } from "@mantine/core";
import { primaryColor } from "../../constants/colors";

// Types
import { ReactNode } from "react";

// Theme
import classes from "./styles.module.css";

const theme = createTheme({
  fontFamily: "Outfit, sans-serif",
  colors: {
    primaryColor,
  },
  primaryColor: "primaryColor",
  components: {
    Text: Text.extend({
      classNames: (_, { c }) => ({
        root: cx({ [classes.dimmedText]: c === "dimmed" }),
      }),
    }),
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === "responsive" }),
      }),
    }),
  },
  headings: {
    sizes: {
      h1: { fontSize: "72px", fontWeight: "600", lineHeight: "115%" },
    },
  },
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
