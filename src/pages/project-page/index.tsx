import { Box, Grid, Group, Image, Text, Title, Flex } from "@mantine/core";
import { useResponsiveValue } from "../../hooks/useResponsiveValue";
import { useNavigate } from "react-router";

// Components
import ArrowButton from "../../components/buttons/arrow-button";
import PrimaryButton from "../../components/buttons/primary-button";
import CredCard from "../../components/cards/cred-card";
import ProjectCard from "../../components/cards/project-card";

// Constants
import {
  RESPONSIVE_PROJECT_HEADLINE,
  RESPONSIVE_PROJECT_SUBTITLE,
  RESPONSIVE_PROJECT_TEXT,
} from "../../constants/responsive";

// Contents
import { MAPPED_PROJECTS } from "../../contents/projects";

// Temporary
import ChimsOne from "../../assets/snapshots/chims_1.png";
import ChimsTwo from "../../assets/snapshots/chims_2.png";
import { IconImageInPicture } from "@tabler/icons-react";

// Motions
import MotionBox from "../../animations/MotionBox";
import { fadeDown } from "../../constants/motions";

export default function ProjectPage() {
  const HEADLINE_ORDER = useResponsiveValue(RESPONSIVE_PROJECT_HEADLINE);
  const SUBTITLE_SIZE = useResponsiveValue(RESPONSIVE_PROJECT_SUBTITLE);
  const TEXT_SIZE = useResponsiveValue(RESPONSIVE_PROJECT_TEXT);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <MotionBox variants={fadeDown}>
      <Box>
        <ArrowButton mb={28} onClick={handleBack} size="md" reverseIcon>
          Back
        </ArrowButton>

        <Image mb={28} radius={20} src={ChimsTwo} />

        <Box mb={28}>
          <Title order={HEADLINE_ORDER} fw={700} mb={4}>
            Citizen's Health Information and Management System
          </Title>
          <Text size={SUBTITLE_SIZE} fw={500} c="dimmed">
            Vue.js
          </Text>
        </Box>

        <Text mb={60} size={TEXT_SIZE} c="dimmed" lh="115%">
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
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <CredCard icon={IconImageInPicture} withBorder />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
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

        <Flex
          justify={{ base: "center", md: "start" }}
          align="center"
          wrap="wrap"
          gap={16}
        >
          {MAPPED_PROJECTS.map((props) => (
            <ProjectCard key={props.title} {...props} />
          ))}
        </Flex>
      </Box>
    </MotionBox>
  );
}
