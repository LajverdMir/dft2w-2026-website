import { SponsorIconName } from "@/features/sponsors/icon/index.types";

export type ImpactPartnership = {
  id: string;
  name: string;
  tagline: string;
  icon: SponsorIconName;
  // null = "Customized"
  price: string | null;
  enables: string;
  highlights: string[];
};

export type ImpactPillar = {
  label: string;
  icon: SponsorIconName;
};
