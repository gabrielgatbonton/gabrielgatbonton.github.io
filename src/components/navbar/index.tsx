import { Card, Stack, Box, BoxProps } from "@mantine/core";

// Components
import IconButton from "../buttons/icon-button";

// Constants
import { MAPPED_NAVBAR_LINKS } from "../../constants/icons";

type NavbarProps = BoxProps & {};

export default function Navbar({ ...props }: NavbarProps) {
  return (
    <Box {...props}>
      <Card px={12} py={18} w={50} h="100%" shadow="xl" radius={15}>
        <Stack gap={8} align="center" justify="center">
          {MAPPED_NAVBAR_LINKS.map(({ icon }) => (
            <IconButton key={icon} icon={icon} defaultColor="primaryColor.5" />
          ))}
        </Stack>
      </Card>
    </Box>
  );
}
