import { HTMLAttributes } from "react";
import { Box, Group, BoxProps, TitleOrder } from "@mantine/core";
import { useNavigate } from "react-router";

// Hooks
import { useMediaSelector } from "../../../hooks/useMediaSelector";

// Components
import Headline from "../../headline";
import ProjectCard from "../../cards/project-card";

// Constants
import { MAPPED_PROJECTS } from "../../../constants/data";
import { RESPONSIVE_HEADLINE } from "../../../constants/responsive";

type ProjectSectionProps = BoxProps & HTMLAttributes<HTMLDivElement>;

export default function ProjectSection({ ...props }: ProjectSectionProps) {
  const navigate = useNavigate();
  const HEADLINE_ORDER = useMediaSelector<TitleOrder>(RESPONSIVE_HEADLINE);

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
      />

      <Group>
        {MAPPED_PROJECTS.map((props) => (
          <ProjectCard
            key={props.title}
            {...props}
            onClick={() => handleProjectClick(props.title)}
          />
        ))}
      </Group>
    </Box>
  );
}
