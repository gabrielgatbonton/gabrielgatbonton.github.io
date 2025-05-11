import { Text, Box, BoxProps, Title, Group } from "@mantine/core";

// Components
import StatCard from "../../stat-card";
import PrimaryButton from "../../buttons/primary-button";
import ArrowButton from "../../buttons/arrow-button";

// Constants
import { MAPPED_STATS } from "../../../constants/data";

type HomeSectionProps = BoxProps & {};

export default function HomeSection({ ...props }: HomeSectionProps) {
  return (
    <Box {...props}>
      <Box mb={48}>
        <Title mb={10}>Lorem ipsum dolor sit amet consecte. </Title>
        <Text size="xl" fw={500} lh="115%" c="dimmed">
          Lorem ipsum dolor sit amet consecte. Lorem ipsum dolor sit amet
          consecte. Lorem ipsum dolor sit amet consecte. Lorem ipsum dolor sit
          amet consecte.
        </Text>
      </Box>

      <Group gap={32} mb={34}>
        {MAPPED_STATS.map(({ value, label }) => (
          <StatCard key={label} value={value} label={label} />
        ))}
      </Group>

      <Group gap={16}>
        <PrimaryButton w={170} fw={600}>
          Get my Resume
        </PrimaryButton>
        <ArrowButton>My Work</ArrowButton>
      </Group>
    </Box>
  );
}
