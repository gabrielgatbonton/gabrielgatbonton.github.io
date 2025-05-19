import { HTMLAttributes } from "react";
import { Box, BoxProps, Grid, TitleOrder } from "@mantine/core";

// Hooks
import { useMediaSelector } from "../../../hooks/useMediaSelector";

// Components
import Headline from "../../headline";
import ToolCard from "../../cards/tool-card";

// Constants
import { MAPPED_TOOLS } from "../../../constants/data";
import { RESPONSIVE_HEADLINE } from "../../../constants/responsive";

type ToolsSectionProps = BoxProps & HTMLAttributes<HTMLDivElement>;

export default function ToolsSection({ ...props }: ToolsSectionProps) {
  const HEADLINE_ORDER = useMediaSelector<TitleOrder>(RESPONSIVE_HEADLINE);
  return (
    <Box {...props}>
      <Headline
        mb={42}
        title="The Engines Behind My Projects"
        highlight="Projects"
        order={HEADLINE_ORDER}
      />

      <Grid>
        {MAPPED_TOOLS.map((props) => (
          <Grid.Col key={props.title} span={{ base: 12, sm: 6, lg: 4 }}>
            <ToolCard {...props} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
