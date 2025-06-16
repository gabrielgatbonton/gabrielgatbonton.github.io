import cx from "clsx";
import {
  Container,
  Text,
  createTheme,
  MantineProvider,
  CSSVariablesResolver,
  Title,
} from "@mantine/core";
import { primaryColor, extraColors } from "../../constants/colors";

// Types
import { ReactNode } from "react";

// Theme
import classes from "./styles.module.css";

const theme = createTheme({
  // Fonts
  fontFamily: "Outfit, sans-serif",

  // Colors
  colors: {
    primaryColor,
  },
  white: extraColors.white,
  black: extraColors.black,
  primaryColor: "primaryColor",

  // Components
  components: {
    Text: Text.extend({
      defaultProps: {
        c: "primaryBlack",
      },
      classNames: (_, { c }) => ({
        root: cx({ [classes.dimmedText]: c === "dimmed" }),
      }),
    }),
    Title: Title.extend({
      defaultProps: {
        c: "primaryBlack",
      },
    }),
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === "responsive" }),
      }),
    }),
  },

  // Headings
  headings: {
    sizes: {
      h1: { fontSize: "72px", fontWeight: "600", lineHeight: "115%" },
      h2: { fontSize: "64px", fontWeight: "600", lineHeight: "115%" },
      h3: { fontSize: "48px", fontWeight: "600", lineHeight: "115%" },
      h4: { fontSize: "36px", fontWeight: "600", lineHeight: "115%" },
      h5: { fontSize: "20px", fontWeight: "600" },
    },
  },

  // Other
  other: {
    primaryBlack: extraColors.black,
    primaryWhite: extraColors.white,
  },
});

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--mantine-color-primaryBlack": theme.other.primaryBlack,
    "--mantine-color-primaryWhite": theme.other.primaryWhite,
  },
  dark: {},
  light: {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      {children}
    </MantineProvider>
  );
}
