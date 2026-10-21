import { VisionInitiative, VisionPillar } from "./index.types";

export const VISION_GLANCE_IMAGE = {
  src: "/about/dftw-at-a-glance.jpg",
  alt: "DFT²W at a Glance — Three Strategic Pillars, One Vision: IEEE ICDI² AI&ML, IEEE ICoDT² and ICON-DFT², their focus areas and events, cross-cutting initiatives, anticipated outcomes and who should participate. 17–18 November 2026, NUST, Islamabad, Pakistan.",
  width: 1518,
  height: 1036,
};
export const VISION_GLANCE_TITLE = "DFT²W at a Glance";
export const VISION_GLANCE_HINT = "Tap the image to open it full size and zoom in";

export const VISION_MISSION_TITLE = "DFT²W:";
export const VISION_MISSION_TITLE_LINE =
  "TECHNOLOGY CONVERGING TOWARD HUMANITY";
export const VISION_MISSION_LEAD =
  "DFT²W aims to bring together technology, artificial intelligence, business, economics, policy and global collaboration to address one of the central challenges:";
export const VISION_MISSION_CHALLENGE =
  "How emerging and developing economies can harness the convergence of transformative technologies to build inclusive, sustainable and prosperous futures for humanity.";
export const VISION_MISSION_CLOSE =
  "DFT²W brings together researchers, industry leaders, policymakers, students, innovators and entrepreneurs to shape agendas, drive actionable outcomes and engineer impact through collaboration.";

const CONFERENCE_EVENTS = [
  { label: "Tech Expo", iconSrc: "/vision/events/tech-expo.svg" },
  { label: "Plenary Talks", iconSrc: "/vision/events/plenary.svg" },
  { label: "Workshops", iconSrc: "/vision/events/workshops.svg" },
  { label: "Roundtables", iconSrc: "/vision/events/roundtables.svg" },
  { label: "Panel Sessions", iconSrc: "/vision/events/panels.svg" },
  { label: "Other Events", iconSrc: "/vision/events/other.svg" },
];

export const VISION_PILLARS: VisionPillar[] = [
  {
    id: "icdi",
    number: 1,
    title: "IEEE ICDI² AI&ML",
    subtitle:
      "IEEE International Conference on Development & Innovations in AI & Machine Learning",
    tone: "purple",
    focusAreas: [
      "ML Foundations, Data-Centric AI, and Evaluation",
      "Foundation Models, Generative AI, and Multimodal Intelligence",
      "Agentic, Trustworthy, and Applied AI Systems",
      "Robotics and Automation",
      "Computer Vision",
    ],
    events: CONFERENCE_EVENTS,
    href: "/conferences/icdi",
  },
  {
    id: "icodt",
    number: 2,
    title: "IEEE ICODT²",
    subtitle:
      "IEEE International Conference on Digital & Transformative Technologies",
    tone: "blue",
    focusAreas: [
      "Semiconductors & Microelectronics",
      "Connectivity & 6G/NextG",
      "IoT, Edge & Cloud Computing",
      "Smart Systems & Digital Infrastructure",
      "Quantum & Emerging Technologies",
    ],
    events: CONFERENCE_EVENTS,
    href: "/conferences/icodt",
  },
  {
    id: "icon",
    number: 3,
    title: "ICON-DFT²",
    subtitle:
      "International Council on Digital Futures & Transformative Technologies",
    tone: "teal",
    focusAreas: [
      "Global Collaboration & Partnerships",
      "Policy Dialogue & Advisory",
      "Standards, Ethics & Responsible Tech",
      "Research, Innovation & Capacity Building",
      "Inclusive Digital Transformation",
    ],
    events: [
      { label: "Policy Forums", iconSrc: "/vision/events/policy.svg" },
      {
        label: "Global Roundtables",
        iconSrc: "/vision/events/roundtables.svg",
      },
      {
        label: "Think Tank Initiatives",
        iconSrc: "/vision/events/think-tank.svg",
      },
      { label: "Research Networks", iconSrc: "/vision/events/research.svg" },
      {
        label: "Industry-Academia Alliance",
        iconSrc: "/vision/events/alliance.svg",
      },
    ],
    href: "/vision#icon",
  },
];

export const VISION_INITIATIVES_TITLE = "CROSS-CUTTING INITIATIVES ACROSS DFT²W";

export const VISION_INITIATIVES_MAIN: VisionInitiative[] = [
  {
    id: "women",
    label: "Women in Technology & Leadership",
    iconSrc: "/vision/initiatives/women.svg",
  },
  {
    id: "industry",
    label: "Industry Collaboration & Innovation",
    iconSrc: "/vision/initiatives/industry.svg",
  },
  {
    id: "startups",
    label: "Entrepreneurship & Startups",
    iconSrc: "/vision/initiatives/startups.svg",
  },
  {
    id: "sustainable",
    label: "Sustainable & Inclusive Digital Transformation",
    iconSrc: "/vision/initiatives/sustainable.svg",
  },
];

export const VISION_INITIATIVE_YOUTH: VisionInitiative = {
  id: "youth",
  label: "Youth & Student Engagement",
  iconSrc: "/vision/initiatives/youth.svg",
};

export const VISION_INITIATIVE_GLOBAL: VisionInitiative = {
  id: "global",
  label: "Global Visibility & Knowledge Exchange",
  iconSrc: "/vision/initiatives/global.svg",
};

export const VISION_OUTCOMES_TITLE = "ANTICIPATED OUTCOMES";
export const VISION_OUTCOMES = [
  "Advance knowledge & innovation",
  "Strengthen academia–industry–government linkages",
  "Foster policy & technology for inclusive growth",
  "Build sustainable solutions for emerging economies",
];

export const VISION_CTA_TITLE = "BE PART OF DFT²W 2026!";
export const VISION_CTA_WHO_TITLE = "WHO SHOULD PARTICIPATE?";
export const VISION_CTA_WHO =
  "Researchers, Academicians, Industry Leaders, Policymakers, Entrepreneurs, Startups, Students, Investors, Development Partners and Technology Enthusiasts.";
export const VISION_CTA_TAGLINE =
  "Let’s engineer a digital future that creates prosperity for all.";
export const VISION_CTA_EMAIL = "dft2w@seecs.edu.pk";
export const VISION_CTA_URL = "https://conferences.seecs.edu.pk";
export const VISION_CTA_QR_SRC = "/vision/closing/qr-code.png";
