import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconHome,
  IconFolder,
  IconTool,
  IconPhone,
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

export type ProfileLink = {
  icon: IconType;
  link: string;
};

export const MAPPED_PROFILE_LINKS: readonly ProfileLink[] = [
  {
    icon: "github",
    link: "https://github.com/gabrielgatbonton",
  },
  {
    icon: "instagram",
    link: "https://www.instagram.com/gatboosted",
  },
  {
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gabrielgatbonton/",
  },
  {
    icon: "email",
    link: "mailto:ggatbonton.cs@gmail.com",
  },
];

export const MAPPED_NAVBAR_LINKS: readonly ProfileLink[] = [
  {
    icon: "home",
    link: "home",
  },
  {
    icon: "folder",
    link: "project",
  },
  {
    icon: "tool",
    link: "tools",
  },
  {
    icon: "phone",
    link: "contact",
  },
];
