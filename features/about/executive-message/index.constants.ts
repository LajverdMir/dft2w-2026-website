import { AboutTextSectionData } from "@/features/about/text-section/index.types";
import { ExecutiveComponent } from "./index.types";

export const EXECUTIVE_EYEBROW = "IEEE DFT²W";
export const EXECUTIVE_TITLE = "Vision | Executive Message";
export const EXECUTIVE_THEME =
  "Engineering the Digital Future of Developing and Emerging Economies";

export const EXECUTIVE_OPENING: AboutTextSectionData[] = [
  {
    id: "context",
    title: "A Defining Technological Moment",
    paragraphs: [
      "The world is entering an era of unprecedented technological competition, driven by the accelerating global race in Artificial Intelligence (AI) and its convergence with semiconductors, robotics, biotechnology, communications, cybersecurity, advanced manufacturing, quantum technologies, and digital infrastructure. While this race is increasingly led by industry and shaped by major technology companies, its momentum continues to be fueled by relentless applied research across universities, research laboratories, start-ups, and industrial R&D ecosystems.",
      "For emerging economies such as Pakistan and Azerbaijan, the implications are profound. The strategic question is no longer whether AI and related technologies will transform their economies and societies, but whether they will remain primarily consumers of technologies developed elsewhere or build the scientific, engineering, entrepreneurial, and institutional capacity to become meaningful contributors to this transformation.",
    ],
  },
  {
    id: "nust",
    title: "Why NUST",
    paragraphs: [
      "The National University of Sciences and Technology (NUST), Pakistan, is uniquely positioned to play a leading role in this transition. Its multidisciplinary technology schools, highly qualified faculty, research centers, laboratories, entrepreneurial ecosystem, and industry linkages provide an unusually comprehensive platform for translating research into technological and economic impact.",
      "At the center of this ecosystem is the National Science & Technology Park (NSTP), Pakistan's premier university-based science and technology park and a Government of Pakistan–approved Special Technology Zone (STZ)—providing a natural interface between academia, industry, start-ups, investors and government. NUST's distinctive breadth also creates opportunities to bridge civilian, industrial and defence-oriented technology domains, encouraging responsible dual-use innovation and the transfer of advanced engineering capabilities across sectors.",
    ],
  },
  {
    id: "introducing",
    title: "Introducing DFT²W",
    paragraphs: [
      "Against this backdrop, the NUST School of Electrical Engineering and Computer Science (SEECS), in partnership with the Office of the Pro-Rector Research, Innovation & Commercialization (RIC), proposes to bring together NUST's scientific, technological, innovation and business capabilities through IEEE Digital Futures and Transformative Technologies Week (DFT²W).",
      "Developed in strategic partnership with Azerbaijan Technical University (AzTU), DFT²W is envisioned as a flagship annual platform capable of positioning NUST prominently within Pakistan's emerging AI and transformative-technology landscape. This positioning is strengthened by NUST's role in hosting major national technology initiatives, including the National Center of Artificial Intelligence (NCAI) and the National Center of Robotics and Automation (NCRA).",
    ],
  },
];

export const EXECUTIVE_BELIEF_LABEL = "Our Founding Belief";
export const EXECUTIVE_BELIEF =
  "Transformative technologies achieve their highest purpose not when they are invented, but when they responsibly transform societies.";
export const EXECUTIVE_BELIEF_BODY =
  "This philosophy is reflected in the superscript “²” of DFT²W, symbolizing the second-order impact of technology—the societal, economic, and human transformations that arise when scientific discoveries evolve into solutions that improve lives, strengthen institutions, create new industries, and expand opportunity.";

export const EXECUTIVE_QUESTION_LEAD =
  "Unlike a traditional technology conference centered on a single discipline, DFT²W is being developed around a much broader and more enduring question:";
export const EXECUTIVE_QUESTION_LABEL = "Our Guiding Question";
export const EXECUTIVE_QUESTION =
  "How can developing and emerging economies harness the convergence of transformative technologies to improve human prosperity while doing so responsibly?";
export const EXECUTIVE_THEME_LABEL = "Guided by the theme";

