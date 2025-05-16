import { AppShell, Box, Group } from "@mantine/core";
import { Outlet } from "react-router";
import classes from "./App.module.css";

import MainContainer from "./components/main-container";
import ProfileCard from "./components/cards/profile-card";
import Navbar from "./components/navbar";

function App() {
  return (
    <AppShell padding="md" className={classes.appShell} pos="relative">
      <Navbar
        pos="fixed"
        left={50}
        top="50%"
        style={{ transform: "translateY(-50%)" }}
      />

      <Box h="100%" mt="5%">
        <MainContainer>
          <Group h="100%" w="100%" align="start" wrap="nowrap" gap={100}>
            {/* Sticky Profile */}
            <Box pos="sticky" top={40}>
              <ProfileCard />
            </Box>

            <Box flex={1} py={50}>
              <Outlet />
            </Box>
          </Group>
        </MainContainer>
      </Box>
    </AppShell>
  );
}

export default App;
