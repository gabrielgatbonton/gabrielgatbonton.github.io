import { AppShell, Box, Group, Stack } from "@mantine/core";
import classes from "./App.module.css";

// Components
import MainContainer from "./components/main-container";
import ProfileCard from "./components/cards/profile-card";
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
        <Group gap={100} wrap="nowrap" w="100%" h="100%">
          <ProfileCard />

          <Box
            flex={1}
            h="inherit"
            style={{ overflowY: "scroll" }}
            py={150}
            className={classes.noScrollbar}
          >
            <Stack gap={100}>
              <HomeSection />
              <ProjectSection />
            </Stack>
          </Box>
        </Group>
      </MainContainer>
    </AppShell>
  );
}

export default App;
