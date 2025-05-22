import { Card, Title, Text, Box } from "@mantine/core";
import { TablerIcon } from "@tabler/icons-react";
import classes from "./styles.module.css";
import clsx from "clsx";

type CredCardProps = {
  icon: TablerIcon;
  title: string;
  description: string;
  withBorder?: boolean;
};

export default function CredCard({
  icon: IconComponent,
  title,
  description,
  withBorder = false,
}: CredCardProps) {
  return (
    <Card
      h={200}
      radius={20}
      padding={20}
      className={clsx({
        [classes.borderFill]: withBorder,
        [classes.primaryFill]: !withBorder,
      })}
    >
      <Box
        w={50}
        h={50}
        className={clsx(
          classes.iconContainer,
          withBorder ? classes.primaryFill : classes.primaryText
        )}
      >
        <IconComponent size={28} stroke={2} />
      </Box>
      <Box mt="auto">
        <Title size={32} fw={600} mb={8} c={!withBorder ? "white" : undefined}>
          {title}
        </Title>
        <Text fw={500} c={withBorder ? "dimmed" : "white"}>
          {description}
        </Text>
      </Box>
    </Card>
  );
}
