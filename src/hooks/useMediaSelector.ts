import { useMediaQuery } from "@mantine/hooks";
import { DEFAULT_THEME } from "@mantine/core";

type UseMediaSelectorProps<T> = {
  breakpoint: keyof typeof DEFAULT_THEME.breakpoints | number;
  fnValue: (matches: boolean) => T;
};

export function useMediaSelector<T>({
  breakpoint,
  fnValue,
}: UseMediaSelectorProps<T>): T {
  const queryValue =
    typeof breakpoint === "number"
      ? `${breakpoint}px`
      : DEFAULT_THEME.breakpoints[breakpoint];

  const matches = useMediaQuery(`(min-width: ${queryValue})`);
  return fnValue(matches ?? false);
}
