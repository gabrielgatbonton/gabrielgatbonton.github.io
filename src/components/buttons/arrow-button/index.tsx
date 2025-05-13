import { Button, ButtonProps } from "@mantine/core";
import { IconArrowNarrowRight, IconArrowNarrowLeft } from "@tabler/icons-react";

const icons = {
  left: IconArrowNarrowLeft,
  right: IconArrowNarrowRight,
};

type ArrowButtonProps = ButtonProps & {
  children: React.ReactNode;
  reverseIcon?: boolean;
  onClick?: () => void;
  size?: string;
};

export default function ArrowButton({
  children,
  onClick,
  reverseIcon,
  size = "sm",
  ...props
}: ArrowButtonProps) {
  // If reverseIcon is true, we need to rotate the icon
  const direction = reverseIcon ? "left" : "right";
  const IconComponent = icons[direction];

  // Icon Component
  const icon = <IconComponent size={24} stroke={1.5} />;
  const iconProps = {
    ...(reverseIcon ? { leftSection: icon } : { rightSection: icon }),
  };
  return (
    <Button
      size={size}
      variant="transparent"
      c="dark.7"
      onClick={onClick}
      {...iconProps}
      {...props}
    >
      {children}
    </Button>
  );
}
