import {
  ConferenceCommitteeMember,
  ConferenceConfig,
  ConferenceDateItem,
  ConferenceId,
  ConferenceInfoItem,
} from "./index.types";

export const ICODT_COMMITTEE: ConferenceCommitteeMember[] = [
  {
    role: "General Chair",
    name: "Prof. Dr. Muhammad Moazam Fraz (TI)",
    affiliation: "Professor & Associate Dean, NUST SEECS",
  },
  {
    role: "General Co-Chair",
    name: "Prof. Dr. Ramiz Aliguliyev",
    affiliation: "Azerbaijan Technical University (AzTU)",
  },
  {
    role: "Conference Chair",
    name: "Dr. Wasif Tanveer Khan",
    affiliation: "Associate Professor & HoD Research, NUST SEECS",
  },
  {
    role: "Program Chair",
    name: "Dr. Hasan Tahir Butt",
    affiliation: "NUST SEECS Research Division",
  },
  {
    role: "Program Co-Chair",
    name: "Dr. Zuhair Zafar",
    affiliation: "NUST SEECS",
  },
  {
    role: "IEEE Liaison",
    name: "Dr. Nosherwan Shoaib",
    affiliation: "Senior Member & Technical Coordinator, IEEE",
  },
  {
    role: "Publication Chair",
    name: "Dr. Madiha Khalid",
    affiliation: "NUST SEECS",
  },
  {
    role: "IEEE Islamabad Program Co-Chair",
    name: "Dr. Muhammad Tariq",
    affiliation: "IEEE Islamabad Section",
  },
  {
    role: "Local Arrangements",
    name: "Mr. Usman Ghani",
    affiliation: "Administrative Coordination Unit, NUST SEECS",
  },
];

export const ICDI_COMMITTEE: ConferenceCommitteeMember[] = [
  {
    role: "Patron in Chief",
    name: "Dr. Zahid Latif",
    affiliation: "Rector NUST",
  },
  {
    role: "Patron in Chief",
    name: "Prof. Dr. Vilayat Valiyev",
    affiliation: "Rector AZTU",
  },
  {
    role: "Steering Committee Chair",
    name: "Dr. Rizwan Riaz",
    affiliation: "Pro Rector NUST RIC",
  },
  {
    role: "Steering Committee Chair",
    name: "Prof. Dr. Subhan Namazov",
    affiliation: "Azerbaijan Technical University (AzTU)",
  },
  {
    role: "Steering Committee Co-Chair",
    name: "Dr. Muhammad Ajmal Khan",
    affiliation: "NUST",
  },
  {
    role: "General Chair",
    name: "Dr. Seemab Latif (SM-IEEE)",
    affiliation: "NUST SEECS",
  },
  {
    role: "General Co-Chair",
    name: "Prof. Dr. Mehman Hasanov",
    affiliation: "Azerbaijan Technical University (AzTU)",
  },
  {
    role: "Conference Chair",
    name: "Dr. Hasan Tahir Butt (SM-IEEE)",
    affiliation: "NUST SEECS",
  },
  {
    role: "Program Chair",
    name: "Dr. Yadigar Imamverdiyev",
    affiliation: "Azerbaijan Technical University (AzTU)",
  },
  {
    role: "Program Co-Chair",
    name: "Dr. Atif Namazov",
    affiliation: "Azerbaijan Technical University (AzTU)",
  },
  {
    role: "Technical Committee Co-Chair",
    name: "Dr. Zafar Jafarov",
    affiliation: "Azerbaijan Technical University (AzTU)",
  },
  {
    role: "Technical Committee Co-Chair",
    name: "Dr. Naima Iltaf",
    affiliation: "NUST SEECS",
  },
  {
    role: "Publication Co-Chair",
    name: "Dr. Bakhtiyar Badalov",
    affiliation: "Azerbaijan Technical University (AzTU)",
  },
  {
    role: "Publication Co-Chair",
    name: "Dr. Rabia Irfan",
    affiliation: "NUST SEECS",
  },
  {
    role: "IEEE Liaison",
    name: "Dr. Nosherwan Shoaib (SM-IEEE)",
    affiliation: "IEEE",
  },
  {
    role: "Local Arrangements",
    name: "Mr. Usman Ghani",
    affiliation: "NUST SEECS",
  },
  {
    role: "Registration Co-Chair",
    name: "Dr. Rai Sajjad",
    affiliation: "NUST SEECS",
  },
  {
    role: "Registration Co-Chair",
    name: "Ms. Nargiz Ismayilova",
    affiliation: "Azerbaijan Technical University (AzTU)",
  },
  {
    role: "Publicity Co-Chair",
    name: "Dr. Gibrail Islam",
    affiliation: "NUST SEECS",
  },
  {
    role: "Publicity Co-Chair",
    name: "Mr. Safa Bagirov",
    affiliation: "Azerbaijan Technical University (AzTU)",
  },
  {
    role: "Finance and Sponsorship Chair",
    name: "Dr. Tauseef Ur Rehman",
    affiliation: "NUST SEECS",
  },
  {
    role: "Finance and Sponsorship Co-Chair",
    name: "Dr. Oktay Guliyev",
    affiliation: "Azerbaijan Technical University (AzTU)",
  },
  {
    role: "Registration Support",
    name: "Mr. Atif Jan",
    affiliation: "NUST SEECS",
  },
  {
    role: "Workshops / Seminars / Posters",
    name: "Dr. Bakhtiyar Badalov",
    affiliation: "Azerbaijan Technical University (AzTU)",
  },
  {
    role: "Workshops / Seminars / Posters",
    name: "Dr. Farkhanda Afzal",
    affiliation: "NUST SEECS",
  },
  {
    role: "IEEE Islamabad Program Co-Chair",
    name: "Dr. Atif Jillani",
    affiliation: "IEEE Islamabad Section",
  },
];

