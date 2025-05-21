import { Stack } from "@mantine/core";
import { ComponentType } from "react";

// Hooks
import { useResponsiveValue } from "../../hooks/useResponsiveValue";

// Components
import HomeSection from "../../components/sections/home-section";
import ProjectSection from "../../components/sections/project-section";
import ToolsSection from "../../components/sections/tools-section";
import ContactSection from "../../components/sections/contact-section";

// Constants
import { RESPONSIVE_STACK_GAP } from "../../constants/responsive";

// Animations
import MotionObserver from "../../animations/MotionObserver";
import { fadeDown } from "../../constants/motions";

type Section = {
  id: string;
  component: ComponentType<{ id: string }>;
};

const SECTIONS: Section[] = [
  { id: "home", component: HomeSection },
  { id: "project", component: ProjectSection },
  { id: "tools", component: ToolsSection },
  { id: "contact", component: ContactSection },
];

export default function HomePage() {
  const GAP = useResponsiveValue(RESPONSIVE_STACK_GAP);

  const renderSection = ({ id, component }: Section) => {
    const SectionComponent = component;
    return (
      <MotionObserver key={id} variants={fadeDown}>
        <SectionComponent id={id} />
      </MotionObserver>
    );
  };

  return <Stack gap={GAP}>{SECTIONS.map(renderSection)}</Stack>;
}
