import { DEFAULT_THEME } from "@mantine/core"

const theme = DEFAULT_THEME

export const RESPONSIVE_HEADLINE = {
  breakpoint: "lg",
  fnValue: (matches: boolean) => (matches ? 1 : 2),
}
export const FAQ_RESPONSIVE_HEADLINE = {
  breakpoint: "lg",
  fnValue: (matches: boolean) => (matches ? 2 : 3),
}
export const TEXT_SIZE = theme.breakpoints.md ? "lg" : "xl"