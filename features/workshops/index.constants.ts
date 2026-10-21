import { PlannedWorkshop, WorkshopReason, WorkshopTopic } from "./index.types";

export const WORKSHOPS_HERO_SRC = "/landing/hero-bg.png";
export const WORKSHOPS_HERO_ALT = "DFT²W Call for Workshop Proposals";
export const WORKSHOPS_HERO_TITLE_LINE_ONE = "Call for";
export const WORKSHOPS_HERO_TITLE_LINE_TWO = "Workshop Proposals";

export const WORKSHOPS_INTRO_LEAD =
  "We invite researchers, academics, industry professionals, innovators, and practitioners to ";
export const WORKSHOPS_INTRO_BOLD = "propose workshops at DFT²W 2026.";

export const WORKSHOPS_TAGLINE =
  "Share your knowledge, inspire the community, and contribute to shaping the future of digital technologies for humanity.";

export const PLANNED_WORKSHOPS_TITLE = "Planned Workshops";
export const PLANNED_WORKSHOPS_INTRO =
  "The following workshops are planned under IEEE DFT²W 2026, running in parallel with conference sessions on 17–18 November 2026. Durations and final schedules are being finalized.";

export const PLANNED_WORKSHOPS: PlannedWorkshop[] = [
  {
    title: "Quantum Computing & Cryptography",
    instructors: "Dr. Faryad, Dr. Madeeha",
    institution: "LUMS, NUST",
    note: "Full-day workshop with practical sessions on quantum algorithms and post-quantum cryptography.",
  },
  {
    title: "Blockchain Technologies & Decentralized Systems",
    instructors: "Dr. Naveed ul Hassan, Dr. Taha, Dr. Ayesha Maqbool",
    institution: "LUMS, NUST",
    note: "Half-day workshop.",
  },
  {
    title: "Satellite Communication & Space Technologies",
    instructors: "Dr. Ayesha Maqbool (coordination)",
    institution: "Aerospace NUST",
    note: "Additional Satcom speakers being confirmed.",
  },
  {
    title: "Next-Generation Energy Systems & Battery Storage",
    instructors:
      "Nauman Ahmad Zafar, Dr. Hameed (PINSTECH), BYD / Sazgar Electric Rickshaw (Industry)",
    institution: "LUMS, PINSTECH, Industry",
    note: "Covers nuclear, SMR, fusion energy and battery storage technologies.",
  },
  {
    title: "AI for Governance & Smart Cities",
    instructors: "Dr. Momin Uppal",
    institution: "LUMS",
    note: "Focuses on AI applications in public policy and urban management.",
  },
  {
    title: "AI Tools to Enhance Productivity for Corporate Sectors",
    instructors: "Dr. Wajahat Hussain",
    institution: "NUST",
    note: "Practical hands-on session for corporate and industry professionals.",
  },
  {
    title: "AI for Health, Science & Judiciary",
    instructors: "Dr. Faisal, Dr. Moazam, Dr. Fahad Satti",
    institution: "NUST",
    note: "Interdisciplinary session on AI in healthcare, scientific discovery, and legal systems.",
    tentative: true,
  },
  {
    title: "Biotechnology, Personalized Medicine & Genetics",
    instructors: "Dr. Yasir (HoD Research, NSHS)",
    institution: "NUST",
    note: "Focuses on AI-enabled genomics, precision medicine, and biotechnology innovation.",
    tentative: true,
  },
];

export const WORKSHOP_TOPICS: WorkshopTopic[] = [
  {
    label: "AI & Machine Learning, Deep Learning and Data Analytics",
    iconSrc: "/topic-of-interests/ai-ml.png",
  },
  {
    label: "Computer Vision & Robotics",
    iconSrc: "/topic-of-interests/computer-vision.png",
  },
  {
    label: "Block chain & Digital Assets",
    iconSrc: "/topic-of-interests/blockchain.png",
  },
  {
    label: "Quantum Computing & Emerging Networks",
    iconSrc: "/topic-of-interests/quantum-computing.png",
  },
  {
    label:
      "IoT and Cyber Physical Systems & Smart Technologies for Industrial Applications",
    iconSrc: "/topic-of-interests/iot-and-cyber-physical-systems.png",
  },
  {
    label:
      "AI Driven Inverse Design / Generative AI for Inverse / Design Engineering",
    iconSrc: "/topic-of-interests/ai-driven-inverse-design.png",
  },
  {
    label: "Sustainable Tech, Green Computing & Smart Infrastructures",
    iconSrc: "/topic-of-interests/sustainable-tech.png",
  },
  {
    label: "Data Science & Analytics",
    iconSrc: "/topic-of-interests/data-science-and-analytics.png",
  },
  {
    label: "Cybersecurity & Privacy",
    iconSrc: "/topic-of-interests/cyber-security-and-privacy.png",
  },
  {
    label: "Digital Futures & Digital Twins",
    iconSrc: "/topic-of-interests/digital-twins.png",
  },
  {
    label: "Industry Applications and Hands-on Tutorials",
    iconSrc: "/topic-of-interests/industry-applications.png",
  },
  {
    label: "AI for Health, Education & Social Good",
    iconSrc: "/topic-of-interests/ai-for-health.png",
  },
];

export const WORKSHOP_REASONS: WorkshopReason[] = [
  {
    title: "Showcase Your Expertise",
    body: "Present your ideas to a global audience of experts and innovators.",
    icon: "audience",
  },
  {
    title: "Engage & Collaborate",
    body: "Connect with researchers, students, and industry leaders.",
    icon: "handshake",
  },
  {
    title: "Foster Innovation",
    body: "Spark discussions and collaborations that drive real-world impact.",
    icon: "globe",
  },
  {
    title: "Be Part of a Premier Event",
    body: "Contribute to an international platform driving technology for humanity.",
    icon: "star",
  },
];

export const WORKSHOP_GUIDELINES_TITLE = "Submission Guidelines";
export const WORKSHOP_GUIDELINES: string[] = [
  "Proposals must include title, abstract (300–500 words), objectives, topics, target audience, format, and expected outcomes.",
  "Indicate the type: full-day / half-day / tutorial / hands-on / panel / discussion.",
  "Proposals should demonstrate relevance to DFT²W themes and potential for knowledge sharing and impact.",
  "Accepted workshops will be promoted on the DFT²W platform and program.",
  "All proposals must be submitted online.",
];

export const WORKSHOP_GUIDELINES_LINK =
  "https://conference.seecs.edu.pk/call-for-workshops.html";

export const WORKSHOP_DEADLINE_LABEL = "Workshop Proposal Submission Deadline";
export const WORKSHOP_DEADLINE_DAY = "26";
export const WORKSHOP_DEADLINE_MONTH = "August";
export const WORKSHOP_DEADLINE_YEAR = "2026";

export const WORKSHOP_QR_SRC = "/workshops/qr-code.png";
