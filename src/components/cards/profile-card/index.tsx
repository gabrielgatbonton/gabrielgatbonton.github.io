import { useRef } from "react";
import { Box, Group, Image, Text, Title } from "@mantine/core";
import { useLocation, useNavigate } from "react-router";
import classes from "./styles.module.css";

// Components
import DefaultBorder from "../../default-border";
import IconButton from "../../buttons/icon-button";
import PrimaryButton from "../../buttons/primary-button";

// Images
import portraitImg from "../../../assets/portrait.png";

// Constants
import { MAPPED_PROFILE_LINKS } from "../../../constants/icons";

// Functions
import { scrollToSection, isMatchedPath } from "../../../utils/functions";

export default function ProfileCard() {
  const location = useLocation();
  const navigate = useNavigate();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleButtonClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const result = isMatchedPath("/:project", location.pathname);

    if (result) {
      navigate("/");

      timeoutRef.current = setTimeout(() => {
        scrollToSection("contact");
      }, 1000);
    } else {
      scrollToSection("contact");
    }
  };
  return (
    <DefaultBorder radius={20} responsiveClass={classes.responsiveCard}>
      <Image
        src={portraitImg}
        w="100%"
        maw={300}
        mx="auto"
        h="auto"
        mb={24}
        radius={20}
      />

      <Title size={26} fw={700} ta="center" mb={8}>
        Gabriel Gatbonton
      </Title>

      <Box mb={24}>
        <Text ta="center" size="md" c="dimmed">
          Web & Mobile Developer
        </Text>

        <Text ta="center" size="md" c="dimmed">
          Pampanga, Philippines
        </Text>
      </Box>

      <Group
        justify="center"
        align="center"
        gap={16}
        className={classes.profileLinks}
      >
        {MAPPED_PROFILE_LINKS.map(({ icon, link }) => (
          <IconButton
            key={icon}
            icon={icon}
            component="a"
            href={link}
            target="_blank"
          />
        ))}
      </Group>

      <PrimaryButton
        mx="auto"
        mt="auto"
        w={160}
        fw={500}
        onClick={handleButtonClick}
      >
        Let's Talk
      </PrimaryButton>
    </DefaultBorder>
  );
}
