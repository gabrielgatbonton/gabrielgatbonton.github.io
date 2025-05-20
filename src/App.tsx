import { AppShell, Box, Flex } from "@mantine/core";
import { Outlet } from "react-router";
import classes from "./App.module.css";

import MainContainer from "./components/main-container";
import ProfileCard from "./components/cards/profile-card";
import Navbar from "./components/navbar";

function App() {
  return (
    <AppShell padding="md" className={classes.appShell} pos="relative">
      <Navbar className={classes.navbarPosition} />

      <Box h="100%" py={100}>
        <MainContainer>
          <Flex
            h="100%"
            w="100%"
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "start" }}
            wrap="nowrap"
            gap={{ base: 40, md: 80, xl: 100 }}
          >
            {/* Sticky Profile */}
            <Box className={classes.responsiveProfile}>
              <ProfileCard />
            </Box>

            <Box flex={1} className={classes.outletBox}>
              <Outlet />
            </Box>
          </Flex>
        </MainContainer>
      </Box>
    </AppShell>
  );
}

export default App;
