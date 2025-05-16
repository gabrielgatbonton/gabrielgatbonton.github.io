import { useState } from "react";
import { Card, Stack, Box, BoxProps } from "@mantine/core";

// Components
import IconButton from "../buttons/icon-button";

// Constants
import { MAPPED_NAVBAR_LINKS } from "../../constants/icons";

type NavbarProps = BoxProps & {};

export default function Navbar({ ...props }: NavbarProps) {
  const [active, setActive] = useState<string>("home");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = (icon: string, id: string) => {
    setActive(icon);
    scrollToSection(id);
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
              onClick={() => handleScroll(icon, link)}
            />
          ))}
        </Stack>
      </Card>
    </Box>
  );
}
