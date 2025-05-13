import { Box, Grid, Group, Image, Text, Title } from "@mantine/core";
// import { useParams } from "react-router";
import { useNavigate } from "react-router";

// Components
import ArrowButton from "../../components/buttons/arrow-button";
import PrimaryButton from "../../components/buttons/primary-button";
import CredCard from "../../components/cards/cred-card";
import ProjectCard from "../../components/cards/project-card";

// Constants
import { MAPPED_PROJECTS } from "../../constants/data";

// Temporary
import ChimsOne from "../../assets/snapshots/chims_1.png";
import ChimsTwo from "../../assets/snapshots/chims_2.png";
import { IconImageInPicture } from "@tabler/icons-react";

export default function ProjectPage() {
  // const { project } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box>
      <ArrowButton mb={28} onClick={handleBack} size="md" reverseIcon>
        All Projects
      </ArrowButton>

      <Image mb={28} radius={20} src={ChimsTwo} />

      <Box mb={28}>
        <Title order={2} mb={4}>
          Citizen's Health Information and Management System
        </Title>
        <Text size="lg" fw={500} c="dimmed">
          Vue.js
        </Text>
      </Box>

      <Text mb={60} size="xl" c="dimmed" lh="115%">
        Lorem ipsum dolor sit amet consecte. Lorem ipsum dolor sit amet
        consecte. Lorem ipsum dolor sit amet consecte. Lorem ipsum dolor sit
        amet consecte.
      </Text>

      <Group mb={36}>
        <PrimaryButton w={166} fw={500}>
          View Live
        </PrimaryButton>
        <ArrowButton>See More Projects</ArrowButton>
      </Group>

      <Grid gutter="lg" mb={60}>
        <Grid.Col span={6}>
          <CredCard icon={IconImageInPicture} withBorder />
        </Grid.Col>
        <Grid.Col span={6}>
          <CredCard icon={IconImageInPicture} />
        </Grid.Col>
      </Grid>

      <Image mb={60} radius={20} src={ChimsOne} />

      <Title size={24} mb={28}>
        More{" "}
        <Text span inherit c="primaryColor">
          Projects
        </Text>
      </Title>

      <Group>
        {MAPPED_PROJECTS.map((props) => (
          <ProjectCard key={props.title} {...props} />
        ))}
      </Group>
    </Box>
  );
}
