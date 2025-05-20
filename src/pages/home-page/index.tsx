import { Stack, useMatches } from "@mantine/core";

// Components
import HomeSection from "../../components/sections/home-section";
import ProjectSection from "../../components/sections/project-section";
import ToolsSection from "../../components/sections/tools-section";
import ContactSection from "../../components/sections/contact-section";

export default function HomePage() {
  const gap = useMatches({
    base: 40,
    md: 100,
  });

  return (
    <>
      <Stack gap={gap}>
        <HomeSection id="home" />
        <ProjectSection id="project" />
        <ToolsSection id="tools" />
        <ContactSection id="contact" />
      </Stack>
    </>
  );
}
