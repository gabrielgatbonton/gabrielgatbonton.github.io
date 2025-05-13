import { Stack } from "@mantine/core";

// Components
import HomeSection from "../../components/sections/home-section";
import ProjectSection from "../../components/sections/project-section";

export default function HomePage() {
  return (
    <>
      <Stack gap={100}>
        <HomeSection />
        <ProjectSection />
      </Stack>
    </>
  );
}