export const CONFERENCE_IDS: ConferenceId[] = ["icodt", "icdi"];

export const isConferenceId = (value: string): value is ConferenceId => {
  return CONFERENCE_IDS.includes(value as ConferenceId);
};

export const CONFERENCE_DATES: ConferenceDateItem[] = [
  { label: "Paper Submission Deadline", date: "July 31, 2026" },
  { label: "Notification of Acceptance", date: "August 31, 2026" },
  { label: "Camera-Ready Submission", date: "Sep 30, 2026" },
  { label: "Early Registration Deadline", date: "Oct 15, 2026" },
];

export const CONFERENCE_INFO_ITEMS: ConferenceInfoItem[] = [
  {
    iconSrc: "/landing/icon-calendar.png",
    iconAlt: "",
    lines: ["Nov 17 - 18, 2026"],
  },
  {
    iconSrc: "/landing/icon-location.png",
    iconAlt: "",
    lines: ["H-12, Campus, NUST,", "Islamabad, Pakistan"],
  },
  {
    iconSrc: "/conference/icon-people.png",
    iconAlt: "",
    lines: ["Researchers, Industry Leaders", "Academics, Innovators"],
  },
  {
    iconSrc: "/conference/icon-globe.png",
    iconAlt: "",
    lines: ["Building a Digital Future", "for all"],
  },
];

export const CONFERENCES: Record<ConferenceId, ConferenceConfig> = {
  icodt: {
    id: "icodt",
    title: "ICoDT²",
    aboutTitle: "About ICoDT²",
    aboutBody:
      "ICoDT² brings together researchers, engineers, industry leaders and practitioners to share cutting-edge research, innovations and applications across digital and transformative technologies that are shaping the future of societies and economies.",
    heroSrc: "/conference/icodt-hero.png",
    heroAlt:
      "ICoDT² IEEE International Conference on Digital and Transformative Technologies",
    markSrc: "/conference/icodt-mark.png",
    markAlt: "ICoDT² conference mark",
    registerTone: "green-deep",
    subthemes: [
      {
        src: "/conference/subthemes/digital-technologies.png",
        label: "Digital Technologies",
      },
      {
        src: "/conference/subthemes/smart-systems.png",
        label: "Smart Systems",
      },
      {
        src: "/conference/subthemes/ict-and-network.png",
        label: "ICT & Networks",
      },
      {
        src: "/conference/subthemes/emerging-technologies.png",
        label: "Emerging Tech",
      },
      {
        src: "/conference/subthemes/industry-applications.png",
        label: "Industry Applications",
      },
    ],
    topics: [
      "5G & Beyond Networks",
      "Internet of Things (IoT)",
      "Edge & Cloud Computing",
      "Digital Twins & Simulation",
      "Blockchain & Distributed Systems",
      "Cybersecurity & Privacy",
      "Smart Cities & Infrastructure",
      "Human-Centric Computing",
      "Green & Sustainable Technologies",
      "Digital Transformation",
      "Industry 4.0 and Beyond",
      "AIot & Intelligent Applications",
    ],
    committee: ICODT_COMMITTEE,
    specialSession: {
      eyebrow: "Special Session Track",
      title: "Sustainable Cooling & Climate Resilience",
      body: 'Explore our flagship session on "Digital Transformation for Sustainable Cooling". Addressing the intersection of AI, smart sensing, and energy efficiency to combat accelerating global thermal demands and environmental risks. This section is proudly supported by the s2cool project alongside UKRI (UK Research and Innovation) and Northumbria University.',
      ctaLabel: "Explore Special Session",
      ctaHref: "/workshops",
    },
  },
  icdi: {
    id: "icdi",
    title: "ICDI² AI&ML",
    aboutTitle: "About ICDI² AI&ML",
    aboutBody:
      "ICDI² AI&ML focuses on the latest advancements and real-world applications in Artificial Intelligence and Machine Learning, bringing together researchers, industry leaders and practitioners to drive innovation for societal impact and sustainable development.",
    heroSrc: "/conference/icdi-hero.png",
    heroAlt:
      "ICDI² AI&ML IEEE International Conference on Development and Innovations in Artificial Intelligence and Machine Learning",
    markSrc: "/conference/icdi-mark.png",
    markAlt: "ICDI² AI&ML conference mark",
    registerTone: "blue",
    committee: ICDI_COMMITTEE,
    subthemes: [
      {
        src: "/conference/subthemes/artificial-intelligence.png",
        label: "Artificial Intelligence",
      },
      {
        src: "/conference/subthemes/machine-learning.png",
        label: "Machine Learning",
      },
      { src: "/conference/subthemes/data-science.png", label: "Data Science" },
      {
        src: "/conference/subthemes/robotics-and-automation.png",
        label: "Robotics & Automation",
      },
      {
        src: "/conference/subthemes/ai-for-society.png",
        label: "AI for Society",
      },
    ],
    topics: [
      "Machine Learning Algorithms",
      "Deep Learning & Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "Data Mining & Big Data Analytics",
      "AI in Healthcare",
      "Robotics & Autonomous Systems",
      "Reinforcement Learning",
      "Generative AI",
      "Explainable AI",
      "AI Ethics & Governance",
      "AI for Sustainable Development",
    ],
  },
};

export const PUBLICATION_COPY =
  "Accepted and presented papers will be submitted for publication in IEEE Xplore and other indexed proceedings.";

export const REGISTER_HEADLINE = "BE PART OF THE TRANSFORMATION";
export const REGISTER_BODY =
  "Join us in shaping a smarter, connected and sustainable digital future.";
