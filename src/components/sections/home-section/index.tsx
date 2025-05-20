import { HTMLAttributes } from "react";
import { Text, Box, BoxProps, Title, Flex } from "@mantine/core";

// Hooks
import { useResponsiveValue } from "../../../hooks/useResponsiveValue";

// Components
import StatCard from "../../cards/stat-card";
import PrimaryButton from "../../buttons/primary-button";
import ArrowButton from "../../buttons/arrow-button";

// Constants
import { MAPPED_STATS } from "../../../constants/data";
import {
  RESPONSIVE_HEADLINE,
  RESPONSIVE_TEXT_SIZE,
  RESPONSIVE_TEXT_ALIGN,
} from "../../../constants/responsive";

type HomeSectionProps = BoxProps & HTMLAttributes<HTMLDivElement>;

export default function HomeSection({ ...props }: HomeSectionProps) {
  const HEADLINE_ORDER = useResponsiveValue(RESPONSIVE_HEADLINE);
  const TEXT_SIZE = useResponsiveValue(RESPONSIVE_TEXT_SIZE);
  const TEXT_ALIGN = useResponsiveValue(RESPONSIVE_TEXT_ALIGN);
  return (
    <Box {...props}>
      <Box mb={48} ta={TEXT_ALIGN}>
        <Title order={HEADLINE_ORDER} mb={10}>
          Lorem ipsum dolor sit amet consecte.
        </Title>
        <Text size={TEXT_SIZE} fw={500} lh="115%" c="dimmed">
          Lorem ipsum dolor sit amet consecte. Lorem ipsum dolor sit amet
          consecte. Lorem ipsum dolor sit amet consecte. Lorem ipsum dolor sit
          amet consecte.
        </Text>
      </Box>

      <Flex justify={{ base: "center", md: "start" }} gap={32} mb={34}>
        {MAPPED_STATS.map(({ value, label }) => (
          <StatCard key={label} value={value} label={label} />
        ))}
      </Flex>

      <Flex justify={{ base: "center", md: "start" }} gap={16}>
        <PrimaryButton w={170} fw={600}>
          Get my Resume
        </PrimaryButton>
        <ArrowButton>My Work</ArrowButton>
      </Flex>
    </Box>
  );
}
