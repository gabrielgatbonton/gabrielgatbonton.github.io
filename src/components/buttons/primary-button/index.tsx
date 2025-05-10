import { Button, ButtonProps } from "@mantine/core";

type PrimaryButtonProps = ButtonProps & {
  children: React.ReactNode;
};

export default function PrimaryButton({
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <Button color="primaryColor.4" {...props}>
      {children}
    </Button>
  );
}
