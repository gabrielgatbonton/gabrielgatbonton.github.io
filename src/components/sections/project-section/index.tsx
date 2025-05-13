import { Box, Group } from "@mantine/core";
import { useNavigate } from "react-router";

// Components
import Headline from "../../headline";
import ProjectCard from "../../cards/project-card";

// Constants
import { MAPPED_PROJECTS } from "../../../constants/data";

export default function ProjectSection() {
  const navigate = useNavigate();

  const handleProjectClick = (project: string) => {
    navigate(`/${project.toLowerCase()}`);
  };

  return (
    <Box>
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
