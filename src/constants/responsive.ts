import { TitleOrder, DEFAULT_THEME } from "@mantine/core";

type BreakpointKey = keyof typeof DEFAULT_THEME.breakpoints;
type TextAlign = "left" | "right" | "center" | "justify";

export type ResponsiveMap<T> = Partial<Record<BreakpointKey, T>> & { base: T };

export const RESPONSIVE_HEADLINE: ResponsiveMap<TitleOrder> = {
  base: 3,
  md: 2,
  lg: 1,
};

export const RESPONSIVE_FAQ: ResponsiveMap<TitleOrder> = {
  base: 4,
  md: 3,
  lg: 2,
};

export const RESPONSIVE_PROJECT_HEADLINE: ResponsiveMap<TitleOrder> = {
  base: 4,
  md: 3,
};

export const RESPONSIVE_PROJECT_SUBTITLE: ResponsiveMap<BreakpointKey> = {
  base: "md",
  md: "lg",
};

export const RESPONSIVE_PROJECT_TEXT: ResponsiveMap<BreakpointKey> = {
  base: "md",
  md: "xl",
};

export const RESPONSIVE_TEXT_ALIGN: ResponsiveMap<TextAlign> = {
  base: "center",
  md: "left",
};

export const RESPONSIVE_TEXT_SIZE: ResponsiveMap<BreakpointKey> = {
  base: "lg",
  lg: "xl",
};

export const RESPONSIVE_STACK_GAP: ResponsiveMap<number> = {
  base: 40,
  md: 100,
};
