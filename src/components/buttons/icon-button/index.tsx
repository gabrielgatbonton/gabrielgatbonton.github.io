import {
  ActionIcon,
  ActionIconProps,
  PolymorphicComponentProps,
} from "@mantine/core";
import { mappedIcons, IconType } from "../../../constants/icons";
import classes from "./styles.module.css";
import { useHover } from "@mantine/hooks";
import clsx from "clsx";

type IconButtonProps = ActionIconProps & {
  icon: IconType;
  defaultColor?: string;
  active?: boolean;
  onClick?: () => void;
  component?: PolymorphicComponentProps<"a">["component"];
  href?: PolymorphicComponentProps<"a">["href"];
  target?: PolymorphicComponentProps<"a">["target"];
};

export default function IconButton({
  icon,
  defaultColor = "#222120",
  active,
  onClick,
  component,
  href,
  target,
  ...props
}: IconButtonProps) {
  const IconComponent = mappedIcons[icon];
  const { hovered, ref } = useHover();

  const hoveredStyles = {
    default: {
      color: defaultColor,
      variant: "transparent",
    },
    hovered: {
      color: "primaryColor.5",
      variant: "filled",
    },
  };

  const { color, variant } = active
    ? hoveredStyles.hovered
    : hovered
    ? hoveredStyles.hovered
    : hoveredStyles.default;

  return (
    <ActionIcon
      ref={ref}
      variant={variant}
      size="lg"
      radius="md"
      color={color}
      className={clsx(classes.icon, {
        [classes.filledHovered]: hovered && variant === "filled",
      })}
      onClick={onClick}
      component={component}
      href={href}
      target={target}
      {...props}
    >
      <IconComponent style={{ width: "80%", height: "80%" }} />
    </ActionIcon>
  );
}
