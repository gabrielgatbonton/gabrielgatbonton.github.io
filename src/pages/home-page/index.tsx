import { Stack } from "@mantine/core";

// Components
import HomeSection from "../../components/sections/home-section";
import ProjectSection from "../../components/sections/project-section";
import ToolsSection from "../../components/sections/tools-section";
import ContactSection from "../../components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <Stack gap={100}>
        <HomeSection id="home" />
        <ProjectSection id="project" />
        <ToolsSection id="tools" />
        <ContactSection id="contact" />
      </Stack>
    </>
  );
}
