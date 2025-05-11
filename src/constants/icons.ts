import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconHome,
  IconFolder,
  IconTool,
  IconPhone
} from "@tabler/icons-react";

export const mappedIcons = {
  github: IconBrandGithub,
  instagram: IconBrandInstagram,
  linkedin: IconBrandLinkedin,
  email: IconMail,
  home: IconHome,
  folder: IconFolder,
  tool: IconTool,
  phone: IconPhone,
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

export const MAPPED_NAVBAR_LINKS: readonly ProfileLink[] = [
  {
    icon: "home",
    link: "",
  },
  {
    icon: "folder",
    link: "",
  },
  {
    icon: "tool",
    link: "",
  },
  {
    icon: "phone",
    link: "",
  },
];
