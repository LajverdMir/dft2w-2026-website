import { ImpactPartnership, ImpactPillar } from "./index.types";

export const IMPACT_HERO = {
  src: "/sponsors/impact-hero.jpg",
  alt: "DFT²W 2026 — Technology Converging Toward Humanity. 17–18 November 2026, NUST, Islamabad, Pakistan. Bringing the World Together for a More Inclusive, Innovative and Prosperous Future.",
  width: 1024,
  height: 247,
};

export const IMPACT_TITLE_LEAD = "Impact & Experience";
export const IMPACT_TITLE_MAIN = "Partnerships";
export const IMPACT_SLOGAN = ["Sponsor an Experience.", "Enable an Impact."];
export const IMPACT_INTRO =
  "Go beyond visibility. Choose the experience, programme or outcome you want to enable — and be part of a movement that connects people, technology and opportunity.";

export const IMPACT_PILLARS: ImpactPillar[] = [
  { label: "People & Talent", icon: "users" },
  { label: "Technology & Innovation", icon: "bulb" },
  { label: "Global Connections", icon: "globe" },
  { label: "Sustainable Impact", icon: "leaf" },
];

export const IMPACT_COLUMNS = {
  partnership: "Impact / Experience Partnership",
  price: "Indicative Sponsorship",
  enables: "What You Enable",
  highlights: "Details / Highlights",
};

export const IMPACT_CUSTOM_PRICE = "Customized";

export const IMPACT_QUOTE =
  "Together, we can turn ideas into opportunities and technology into a more inclusive, prosperous future.";

