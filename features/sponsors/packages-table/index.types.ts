import { SponsorIconName } from "@/features/sponsors/icon/index.types";

export type SponsorPackageRow = {
  id: string;
  name: string;
  note?: string;
  icon: SponsorIconName;
  pkr: string;
  usd: string;
  supports: string;
  benefits: string[];
  // row colour taken from the original packages table
  rowClass: string;
};

export type SponsorsPackagesTableProps = {
  title: string;
};
