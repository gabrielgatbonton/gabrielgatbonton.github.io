import { AppShell, Container } from "@mantine/core";
import Header from "./components/header";

function App() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Container size="responsive" h="100%">
          <Header />
        </Container>
      </AppShell.Header>
    </AppShell>
  );
}

export default App;
