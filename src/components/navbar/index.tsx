import { Card, Box, BoxProps, Flex } from "@mantine/core";
import classes from "./styles.module.css";

// Hooks
import { useActiveSection } from "../../hooks/useActiveSection";

// Components
import IconButton from "../buttons/icon-button";

// Constants
import { MAPPED_NAVBAR_LINKS } from "../../constants/icons";

type NavbarProps = BoxProps & {};

export default function Navbar({ ...props }: NavbarProps) {
  const active = useActiveSection(MAPPED_NAVBAR_LINKS);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
