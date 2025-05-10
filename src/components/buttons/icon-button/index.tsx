import { ActionIcon } from "@mantine/core";
import { mappedIcons, IconType } from "../../../constants/icons";
import classes from "./styles.module.css";
import { useHover } from "@mantine/hooks";
import clsx from "clsx";

type IconButtonProps = {
  icon: IconType;
};

const hoveredStyles = {
  default: {
    color: "#222120",
    variant: "transparent",
  },
  hovered: {
    color: "primaryColor.5",
    variant: "filled",
  },
};

export default function IconButton({ icon }: IconButtonProps) {
  const IconComponent = mappedIcons[icon];
  const { hovered, ref } = useHover();

  const { color, variant } = hovered
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
    >
      <IconComponent style={{ width: "80%", height: "80%" }} />
    </ActionIcon>
  );
}
