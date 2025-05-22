// CHIMS
import ChimsCitizen from "../assets/snapshots/chims/citizens.png";
import ChimsLogin from "../assets/snapshots/chims/login.png";
import ChimsDialysis from "../assets/snapshots/chims/dialysis.png";
import ChimsPublicOne from "../assets/snapshots/chims/public.png";
import ChimsPublicTwo from "../assets/snapshots/chims/public-2.png";
import ChimsPublicThree from "../assets/snapshots/chims/public-3.png";
import ChimsView from "../assets/snapshots/chims/view.png";

// HRBMS
import HrbmsPublic from "../assets/snapshots/hrbms/public.png";
import HrbmsLoginGuest from "../assets/snapshots/hrbms/login-guest.png";
import HrbmsAccount from "../assets/snapshots/hrbms/account.png";
import HrbmsDashboard from "../assets/snapshots/hrbms/dashboard.png";
import HrbmsTransactions from "../assets/snapshots/hrbms/transactions.png";
import HrbmsGuests from "../assets/snapshots/hrbms/guests.png";
import HrbmsCategories from "../assets/snapshots/hrbms/categories.png";

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
    imageOne: HrbmsPublic,
    imageTwo: HrbmsLoginGuest,
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
  {
    id: 2,
    PrimaryImage: HrbmsLoginGuest,
    title: "Hotel Room Booking Management System",
    keyword: "hrbms",
    subtitle: "Vuejs",
    description:
      "A comprehensive Vue.js-based solution for hotel operations—supporting booking management, guest services, transactions, and reporting—built for Systems Plus College Foundation’s College of Hospitality and Tourism Management to help students practice real-world hospitality workflows.",
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
      HrbmsPublic,
      HrbmsAccount,
      HrbmsDashboard,
      HrbmsTransactions,
      HrbmsGuests,
      HrbmsCategories,
    ],
  },
];
