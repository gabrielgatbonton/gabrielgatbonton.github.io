import { matchPath } from "react-router";

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export const isMatchedPath = (pattern: string, pathname: string) => {
  const result = matchPath(pattern, pathname);
  if (result) return result.pathname;
};
