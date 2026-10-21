import { VisionPillarTone } from "@/features/vision/index.types";

export type VisionPillarCardProps = {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  tone: VisionPillarTone;
  focusAreas: string[];
  events: { label: string; iconSrc: string }[];
  href: string;
  isLast?: boolean;
};
