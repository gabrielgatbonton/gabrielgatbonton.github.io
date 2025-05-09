import portraitImg from "../../assets/portrait.jpeg";
import { Box, Button, Card, Group, Image, Text, Title } from "@mantine/core";
import classes from "./styles.module.css";

// Components
import IconButton from "../icon-button";

// Constants
import { MAPPED_PROFILE_LINKS } from "../../constants/icons";

export default function ProfileCard() {
  return (
    <Card padding={36} radius={20} className={classes.card}>
      <Image
        src={portraitImg}
        w="100%"
        h="auto"
        mb={24}
        radius={20}
        className={classes.image}
      />

      <Title order={2} ta="center" mb={8}>
        Gabriel Gatbonton
      </Title>

      <Box mb={24}>
        <Text ta="center" size="md" c="dimmed">
          Web Developer
        </Text>

        <Text ta="center" size="md" c="dimmed">
          Pampanga, Philippines
        </Text>
      </Box>

      <Group justify="center" align="center" gap={16}>
        {MAPPED_PROFILE_LINKS.map(({ icon }) => (
          <IconButton key={icon} icon={icon} />
        ))}
      </Group>

      <Button mx="auto" mt="auto" w={180} color="primaryColor.4">
        Let's Talk
      </Button>
    </Card>
  );
}
