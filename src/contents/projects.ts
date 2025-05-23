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

// DeepFake
import DeepFakeHome from "../assets/snapshots/deepfake/home.png";
import DeepFakeAboutOne from "../assets/snapshots/deepfake/about.png";
import DeepFakeAboutTwo from "../assets/snapshots/deepfake/about-2.png";
import DeepFakeAboutThree from "../assets/snapshots/deepfake/about-3.png";
import DeepFakeAboutFour from "../assets/snapshots/deepfake/about-4.png";
import DeepFakeDetecting from "../assets/snapshots/deepfake/detecting.png";
import DeepFakeDetected from "../assets/snapshots/deepfake/detected.png";

// EaseMind
import EaseMindHome from "../assets/snapshots/easemind/home.png";
import EaseMindAbout from "../assets/snapshots/easemind/about.png";
import EaseMindInternetIdentity from "../assets/snapshots/easemind/internet-identity.png";
import EaseMindLogin from "../assets/snapshots/easemind/login.png";

// QuickGlance
import QuickGlanceCover from "../assets/snapshots/quickglance/cover.png";
import QuickGlanceCloseup from "../assets/snapshots/quickglance/closeup.png";
import QuickGlanceHome from "../assets/snapshots/quickglance/home.png";
import QuickGlanceSelection from "../assets/snapshots/quickglance/selection.png";
import QuickGlanceFeatures from "../assets/snapshots/quickglance/features.png";
import QuickGlanceAutomation from "../assets/snapshots/quickglance/automation.png";

export const MAPPED_PROJECT_CARDS = [
  {
    id: 1,
    title: "QuickGlance",
    subtitle: "React Native",
    imageOne: QuickGlanceCover,
    imageTwo: QuickGlanceCloseup,
  },
  {
    id: 2,
    title: "EaseMind",
    subtitle: "Reactjs",
    imageOne: EaseMindLogin,
    imageTwo: EaseMindHome,
  },
  {
    id: 3,
    title: "DeepFake",
    subtitle: "Reactjs",
    imageOne: DeepFakeDetected,
    imageTwo: DeepFakeAboutOne,
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

const devDescriptionMobile = (tool: string) =>
  `Interactive and dynamic mobile application development using ${tool}`;

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
  {
    id: 3,
    PrimaryImage: DeepFakeHome,
    title: "DeepFake Detection",
    keyword: "deepfake",
    subtitle: "Reactjs",
    description:
      "A React-based frontend application for a deepfake detection project—built with Mantine, React Router, Zustand, and Axios—developed under Systems Plus College Foundation's College of Computing and Information Sciences to combat misinformation on social media by detecting deepfakes in uploaded videos and images. The project is also planned for donation to CHED Region 3 in the Philippines.",
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
        description: devDescription("Reactjs"),
      },
    ],
    images: [
      DeepFakeDetecting,
      DeepFakeDetected,
      DeepFakeAboutOne,
      DeepFakeAboutTwo,
      DeepFakeAboutThree,
      DeepFakeAboutFour,
    ],
  },
  {
    id: 4,
    PrimaryImage: EaseMindHome,
    title: "EaseMind",
    keyword: "easemind",
    subtitle: "Reactjs",
    description:
      "EaseMind is a student-led platform for open emotional expression and peer support, promoting mental health in a secure digital space. Built with Mantine, React Router, Zustand, lightGallery, and Firebase for real-time chat, it also integrates ICP blockchain to protect user data and interactions.",
    live: "https://llvrf-giaaa-aaaal-amqwa-cai.icp0.io/",
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
        description: devDescription("Reactjs"),
      },
    ],
    images: [EaseMindAbout, EaseMindInternetIdentity, EaseMindLogin],
  },
  {
    id: 5,
    PrimaryImage: QuickGlanceCover,
    title: "QuickGlance",
    keyword: "quickglance",
    subtitle: "React Native",
    description:
      "EaseMind is a student-led platform for open emotional expression and peer support, promoting mental health in a secure digital space. Built with Mantine, React Router, Zustand, lightGallery, and Firebase for real-time chat, it also integrates ICP blockchain to protect user data and interactions.",
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
        description: devDescriptionMobile("React Native"),
      },
    ],
    images: [
      QuickGlanceHome,
      QuickGlanceSelection,
      QuickGlanceFeatures,
      QuickGlanceAutomation,
    ],
  },
];
