import { HTMLAttributes } from "react";
import { Box, Flex, BoxProps } from "@mantine/core";
import { useNavigate } from "react-router";

// Hooks
import { useResponsiveValue } from "../../../hooks/useResponsiveValue";

// Components
import Headline from "../../headline";
import ProjectCard from "../../cards/project-card";

// Constants
import {
  RESPONSIVE_HEADLINE,
  RESPONSIVE_TEXT_ALIGN,
} from "../../../constants/responsive";

// Contents
import { MAPPED_PROJECT_CARDS } from "../../../contents/projects";

type ProjectSectionProps = BoxProps & HTMLAttributes<HTMLDivElement>;

export default function ProjectSection({ ...props }: ProjectSectionProps) {
  const navigate = useNavigate();

  // Responsive Values
  const HEADLINE_ORDER = useResponsiveValue(RESPONSIVE_HEADLINE);
  const TEXT_ALIGN = useResponsiveValue(RESPONSIVE_TEXT_ALIGN);

  const handleProjectClick = (project: string) => {
    navigate(`/${project.toLowerCase()}`);
  };

  return (
    <Box {...props}>
      <Headline
        title="Recent Projects and Achievements"
        highlight="Achievements"
        mb={42}
        order={HEADLINE_ORDER}
        ta={TEXT_ALIGN}
      />

      <Flex
        justify={{ base: "center", md: "start" }}
        align="center"
        wrap="wrap"
        gap={16}
      >
        {MAPPED_PROJECT_CARDS.map((props) => (
          <ProjectCard
            key={props.id}
            {...props}
            onClick={() => handleProjectClick(props.title)}
          />
        ))}
      </Flex>
    </Box>
  );
}
