import { Container } from "@mantine/core";
import classes from "./styles.module.css";

type MainContainerProps = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <Container size="responsive" className={classes.container}>
      {children}
    </Container>
  );
}
