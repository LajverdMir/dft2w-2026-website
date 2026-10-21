import { SponsorDomain, SponsorIntroCard, SponsorWhyCard } from "./index.types";

export const SPONSORS_INTRO_LEAD = "DFT²W 2026 ";
export const SPONSORS_INTRO_BODY =
  "brings together academia, industry, government, innovators and entrepreneurs to harness the convergence of transformative technologies for inclusive, sustainable and responsible prosperity.";

export const SPONSORS_INTRO_CARDS: SponsorIntroCard[] = [
  {
    id: "about",
    iconSrc: "/sponsors/icon-conference.png",
    iconAlt: "Conference",
    tone: "blue",
  },
  {
    id: "question",
    title: "OUR GUIDING QUESTION",
    body: "How can developing and emerging economies harness the convergence of transformative technologies to responsibly advance human prosperity?",
    iconSrc: "/sponsors/icon-book.png",
    iconAlt: "Guiding question",
    tone: "cyan",
  },
];

export const SPONSORS_PACKAGES_TITLE = "Sponsorship & Partnership Packages";
export const SPONSORS_PACKAGES_SRC = "/sponsors/packages-table.png";
export const SPONSORS_PACKAGES_DETAIL_SRC =
  "/sponsors/packages-table-detail.png";
export const SPONSORS_PACKAGES_ALT =
  "Sponsorship and partnership packages comparison table";

export const SPONSORS_WHY_TITLE = "Why Partner with DFT²W?";
export const SPONSORS_WHY_LEFT_CARDS: SponsorWhyCard[] = [
  {
    id: "visibility",
    title: "GLOBAL VISIBILITY",
    body: "Showcase your brand to international audiences.",
    iconSrc: "/why-partner/global-visibility.png",
    placement: "left",
  },
  {
    id: "tech",
    title: "TECHNOLOGY SHOWCASE",
    body: "Demonstrate your innovations & solutions.",
    iconSrc: "/why-partner/technology-showcase.png",
    placement: "left",
  },
];
export const SPONSORS_WHY_TALL_CARDS: SponsorWhyCard[] = [
  {
    id: "talent",
    title: "TALENT CONNECTION",
    body: "Engage with researchers, students & emerging talent.",
    iconSrc: "/why-partner/talent-connection.png",
    placement: "tall",
  },
  {
    id: "collab",
    title: "COLLABORATION OPPORTUNITIES",
    body: "Build partnerships across academia, industry & government.",
    iconSrc: "/why-partner/collaboration-opportunities.png",
    placement: "tall",
  },
  {
    id: "impact",
    title: "MEANINGFUL IMPACT",
    body: "Contribute to sustainable, inclusive & responsible prosperity.",
    iconSrc: "/why-partner/meaningful-impact.png",
    placement: "tall",
  },
];

export const SPONSORS_DOMAINS_TITLE = "Key Technology Domains";
export const SPONSORS_DOMAINS: SponsorDomain[] = [
  { label: "AI & ML", iconSrc: "/technologies/ai-ml.png" },
  { label: "Semiconductors", iconSrc: "/technologies/semi-conductors.png" },
  { label: "Quantum", iconSrc: "/technologies/quantum.png" },
  { label: "Robotics", iconSrc: "/technologies/robotics.png" },
  { label: "Cybersecurity", iconSrc: "/technologies/cyber-security.png" },
  { label: "Connectivity", iconSrc: "/technologies/connectivity.png" },
  {
    label: "Digital Infrastructure",
    iconSrc: "/technologies/digital-infrastructure.png",
  },
  { label: "Biotechnology", iconSrc: "/technologies/bio-technologies.png" },
  { label: "Green Tech", iconSrc: "/technologies/green-tech.png" },
  { label: "Digital Health", iconSrc: "/technologies/digital-health.png" },
  { label: "Smart Systems", iconSrc: "/technologies/smart-systems.png" },
  { label: "Digital Twins", iconSrc: "/technologies/digital-twins.png" },
  {
    label: "Data Science & Analytics",
    iconSrc: "/technologies/data-science.png",
  },
  {
    label: "Entrepreneurship & Innovation",
    iconSrc: "/technologies/entrepreneurship.png",
  },
];

export const SPONSORS_CTA_TITLE = "Be part of DFT²W 2026!";
export const SPONSORS_CTA_TAGLINE =
  "Let’s engineer a digital future that creates prosperity for all.";
export const SPONSORS_CTA_INQUIRY = "For Partnership inquiries:";
export const SPONSORS_CTA_CONTACT =
  "✉ dft2w@seecs.edu.pk  |  🌐 https://conferences.seecs.edu.pk";
export const SPONSORS_CTA_BUTTON_PRIMARY = "Sponsor an Experience.";
export const SPONSORS_CTA_BUTTON_SECONDARY = "Enable an Impact.";
export const SPONSORS_QR_SRC = "/sponsors/qr-code.png";