export const IMPACT_PARTNERSHIPS: ImpactPartnership[] = [
  {
    id: "guests-experience",
    name: "International Guests Social & Cultural Experience",
    tagline: "Showcase Pakistan. Build Global Connections.",
    icon: "users",
    price: "Rs. 350,000",
    enables:
      "A curated experience for ~25 international guests (including the Azerbaijani delegation & distinguished speakers) — Islamabad, Murree & Bhurban, transportation, hospitality and premium souvenirs.",
    highlights: [
      "Rs. 50K transportation/coaster",
      "Rs. 50K refreshments & lunch",
      "Rs. 250K premium souvenirs (25 × Rs. 10K)",
    ],
  },
  {
    id: "student-mobility",
    name: "National Student Mobility Programme",
    tagline: "Bring Pakistan's Future to DFT²W.",
    icon: "graduation",
    price: "Rs. 150K / 300K / 750K / 1.5M / 3M",
    enables:
      "Bring talented students from universities across Pakistan to attend DFT²W, experience global learning, networks and innovation.",
    highlights: [
      "5 / 10 / 25 / 50 / 100 students",
      "Includes travel, accommodation and food (as per package)",
    ],
  },
  {
    id: "speaker-travel",
    name: "Distinguished Speaker Travel Partner (Economy)",
    tagline: "Bring Global Leaders to Pakistan.",
    icon: "plane",
    price: "Rs. 500,000",
    enables: "Support international economy travel for one distinguished speaker.",
    highlights: ["Economy class (per ticket)", "Global destinations"],
  },
  {
    id: "premium-speaker-travel",
    name: "Premium Distinguished Speaker Travel Partner",
    tagline: "More Comfort. Greater Impact.",
    icon: "plane",
    price: "Rs. 1,500,000",
    enables:
      "Support international business-class travel for one distinguished speaker.",
    highlights: ["Business class (per ticket)", "Global destinations"],
  },
  {
    id: "speaker-travel-fund",
    name: "International Speaker Travel Fund",
    tagline: "Global Ideas. Local Impact.",
    icon: "globe",
    price: "Rs. 4M",
    enables: "Support travel for up to 8 international distinguished speakers.",
    highlights: ["Economy class (indicative)", "Global destinations"],
  },
  {
    id: "speaker-accommodation",
    name: "Distinguished Speaker Accommodation Partner",
    tagline: "Comfort for Global Minds.",
    icon: "bed",
    price: "Rs. 80,000",
    enables: "Provide 4 nights' accommodation for one distinguished speaker.",
    highlights: ["NUST accommodation basis"],
  },
  {
    id: "premium-speaker-accommodation",
    name: "Premium Distinguished Speaker Accommodation Partner",
    tagline: "Premium Comfort. Greater Engagement.",
    icon: "building",
    price: "Rs. 220,000",
    enables:
      "Provide 4 nights' premium hotel accommodation for one distinguished speaker.",
    highlights: ["Premium hotel basis"],
  },
  {
    id: "tech-expo",
    name: "Power the DFT²W Tech Expo",
    tagline: "Showcase Innovation. Create Opportunity.",
    icon: "store",
    price: "Rs. 750K+",
    enables:
      "Enable technology demonstrations, exhibition infrastructure and innovation showcases.",
    highlights: [
      "Expo space & infrastructure",
      "Product demos & showcases",
      "Premium visibility",
    ],
  },
  {
    id: "best-paper",
    name: "Best Paper Award Partner",
    tagline: "Recognize Excellence. Inspire Progress.",
    icon: "trophy",
    price: "Rs. 100,000",
    enables: "Support recognition of outstanding student research.",
    highlights: ["Award, certificate & trophy", "Programme recognition"],
  },
  {
    id: "best-paper-runner-up",
    name: "Best Paper Runner-Up Partner",
    tagline: "Celebrate Potential. Encourage Tomorrow.",
    icon: "award",
    price: "Rs. 50,000",
    enables: "Support recognition of the runner-up in the best paper category.",
    highlights: ["Award, certificate & trophy", "Programme recognition"],
  },
  {
    id: "3mt-winner",
    name: "3-Minute Thesis & Innovation Challenge Winner Partner",
    tagline: "Big Ideas. In Just 3 Minutes.",
    icon: "bulb",
    price: "Rs. 100,000",
    enables: "Support the winner of the DFT²W 3MT & Innovation Challenge.",
    highlights: ["Award & certificate", "Programme recognition"],
  },
  {
    id: "3mt-runner-up",
    name: "3MT & Innovation Challenge Runner-Up Partner",
    tagline: "Recognize Emerging Talent.",
    icon: "user-star",
    price: "Rs. 50,000",
    enables:
      "Support recognition of the runner-up in the 3MT & Innovation Challenge.",
    highlights: ["Award & certificate", "Programme recognition"],
  },
  {
    id: "guests-dinner",
    name: "Distinguished Guests' Dinner Partner",
    tagline: "Connect. Collaborate. Build the Future.",
    icon: "dinner",
    price: "Rs. 250,000",
    enables:
      "Host an intimate dinner for international guests, distinguished speakers, NUST leadership and organizers.",
    highlights: ["~53 guests (indicative)", "Branding & recognition"],
  },
  {
    id: "domain",
    name: "Technology Domain Partner",
    tagline: "Focus on What's Next.",
    icon: "gear",
    price: "Rs. 250K+",
    enables:
      "Support a specific domain — AI, semiconductors, quantum, cybersecurity, robotics, blockchain, biotech, green technology, etc.",
    highlights: ["Domain association", "Expert engagement"],
  },
  {
    id: "workshop",
    name: "Workshop / Knowledge Partner",
    tagline: "Share Knowledge. Build Capacity.",
    icon: "presentation",
    price: "Rs. 250K+",
    enables: "Support a specialized workshop or knowledge stream.",
    highlights: ["Workshop branding", "Expert participation"],
  },
  {
    id: "startup-youth",
    name: "Startup & Youth Innovation Partner",
    tagline: "Fuel Ideas. Build the Future.",
    icon: "rocket",
    price: "Rs. 500K+",
    enables:
      "Support startup showcases, student innovators and entrepreneurial engagement.",
    highlights: ["Startup showcase", "Youth engagement"],
  },
  {
    id: "women-in-tech",
    name: "Women in Technology Partner",
    tagline: "More Women. More Innovation.",
    icon: "user",
    price: "Rs. 500K+",
    enables:
      "Support participation, visibility and leadership opportunities for women in technology.",
    highlights: ["Mentorship & networking", "Visibility & leadership"],
  },
  {
    id: "industry-roundtable",
    name: "Industry Roundtable Partner",
    tagline: "Better Dialogue. Stronger Ecosystems.",
    icon: "roundtable",
    price: "Rs. 500K+",
    enables: "Enable focused industry–academia–policy dialogue.",
    highlights: ["Curated roundtable", "Recognition"],
  },
  {
    id: "bespoke",
    name: "Bespoke Impact Partnership",
    tagline: "Your Goals. Our Platform.",
    icon: "star",
    price: null,
    enables:
      "Create a programme aligned with your CSR, ESG, talent or innovation priorities.",
    highlights: ["Tailored programme", "Measurable impact"],
  },
];
