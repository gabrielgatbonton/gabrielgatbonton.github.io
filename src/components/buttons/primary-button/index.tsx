import { Button, ButtonProps } from "@mantine/core";
import { ComponentProps } from "react";

type PrimaryButtonProps = ButtonProps &
  ComponentProps<"button"> & {
    children: React.ReactNode;
    onClick?: () => void;
  };

export default function PrimaryButton({
  children,
  onClick,

  ...props
}: PrimaryButtonProps) {
  return (
    <Button onClick={onClick} color="primaryColor.4" {...props}>
      {children}
    </Button>
  );
}
