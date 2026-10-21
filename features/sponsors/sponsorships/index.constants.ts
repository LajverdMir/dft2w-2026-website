import { SponsorshipDomain, SponsorshipPackage } from "./index.types";

export const SPONSORSHIPS_TITLE = "Sponsorship & Partnership Packages";

export const SPONSORSHIPS_HERO = {
  src: "/sponsors/sponsorships-hero.jpg",
  alt: "DFT²W 2026 — Technology Converging Toward Humanity. 17–18 November 2026, NUST, Islamabad, Pakistan. Engineering the Digital Future for Developing and Emerging Economies.",
  width: 1054,
  height: 294,
};

export const SPONSORSHIPS_INTRO =
  "DFT²W 2026 brings together academia, industry, government, innovators and entrepreneurs to harness the convergence of transformative technologies for inclusive, sustainable and responsible prosperity.";
export const SPONSORSHIPS_QUESTION_TITLE = "Our Guiding Question";
export const SPONSORSHIPS_QUESTION =
  "How can developing and emerging economies harness the convergence of transformative technologies to responsibly advance human prosperity?";

export const SPONSORSHIPS_COLUMNS = {
  package: "Package",
  pkr: "PKR Contribution",
  usd: "USD Contribution",
  registrations: "Complimentary Registrations",
  speaker: "Distinguished-Speaker Engagement*",
  opportunity: "Primary Opportunity",
};

export const SPONSORSHIPS_SPEAKER_SUFFIX =
  "may participate in curated, focused interactions with selected distinguished speakers";

export const SPONSORSHIPS_FOOTNOTE =
  "* Opportunity for designated representatives to participate in curated interactions with selected plenary speakers and distinguished guests, subject to speaker availability, programme schedule and mutual agreement.";

export const SPONSORSHIP_PACKAGES: SponsorshipPackage[] = [
  {
    id: "founding",
    name: "Founding Strategic Partner / DFT²W Vision Partner",
    icon: "handshake",
    pkr: "Rs. 5,000,000",
    usd: "$20,000",
    registrations: "30",
    speakerReps: "Up to 5 representatives",
    opportunityTitle: "Shape the DFT²W platform",
    opportunityBody:
      "Founding recognition, premium branding, strategic engagement, premium exhibition, technology showcase, industry participation",
    rowClass: "bg-[#0b1d45]",
  },
  {
    id: "title",
    name: "Conference Title Sponsor",
    note: "(ICoDT² or ICDI² AI&ML)",
    icon: "award",
    pkr: "Rs. 3,000,000",
    usd: "$15,000",
    registrations: "25",
    speakerReps: "Up to 4 representatives",
    opportunityTitle: "Associate with ICoDT² or ICDI² AI&ML",
    opportunityBody:
      "Association with one flagship conference, prominent conference branding, premium exhibition, industry presentation/technology showcase",
    rowClass: "bg-[#12398a]",
  },
  {
    id: "tech-expo",
    name: "Tech Expo Partner",
    icon: "store",
    pkr: "Rs. 750,000",
    usd: "$2,750",
    registrations: "12",
    speakerReps: "Up to 1 representative",
    opportunityTitle: "Technology demonstration & showcase",
    opportunityBody:
      "Premium exhibition presence, technology/product showcase, prominent Tech Expo branding",
    rowClass: "bg-[#0d6a79]",
  },
  {
    id: "platinum",
    name: "Platinum Partner",
    icon: "star",
    pkr: "Rs. 1,500,000",
    usd: "$5,500",
    registrations: "20",
    speakerReps: "Up to 3 representatives",
    opportunityTitle: "Premium visibility & engagement",
    opportunityBody:
      "Exhibition, prominent branding, industry presentation/technology showcase",
    rowClass: "bg-[#4a2c82]",
  },
  {
    id: "gold",
    name: "Gold Sponsor",
    icon: "medal",
    pkr: "Rs. 1,000,000",
    usd: "$3,500",
    registrations: "15",
    speakerReps: "Up to 2 representatives",
    opportunityTitle: "Brand visibility & community engagement",
    opportunityBody: "Exhibition, branding",
    rowClass: "bg-[#9a6d05]",
  },
  {
    id: "silver",
    name: "Silver Sponsor",
    icon: "shield",
    pkr: "Rs. 500,000",
    usd: "$2,000",
    registrations: "10",
    speakerReps: null,
    opportunityTitle: "Exhibition & event visibility",
    rowClass: "bg-[#5b5f66]",
  },
  {
    id: "bronze-domain",
    name: "Bronze / Domain Partner",
    icon: "network",
    pkr: "Rs. 250,000",
    usd: "$1,000",
    registrations: "5",
    speakerReps: null,
    opportunityTitle: "Support a technology domain",
    opportunityBody:
      "Domain association, branding, expert participation, technology showcase and tailored engagement",
    rowClass: "bg-[#36731c]",
  },
  {
    id: "bronze-workshop",
    name: "Bronze / Workshop Partner",
    icon: "presentation",
    pkr: "Rs. 250,000",
    usd: "$1,000",
    registrations: "5",
    speakerReps: null,
    opportunityTitle: "Support a workshop / knowledge stream",
    opportunityBody:
      "Workshop branding, expert participation, technology engagement and tailored visibility",
    rowClass: "bg-[#b04c14]",
  },
  {
    id: "bespoke",
    name: "Bespoke Partnership",
    icon: "gear",
    pkr: "Customized",
    usd: "Customized",
    registrations: "Customized",
    speakerReps: null,
    opportunityTitle: "Tailored strategic engagement",
    rowClass: "bg-[#0b1d45]",
  },
];

export const SPONSORSHIPS_DOMAINS_TITLE = "Key Technology Domains";
export const SPONSORSHIPS_DOMAINS: SponsorshipDomain[] = [
  { label: "AI & ML", iconSrc: "/technologies/ai-ml.png" },
  { label: "Semiconductors", iconSrc: "/technologies/semi-conductors.png" },
  { label: "Quantum", iconSrc: "/technologies/quantum.png" },
  { label: "Robotics", iconSrc: "/technologies/robotics.png" },
  { label: "Cybersecurity", iconSrc: "/technologies/cyber-security.png" },
  { label: "Blockchain & Digital Assets", iconSrc: "/technologies/blockchain.svg" },
  { label: "Connectivity", iconSrc: "/technologies/connectivity.png" },
  {
    label: "Digital Infrastructure",
    iconSrc: "/technologies/digital-infrastructure.png",
  },
  { label: "Biotechnology", iconSrc: "/technologies/bio-technologies.png" },
  { label: "Green Tech", iconSrc: "/technologies/green-tech.png" },
  { label: "Digital Health", iconSrc: "/technologies/digital-health.png" },
  { label: "Smart Systems", iconSrc: "/technologies/smart-systems.png" },
  {
    label: "Data Science & Analytics",
    iconSrc: "/technologies/data-science.png",
  },
  { label: "Digital Twins", iconSrc: "/technologies/digital-twins.png" },
  {
    label: "Entrepreneurship & Innovation",
    iconSrc: "/technologies/entrepreneurship.png",
  },
];
