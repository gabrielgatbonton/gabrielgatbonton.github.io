import { Card, Box, BoxProps, Flex } from "@mantine/core";
import classes from "./styles.module.css";

// Hooks
import { useActiveSection } from "../../hooks/useActiveSection";
import { useResponsiveValue } from "../../hooks/useResponsiveValue";

// Components
import IconButton from "../buttons/icon-button";

// Constants
import { MAPPED_NAVBAR_LINKS } from "../../constants/icons";
import { RESPONSIVE_INTERSECTION_OPTIONS } from "../../constants/responsive";

// Functions
import { scrollToSection } from "../../utils/functions";

type NavbarProps = BoxProps & {};

export default function Navbar({ ...props }: NavbarProps) {
  const options = useResponsiveValue(RESPONSIVE_INTERSECTION_OPTIONS);
  const active = useActiveSection(MAPPED_NAVBAR_LINKS, options);

  return (
    <Box {...props}>
      <Card className={classes.responsiveNav} shadow="xl" radius={15}>
        <Flex
          gap={8}
          direction={{ base: "row", xl: "column" }}
          align="center"
          justify="center"
        >
          {MAPPED_NAVBAR_LINKS.map(({ icon, link }) => (
            <IconButton
              key={icon}
              icon={icon}
              active={icon === active}
              defaultColor="primaryColor.5"
              onClick={() => scrollToSection(link)}
            />
          ))}
        </Flex>
      </Card>
    </Box>
  );
}
