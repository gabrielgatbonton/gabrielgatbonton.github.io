import { Box, Card, Image, Stack, Title, Text } from "@mantine/core";
import clsx from "clsx";
import classes from "./styles.module.css";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  imageOne: string;
  imageTwo: string;
  onClick?: () => void;
};

export default function ProjectCard({
  title,
  subtitle,
  imageOne,
  imageTwo,
  onClick,
}: ProjectCardProps) {
  return (
    <Card
      radius={20}
      bg="primaryColor"
      className={classes.card}
      onClick={onClick}
    >
      <Box className={classes.hoverEffect}>
        {/* Background Image (tilted) */}
        <Image
          src={imageOne}
          pos="absolute"
          className={clsx(classes.cardShadow, classes.backImage)}
        />

        {/* Foreground Image (straight) */}
        <Image
          src={imageTwo}
          pos="absolute"
          className={clsx(classes.cardShadow, classes.foreImage)}
        />
      </Box>

      <Box
        pos="absolute"
        px={16}
        py={12}
        bottom={0}
        left={0}
        w="100%"
        h={80}
        className={classes.sectionBlur}
      >
        <Stack gap={0}>
          <Title order={4} fw={700}>
            {title}
          </Title>
          <Text size="md">{subtitle}</Text>
        </Stack>
      </Box>
    </Card>
  );
}
