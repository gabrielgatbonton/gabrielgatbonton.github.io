import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export const mappedIcons = {
  github: IconBrandGithub,
  instagram: IconBrandInstagram,
  linkedin: IconBrandLinkedin,
  email: IconMail,
};

export type IconType = keyof typeof mappedIcons;

type ProfileLink = {
  icon: IconType;
  link: string;
};

export const MAPPED_PROFILE_LINKS: readonly ProfileLink[] = [
  {
    icon: "github",
    link: "",
  },
  {
    icon: "instagram",
    link: "",
  },
  {
    icon: "linkedin",
    link: "",
  },
  {
    icon: "email",
    link: "",
  },
];
