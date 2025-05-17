import { useEffect, useState } from "react";
import { ProfileLink } from "../constants/icons";

/**
 * Tracks the currently active section and returns the associated icon.
 *
 * @param sections - Array of sections with `link` (id) and `icon`.
 * @param options - IntersectionObserver options.
 * @returns The icon of the currently active section.
 */

export function useActiveSection(
  sections: readonly ProfileLink[],
  options: IntersectionObserverInit = { threshold: 0.5 }
) {
  const [activeIcon, setActiveIcon] = useState<string>("home");

  useEffect(() => {
    const elements = sections
      .map((section) => ({
        id: section.link,
        el: document.getElementById(section.link),
      }))
      .filter((item): item is { id: string; el: HTMLElement } => item.el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          const matchedSection = sections.find(
            (section) => section.link === visibleEntry.target.id
          );

          if (matchedSection) {
            setActiveIcon(matchedSection.icon);
          }
        }
      },
      options
    );

    elements.forEach(({ el }) => observer.observe(el));

    return () => observer.disconnect();
  }, [sections, options]);

  return activeIcon;
}
