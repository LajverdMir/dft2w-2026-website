import { AboutTextSectionData } from "@/features/about/text-section/index.types";

export const ISLAMABAD_HERO = {
  src: "/about/islamabad.jpg",
  alt: "Faisal Mosque at the foot of the Margalla Hills, Islamabad",
  width: 540,
  height: 360,
};

export const ISLAMABAD_HERO_EYEBROW = "Venue";
export const ISLAMABAD_HERO_TITLE = "Islamabad at a Glance";

export const ISLAMABAD_INTRO_TITLE = "The Capital of Pakistan";
export const ISLAMABAD_INTRO: string[] = [
  "Islamabad is the capital city of Pakistan. It is the country's tenth-most populous city with a population of over 1.1 million and is federally administered by the Pakistani government as part of the Islamabad Capital Territory — with a metropolitan population of over 2.3 million.",
  "Built as a planned city along the Margalla Hills in the 1960s and established in 1967, Islamabad replaced Karachi as Pakistan's national capital. It is located in the northern Punjab region, north of the city of Rawalpindi — with which it forms a metropolitan area of over 5.7 million inhabitants. As of 2025, it has a Human Development Index (HDI) of 0.924, the highest in Pakistan and comparable to countries such as Malta or Japan.",
];

export const ISLAMABAD_FACTS = [
  { value: "1967", label: "Established as the national capital" },
  { value: "1.1M+", label: "City population" },
  { value: "5.7M+", label: "Islamabad–Rawalpindi metropolitan area" },
  { value: "0.924", label: "HDI (2025), highest in Pakistan" },
];

export const ISLAMABAD_SECTIONS: AboutTextSectionData[] = [
  {
    id: "toponymy",
    title: "Toponymy",
    paragraphs: [
      "The name Islamabad means 'City of Islam'. It is derived from two words: Islam and abad. The Arabic word Islam means 'submission [to God]' as it refers to the religion of Islam, Pakistan's state religion, and the Persian suffix -abad means 'cultivated place', indicating an inhabited place or city.",
      "During the course of the early modern period, the name was used in the Mughal era by the emperor Aurangzeb, who named many towns in the Indian subcontinent after it. According to a history book by Muhammad Ismail Zabeeh, teacher and poet Qazi Abdur Rehman Amritsari proposed the name of the city.",
    ],
  },
  {
    id: "cosmopolitan",
    title: "A Cosmopolitan Capital",
    paragraphs: [
      "Islamabad has attracted people from all over Pakistan, making it one of the most cosmopolitan and urbanized cities in the country. As the capital city it has hosted numerous important meetings, such as the South Asian Association for Regional Cooperation summit in 2004.",
    ],
  },
  {
    id: "recent-history",
    title: "Recent History",
    paragraphs: [
      "The construction of the Rawalpindi-Islamabad Metrobus, the region's first mass transit line, began in February 2014 and was completed in March 2015. The Rawalpindi Development Authority built the project at a cost of approximately Rs. 24 billion, which was shared by both the federal government and the provincial government of Punjab.",
    ],
  },
];

export const ISLAMABAD_VENUE_TITLE = "Conference Venue";
export const ISLAMABAD_VENUE_NAME =
  "NUST School of Electrical Engineering & Computer Science (SEECS)";
export const ISLAMABAD_VENUE_ADDRESS = "H-12 Campus, NUST, Islamabad, Pakistan";
export const ISLAMABAD_VENUE_CTA = "Open in Google Maps";

export const ISLAMABAD_SOURCE_LABEL =
  "Text adapted from Wikipedia, “Islamabad”, licensed under CC BY-SA 4.0";
export const ISLAMABAD_SOURCE_HREF = "https://en.wikipedia.org/wiki/Islamabad";
