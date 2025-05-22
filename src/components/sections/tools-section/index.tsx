import { HTMLAttributes } from "react";
import { Box, BoxProps, Grid } from "@mantine/core";

// Hooks
import { useResponsiveValue } from "../../../hooks/useResponsiveValue";

// Components
import Headline from "../../headline";
import ToolCard from "../../cards/tool-card";

// Constants
import {
  RESPONSIVE_HEADLINE,
  RESPONSIVE_TEXT_ALIGN,
} from "../../../constants/responsive";

// Contents
import { MAPPED_TOOLS } from "../../../contents/tools";

type ToolsSectionProps = BoxProps & HTMLAttributes<HTMLDivElement>;

export default function ToolsSection({ ...props }: ToolsSectionProps) {
  // Responsive Values
  const HEADLINE_ORDER = useResponsiveValue(RESPONSIVE_HEADLINE);
  const TEXT_ALIGN = useResponsiveValue(RESPONSIVE_TEXT_ALIGN);
  return (
    <Box {...props}>
      <Headline
        mb={42}
        title="The Engines Behind My Projects"
        highlight="Projects"
        order={HEADLINE_ORDER}
        ta={TEXT_ALIGN}
      />

      <Grid>
        {MAPPED_TOOLS.map((props) => (
          <Grid.Col key={props.title} span={{ base: 12, sm: 6 }}>
            <ToolCard {...props} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
