import { useMatches } from "@mantine/core";
import { ResponsiveMap } from "../constants/responsive";

export function useResponsiveValue<T>(breakpoints: ResponsiveMap<T>): T {
  const matches = useMatches(breakpoints);
  return matches;
}
