import { Container, ContainerProps } from "@mantine/core";
import classes from "./styles.module.css";

type MainContainerProps = ContainerProps & {
  ref?: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
};

export default function MainContainer({
  children,
  ...props
}: MainContainerProps) {
  return (
    <Container size="responsive" {...props} className={classes.container}>
      {children}
    </Container>
  );
}
