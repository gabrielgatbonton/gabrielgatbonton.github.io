import {
  Box,
  Grid,
  Group,
  Image,
  Text,
  Title,
  Flex,
  Stack,
} from "@mantine/core";
import { useResponsiveValue } from "../../hooks/useResponsiveValue";
import { useNavigate, useParams } from "react-router";

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
import { MAPPED_PROJECT_CARDS } from "../../contents/projects";
import { MAPPED_PROJECTS } from "../../contents/projects";

// Motions
import MotionBox from "../../animations/MotionBox";
import { fadeDown } from "../../constants/motions";

export default function ProjectPage() {
  const { project } = useParams();
  const HEADLINE_ORDER = useResponsiveValue(RESPONSIVE_PROJECT_HEADLINE);
  const SUBTITLE_SIZE = useResponsiveValue(RESPONSIVE_PROJECT_SUBTITLE);
  const TEXT_SIZE = useResponsiveValue(RESPONSIVE_PROJECT_TEXT);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleProjectClick = (project: string) => {
    navigate(`/${project.toLowerCase()}`);
  };

  const PROJECT = MAPPED_PROJECTS.find(({ keyword }) => keyword === project);

  if (!PROJECT) {
    return (
      <>
        <ArrowButton mb={28} onClick={handleBack} size="md" reverseIcon>
          Back
        </ArrowButton>
        <Text>Project not found</Text>
      </>
    );
  }

  const MAPPED_MORE_PROJECT_CARDS = MAPPED_PROJECT_CARDS.filter(
    ({ title }) => title.toLowerCase() !== PROJECT.keyword
  )
    .sort(() => Math.random() - 0.5) // Shuffle the array
    .slice(0, 2); // Take the first 2

  return (
    <MotionBox variants={fadeDown}>
      <Box>
        <ArrowButton mb={28} onClick={handleBack} size="md" reverseIcon>
          Back
        </ArrowButton>

        <Image
          mb={28}
          radius={16}
          src={PROJECT.PrimaryImage}
          style={{
            border: "1px solid var(--mantine-color-primaryColor-2)",
          }}
        />

        <Box mb={28}>
          <Title order={HEADLINE_ORDER} fw={700} mb={4}>
            {PROJECT.title}
          </Title>
          <Text size={SUBTITLE_SIZE} fw={500} c="dimmed">
            {PROJECT.subtitle}
          </Text>
        </Box>

        <Text mb={60} size={TEXT_SIZE} c="dimmed" lh="115%">
          {PROJECT.description}
        </Text>

        {PROJECT.live && (
          <Group mb={36}>
            <PrimaryButton w={166} fw={500}>
              View Live
            </PrimaryButton>
            <ArrowButton onClick={handleBack}>See More Projects</ArrowButton>
          </Group>
        )}

        <Grid gutter="lg" mb={60}>
          {PROJECT.creds.map(
            ({ icon: IconComponent, title, description }, index) => (
              <Grid.Col key={title} span={{ base: 12, sm: 6 }}>
                <CredCard
                  icon={IconComponent}
                  title={title}
                  description={description}
                  withBorder={index % 2 === 0}
                />
              </Grid.Col>
            )
          )}
        </Grid>

        <Stack mb={60} gap={24}>
          {PROJECT.images.map((image, index) => (
            <Image
              radius={16}
              key={`image-${index}`}
              src={image}
              style={{
                border: "1px solid var(--mantine-color-primaryColor-2)",
              }}
            />
          ))}
        </Stack>

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
          {MAPPED_MORE_PROJECT_CARDS.map((props) => (
            <ProjectCard
              onClick={() => handleProjectClick(props.title)}
              key={props.title}
              {...props}
            />
          ))}
        </Flex>
      </Box>
    </MotionBox>
  );
}
