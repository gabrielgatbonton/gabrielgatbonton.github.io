import { HTMLAttributes } from "react";
import { Box, Group, BoxProps } from "@mantine/core";
import { useNavigate } from "react-router";

// Components
import Headline from "../../headline";
import ProjectCard from "../../cards/project-card";

// Constants
import { MAPPED_PROJECTS } from "../../../constants/data";

type ProjectSectionProps = BoxProps & HTMLAttributes<HTMLDivElement>;

export default function ProjectSection({ ...props }: ProjectSectionProps) {
  const navigate = useNavigate();

  const handleProjectClick = (project: string) => {
    navigate(`/${project.toLowerCase()}`);
  };

  return (
    <Box {...props}>
      <Headline
        title="Recent Projects and Achievements"
        highlight="Achievements"
        mb={42}
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
