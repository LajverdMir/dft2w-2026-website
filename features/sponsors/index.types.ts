export type SponsorIntroCard = {
  id: string;
  title?: string;
  body?: string;
  iconSrc: string;
  iconAlt: string;
  tone: "blue" | "cyan";
};

export type SponsorWhyCard = {
  id: string;
  title: string;
  body: string;
  iconSrc: string;
  placement: "left" | "tall";
};

export type SponsorDomain = {
  label: string;
  iconSrc: string;
};

export type SponsorsProps = {
  packages?: "standard" | "impact";
  showIntro?: boolean;
  showCtaButton?: boolean;
};
