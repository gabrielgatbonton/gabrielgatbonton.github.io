import { Card, Stack, Box, BoxProps } from "@mantine/core";

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
      <Card px={12} py={18} w={50} h="100%" shadow="xl" radius={15}>
        <Stack gap={8} align="center" justify="center">
          {MAPPED_NAVBAR_LINKS.map(({ icon, link }) => (
            <IconButton
              key={icon}
              icon={icon}
              active={icon === active}
              defaultColor="primaryColor.5"
              onClick={() => scrollToSection(link)}
            />
          ))}
        </Stack>
      </Card>
    </Box>
  );
}
