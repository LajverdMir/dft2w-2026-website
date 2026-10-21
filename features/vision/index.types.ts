export type VisionEventItem = {
  label: string;
  iconSrc: string;
};

export type VisionPillarTone = "purple" | "blue" | "teal";

export type VisionPillar = {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  tone: VisionPillarTone;
  focusAreas: string[];
  events: VisionEventItem[];
  href: string;
};

export type VisionInitiative = {
  id: string;
  label: string;
  iconSrc: string;
};
