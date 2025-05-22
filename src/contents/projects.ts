// CHIMS
import ChimsCitizen from "../assets/snapshots/citizens.png";
import ChimsLogin from "../assets/snapshots/login.png";
import ChimsDialysis from "../assets/snapshots/dialysis.png";
import ChimsPublicOne from "../assets/snapshots/public.png";
import ChimsPublicTwo from "../assets/snapshots/public-2.png";
import ChimsPublicThree from "../assets/snapshots/public-3.png";
import ChimsView from "../assets/snapshots/view.png";

// HRBMS

export const MAPPED_PROJECT_CARDS = [
  {
    id: 1,
    title: "QuickGlance",
    subtitle: "React Native",
    imageOne: ChimsCitizen,
    imageTwo: ChimsLogin,
  },
  {
    id: 2,
    title: "EaseMind",
    subtitle: "Reactjs",
    imageOne: ChimsCitizen,
    imageTwo: ChimsLogin,
  },
  {
    id: 3,
    title: "DeepFake",
    subtitle: "Reactjs",
    imageOne: ChimsCitizen,
    imageTwo: ChimsLogin,
  },
  {
    id: 4,
    title: "CHIMS",
    subtitle: "Vuejs",
    imageOne: ChimsCitizen,
    imageTwo: ChimsLogin,
  },
  {
    id: 5,
    title: "HRBMS",
    subtitle: "Vuejs",
    imageOne: ChimsCitizen,
    imageTwo: ChimsLogin,
  },
];

// Icons
import { IconTagFilled, IconCode } from "@tabler/icons-react";

const devDescription = (tool: string) =>
  `Interactive and dynamic website development using ${tool}`;

export const MAPPED_PROJECTS = [
  {
    id: 1,
    PrimaryImage: ChimsLogin,
    title: "Citizen's Health Information and Management System",
    keyword: "chims",
    subtitle: "Vuejs",
    description:
      "A user-friendly web application built for the Office of the Special Adviser for Flagship Programs for Health (OSAFPH) to manage citizen data and healthcare services. Key features include bio-data management, dialysis queuing, and automated citizen ID card generation, enabling efficient and organized service delivery.",
    live: null,
    creds: [
      {
        icon: IconTagFilled,
        title: "Branding",
        description:
          "Layout Design, User Experience, Accessibility, Identity Development.",
      },
      {
        icon: IconCode,
        title: "Development",
        description: devDescription("Vuejs"),
      },
    ],
    images: [
      ChimsCitizen,
      ChimsView,
      ChimsDialysis,
      ChimsPublicOne,
      ChimsPublicTwo,
      ChimsPublicThree,
    ],
  },
];
