import { Card, CardProps } from "@mantine/core";
import classes from "./styles.module.css";

type DefaultBorderProps = CardProps & {
  children: React.ReactNode;
};

export default function DefaultBorder({
  children,
  ...props
}: DefaultBorderProps) {
  return (
    <Card {...props} className={classes.card}>
      {children}
    </Card>
  );
}
