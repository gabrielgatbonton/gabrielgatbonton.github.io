import { HTMLAttributes } from "react";
import { Text, Box, BoxProps, Title, Flex } from "@mantine/core";
import classes from "./styles.module.css";

// Hooks
import { useResponsiveValue } from "../../../hooks/useResponsiveValue";

// Components
import StatCard from "../../cards/stat-card";
import PrimaryButton from "../../buttons/primary-button";
import ArrowButton from "../../buttons/arrow-button";
import Headline from "../../headline";

// Constants
import { MAPPED_STATS } from "../../../contents/stats";
import {
  RESPONSIVE_HEADLINE,
  RESPONSIVE_TEXT_SIZE,
  RESPONSIVE_TEXT_ALIGN,
} from "../../../constants/responsive";

// Functions
import { scrollToSection } from "../../../utils/functions";

type HomeSectionProps = BoxProps & HTMLAttributes<HTMLDivElement>;

export default function HomeSection({ ...props }: HomeSectionProps) {
  const HEADLINE_ORDER = useResponsiveValue(RESPONSIVE_HEADLINE);
  const TEXT_SIZE = useResponsiveValue(RESPONSIVE_TEXT_SIZE);
  const TEXT_ALIGN = useResponsiveValue(RESPONSIVE_TEXT_ALIGN);

  const statCardClasses = {
    responsiveCard: classes.responsiveCard,
    responsiveTitle: classes.responsiveTitle,
    responsiveText: classes.responsiveText,
  };
  return (
    <Box {...props}>
      <Box mb={48} ta={TEXT_ALIGN}>
        <Headline
          title="Turning Code Into Beautiful Experiences"
          highlight="Beautiful Experiences"
          order={HEADLINE_ORDER}
          mb={10}
        />
        <Text size={TEXT_SIZE} fw={500} lh="115%" c="dimmed">
          I’m a Computer Science student and frontend developer with 2 years of
          experience in crafting responsive and engaging interfaces for web and
          mobile platforms. I love building apps that look great and feel even
          better to use.
        </Text>
      </Box>

      <Flex
        justify={{ base: "center", md: "start" }}
        gap={{ base: 16, md: 32 }}
        wrap="wrap"
        mb={34}
      >
        {MAPPED_STATS.map(({ value, label }) => (
          <StatCard
            key={label}
            value={value}
            label={label}
            classes={statCardClasses}
          />
        ))}
      </Flex>

      <Flex justify={{ base: "center", md: "start" }} gap={16}>
        <PrimaryButton w={170} fw={600}>
          Get my Resume
        </PrimaryButton>
        <ArrowButton onClick={() => scrollToSection("project")}>
          My Work
        </ArrowButton>
      </Flex>
    </Box>
  );
}
