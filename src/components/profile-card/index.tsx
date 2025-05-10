import portraitImg from "../../assets/portrait.jpeg";
import { Box, Group, Image, Text, Title } from "@mantine/core";

// Components
import DefaultBorder from "../default-border";
import IconButton from "../buttons/icon-button";
import PrimaryButton from "../buttons/primary-button";

// Constants
import { MAPPED_PROFILE_LINKS } from "../../constants/icons";

export default function ProfileCard() {
  return (
    <DefaultBorder padding={36} radius={20} w={350} h={600}>
      <Image src={portraitImg} w="100%" h="auto" mb={24} radius={20} />

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

      <PrimaryButton mx="auto" mt="auto" w={160} fw={500}>
        Let's Talk
      </PrimaryButton>
    </DefaultBorder>
  );
}
