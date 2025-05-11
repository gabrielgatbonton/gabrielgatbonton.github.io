import { AppShell, Group, ScrollArea, Stack } from "@mantine/core";
import classes from "./App.module.css";

// Components
import MainContainer from "./components/main-container";
import ProfileCard from "./components/profile-card";
import HomeSection from "./components/sections/home-section";
import ProjectSection from "./components/sections/project-section";
import Navbar from "./components/navbar";

function App() {
  return (
    <AppShell padding="md" className={classes.appShell} pos="relative">
      <Navbar
        pos="absolute"
        left={50}
        top="50%"
        style={{ transform: "translateY(-50%)" }}
      />

      <MainContainer>
        <Group gap={100} wrap="nowrap" w="100%">
          <ProfileCard />

          <ScrollArea flex={1} h={500} type="never">
            <Stack gap={100}>
              <HomeSection />
              <ProjectSection />
            </Stack>
          </ScrollArea>
        </Group>
      </MainContainer>
    </AppShell>
  );
}

export default App;
