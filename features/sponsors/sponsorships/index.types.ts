import { SponsorIconName } from "@/features/sponsors/icon/index.types";

export type SponsorshipPackage = {
  id: string;
  name: string;
  note?: string;
  icon: SponsorIconName;
  pkr: string;
  usd: string;
  registrations: string;
  // number of representatives for distinguished-speaker engagement, or null for "—"
  speakerReps: string | null;
  opportunityTitle: string;
  opportunityBody?: string;
  // row colour taken from the poster
  rowClass: string;
};

export type SponsorshipDomain = {
  label: string;
  iconSrc: string;
};
