import { Speaker } from "./index.types";

export const SPEAKERS_SECTION_TITLE = "Conference Speakers";
export const SPEAKERS_HINT =
  "Hover over a speaker or tap the arrow to read their bio.";

const SHAHZAD_BIO: string[] = [
  "Professor Muhammad Wakil Shahzad is a globally recognised academic, engineer, and innovator with over 15 years of impactful contributions across academia, industry, and government. He currently serves as Professor and Chair in Advanced Energy and Sustainability at Northumbria University, UK, and is internationally recognised for advancing sustainable solutions in water, cooling and heating, hydrogen, and industrial decarbonisation. He has held prestigious research and academic appointments at leading global institutions, including the National University of Singapore (NUS) and King Abdullah University of Science and Technology (KAUST), Saudi Arabia, where he contributed to pioneering research in energy and environmental technologies.",
  "At Northumbria University, Professor Shahzad leads major interdisciplinary research programmes focused on sustainable energy systems and industrial decarbonisation, supported by leading funders including UKRI, EPSRC, Royal Society, and Innovate UK. He is a recipient of the prestigious Royal Academy of Engineering Research and Industrial Fellowship, recognising his leadership in translating research into industrial impact. He was also selected for the Royal Society's Parliament Pairing Scheme, working with policymakers at the UK Department for Energy Security and Net Zero (DESNZ).",
];

const GHANI_BIO: string[] = [
  "Dr. Tahir Ghani is Senior Fellow and Director of Process Pathfinding in Intel’s Technology Development Group. He is an IEEE Fellow and a Member of the U.S. National Academy of Engineering (NAE). His career has shaped successive generations of transistor technology that underpin modern computing and AI hardware.",
  "At DFT²W 2026, Dr. Ghani will deliver a plenary keynote on transistor scaling, semiconductor innovation, and the hardware foundation of the AI revolution.",
];

const LUKOWICZ_BIO: string[] = [
  "Prof. Dr. Paul Lukowicz is Scientific Director and Head of the Embedded Intelligence Research Department at the German Research Center for Artificial Intelligence (DFKI). His research focuses on embedded AI, wearable and ubiquitous sensing, edge intelligence, and autonomous systems.",
  "At DFT²W 2026, Prof. Lukowicz will deliver a plenary keynote on embedded AI, edge intelligence, and autonomous systems for developing economies.",
];

export const SPEAKERS: Speaker[] = [
  {
    id: "shahzad",
    name: "Prof Dr Muhammad Wakil Shahzad",
    role: "Northumbria University, Newcastle",
    imageSrc: "/landing/speakers/shahzad.png",
    bio: SHAHZAD_BIO,
  },
  {
    id: "ghani",
    name: "Dr. Tahir Ghani",
    role: "Senior Fellow\nIntel Corporation\nOregon, United States",
    imageSrc: "/landing/speakers/ghani.png",
    bio: GHANI_BIO,
  },
  {
    id: "lukowicz",
    name: "Prof Dr Paul Lukowicz",
    role: "Head of the Embedded Intelligence Research Unit, DFKI",
    imageSrc: "/landing/speakers/lukowicz.png",
    bio: LUKOWICZ_BIO,
  },
];
