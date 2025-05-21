import { Button, ButtonProps } from "@mantine/core";

type PrimaryButtonProps = ButtonProps & {
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
