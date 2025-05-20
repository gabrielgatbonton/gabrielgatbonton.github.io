import { Title } from "@mantine/core";

// Components
import DefaultBorder from "../../default-border";

type StatCardProps = {
  value: string;
  label: string;
  classes: {
    responsiveCard: string;
    responsiveTitle: string;
    responsiveText: string;
  };
};

export default function StatCard({ value, label, classes }: StatCardProps) {
  return (
    <DefaultBorder radius={10} responsiveClass={classes.responsiveCard}>
      <Title
        ta="center"
        fw={700}
        c="primaryColor"
        className={classes.responsiveTitle}
      >
        {value}
      </Title>
      <Title
        fw={600}
        tt="uppercase"
        c="primaryColor"
        className={classes.responsiveText}
      >
        {label}
      </Title>
    </DefaultBorder>
  );
}