export const EXECUTIVE_COMPONENTS_TITLE = "Three Components, One Week";
export const EXECUTIVE_COMPONENTS_INTRO =
  "The inaugural edition of DFT²W aims to host two international IEEE conferences and will integrate three complementary components into a single high-impact international technology week:";
export const EXECUTIVE_COMPONENTS: ExecutiveComponent[] = [
  {
    id: "icdi",
    label: "IEEE Conference",
    title: "ICDI² AI&ML",
    body: "IEEE International Conference on Development & Innovations in Artificial Intelligence & Machine Learning, jointly organized with Azerbaijan.",
    tone: "purple",
  },
  {
    id: "icodt",
    label: "IEEE Conference",
    title: "ICoDT²",
    body: "IEEE International Conference on Digital & Transformative Technologies, envisioned as a NUST flagship conference.",
    tone: "blue",
  },
  {
    id: "expo",
    label: "Showcase",
    title: "AI Technologies Expo",
    body: "An industry–academia showcase for emerging technologies, research prototypes, start-ups, national initiatives and commercially relevant innovation.",
    tone: "teal",
  },
];
export const EXECUTIVE_COMPONENT_TONE_CLASS: Record<ExecutiveComponent["tone"], string> = {
  purple: "border-pillar-purple bg-pillar-purple-chip [&_.tone-text]:text-pillar-purple",
  blue: "border-pillar-blue bg-[#e6f4ff] [&_.tone-text]:text-pillar-blue",
  teal: "border-pillar-teal bg-pillar-blue-chip [&_.tone-text]:text-pillar-teal",
};
export const EXECUTIVE_COMPONENTS_CLOSE =
  "Together, these components are intended to connect the full innovation continuum—from scientific discovery and engineering research to entrepreneurship, investment, industrial deployment and societal impact.";

export const EXECUTIVE_AMBITION: AboutTextSectionData = {
  id: "ambition",
  title: "Beyond a Conference",
  paragraphs: [
    "The ambition, however, extends beyond organizing another international conference series. With the support of NUST leadership, DFT²W seeks to convene globally recognized technology pioneers, senior industry leaders, distinguished scientists, policymakers, investors and eminent international figures of Nobel Laureate stature. Their participation would elevate the Week from a conventional academic gathering into a forum where emerging scientific ideas, industrial priorities and strategic questions concerning the future of technology can be examined collectively.",
    "High-level panel discussions, technology leadership dialogues and focused industry huddles would provide opportunities not only to showcase innovation, but also to initiate collaborations, identify investment and research opportunities, and develop shared perspectives on the responsible development of AI and other transformative technologies.",
  ],
};

export const EXECUTIVE_COUNCIL_LABEL = "Proposed";
export const EXECUTIVE_COUNCIL_TITLE =
  "International Council on Digital Futures and Transformative Technologies (ICON-DFT²)";
export const EXECUTIVE_COUNCIL_BODY: string[] = [
  "These engagements are intended to provide the foundation for a proposed International Council on Digital Futures and Transformative Technologies (ICON-DFT²). Rather than allowing the intellectual momentum generated during DFT²W to conclude with the event, the Council would provide a mechanism for sustained year-round dialogue and collaboration among international technology leaders, academia, industry, government and innovation ecosystems.",
  "Discussions initiated during the Week could therefore mature into collaborative research, industry partnerships, policy dialogue, technology initiatives and subsequent DFT²W programs, progressively establishing an enduring international network centered on the responsible advancement and application of transformative technologies.",
];

export const EXECUTIVE_CLOSING: AboutTextSectionData = {
  id: "for-nust",
  title: "What DFT²W Means for NUST",
  paragraphs: [
    "For NUST, DFT²W consequently represents more than an international event. It provides a strategic opportunity to integrate and showcase its existing strengths under a visible technology-leadership platform, strengthen its partnerships with global academia and industry, attract leading researchers and technology companies, create new pathways for research commercialization and investment, and amplify the impact of national initiatives already hosted within the University.",
    "Most importantly, it offers NUST an opportunity to consolidate its role as a national convener and thought leader in AI and transformative technologies, while building an international platform through which Pakistan, Azerbaijan and other emerging economies can participate more actively in shaping the technologies—and the digital future—that will define the decades ahead.",
  ],
};
