import { Box, Group } from "@mantine/core";

// Components
import Headline from "../../headline";
import ProjectCard from "../../cards/project-card";

// Constants
import { MAPPED_PROJECTS } from "../../../constants/data";

export default function ProjectSection() {
  return (
    <Box>
      <Headline
        title="Recent Projects and Achievements"
        highlight="Achievements"
        mb={42}
      />

      <Group>
        {MAPPED_PROJECTS.map((props) => (
          <ProjectCard key={props.title} {...props} />
        ))}
      </Group>
    </Box>
  );
}
