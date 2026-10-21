import { ButtonTone } from "@/components/button/index.types";
import { ConferenceTrackProps } from "@/features/landing/conferences/track/index.types";

export type ConferenceCardProps = {
  href: string;
  variant: "icodt" | "icdi";
  className: string;
  logoSrc: string;
  logoAlt: string;
  description: string;
  tracks: ConferenceTrackProps[];
  ctaLabel: string;
  ctaTone: ButtonTone;
  trackTone: "icodt" | "icdi";
};
