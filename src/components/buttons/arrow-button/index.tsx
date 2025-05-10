import { Button, ButtonProps } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";

type ArrowButtonProps = ButtonProps & {
  children: React.ReactNode;
};

export default function ArrowButton({ children }: ArrowButtonProps) {
  const icon = <IconArrowNarrowRight size={24} stroke={1.5} />;
  return (
    <Button variant="transparent" c="dark.7" rightSection={icon}>
      {children}
    </Button>
  );
}
