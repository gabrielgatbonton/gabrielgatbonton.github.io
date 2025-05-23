import { AppShell, Box, Flex } from "@mantine/core";
import { Outlet, useLocation, matchPath, PathPattern } from "react-router";
import { ScrollRestoration } from "react-router";
import classes from "./App.module.css";

// Components
import MainContainer from "./components/main-container";
import ProfileCard from "./components/cards/profile-card";
import Navbar from "./components/navbar";

// Animations
import MotionBox from "./animations/MotionBox";
import { fadeDown } from "./constants/motions";

const REVERSED_DIRECTION_ROUTES = ["/:project"];

const isMatchedPath = (pattern: string, pathname: string) => {
  const result = matchPath(pattern, pathname);
  if (result) return result.pathname;
};

function App() {
  const location = useLocation();
  const isReversedDirection = REVERSED_DIRECTION_ROUTES.some((pattern) =>
    isMatchedPath(pattern, location.pathname)
  );

  return (
    <AppShell padding="md" className={classes.appShell} pos="relative">
      <Navbar className={classes.navbarPosition} />

      <Box h="100%" py={100}>
        <ScrollRestoration />
        <MainContainer>
          <Flex
            h="100%"
            w="100%"
            direction={{
              base: isReversedDirection ? "column-reverse" : "column",
              md: "row",
            }}
            align={{ base: "center", md: "start" }}
            wrap="nowrap"
            gap={{ base: 40, md: 80, xl: 100 }}
          >
            {/* Profile Card */}

            <Box className={classes.responsiveProfile}>
              <MotionBox variants={fadeDown}>
                <ProfileCard />
              </MotionBox>
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
