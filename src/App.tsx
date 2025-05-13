import { AppShell, Box, Group } from "@mantine/core";
import classes from "./App.module.css";

// Components
import MainContainer from "./components/main-container";
import ProfileCard from "./components/cards/profile-card";

import Navbar from "./components/navbar";
import { Outlet } from "react-router";

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
            <Outlet />
          </Box>
        </Group>
      </MainContainer>
    </AppShell>
  );
}

export default App;
