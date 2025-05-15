import ChimsOne from "../assets/snapshots/chims_1.png";
import ChimsTwo from "../assets/snapshots/chims_2.png";

import MantineIcon from "../assets/logos/mantine-icon.svg";

export const MAPPED_STATS = [
  {
    value: "2+",
    label: "Years of Experience",
  },
  {
    value: "5+",
    label: "Number of Projects",
  },
  {
    value: "4+",
    label: "Completed Courses",
  },
];

export const MAPPED_PROJECTS = [
  {
    title: "CHIMS",
    subtitle: "Vue.js",
    imageOne: ChimsOne,
    imageTwo: ChimsTwo,
  },
];

export const MAPPED_TOOLS = [
  {
    title: "Vue.js",
    description: "Frontend Tool",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    title: "React.js",
    description: "Frontend Tool",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "JavaScript",
    description: "Programming Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "TypeScript",
    description: "Programming Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "Mantine",
    description: "UI Framework",
    logo: MantineIcon,
  },
  {
    title: "Tailwind CSS",
    description: "CSS Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    title: "Vuetify",
    description: "UI Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const MAPPED_FAQS: FaqItem[] = [
  {
    question: "Can you work with existing teams?",
    answer:
      "Absolutely! I can collaborate seamlessly with existing teams, integrating into your workflow to enhance design and development efforts.",
  },
  {
    question: "What is your preferred tech stack?",
    answer:
      "I am proficient in Vue.js, React.js, and Tailwind CSS, but I am open to working with other technologies as well.",
  },
  {
    question: "Do you offer maintenance services?",
    answer:
      "Yes, I provide ongoing maintenance and support for projects after completion.",
  },
];
