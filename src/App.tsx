import { AppShell, Group } from "@mantine/core";
import classes from "./App.module.css";

// Components
import MainContainer from "./components/main-container";
import ProfileCard from "./components/profile-card";
import HomeSection from "./components/home-section";

function App() {
  return (
    <AppShell padding="md" className={classes.appShell}>
      <MainContainer>
        <Group gap={100} wrap="nowrap" w="100%">
          <ProfileCard />
          <HomeSection flex={1} />
        </Group>
      </MainContainer>
    </AppShell>
  );
}

export default App;
