import { Box, Grid } from "@mantine/core";

// Components
import Headline from "../../headline";
import ToolCard from "../../cards/tool-card";

// Constants
import { MAPPED_TOOLS } from "../../../constants/data";

export default function ToolsSection() {
  return (
    <Box>
      <Headline
        mb={42}
        title="The Engines Behind My Projects"
        highlight="Projects"
      />

      <Grid>
        {MAPPED_TOOLS.map((props) => (
          <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
            <ToolCard key={props.title} {...props} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
