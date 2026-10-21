export type ConferenceId = "icodt" | "icdi";

export type ConferenceDateItem = {
  label: string;
  date: string;
};

export type ConferenceInfoItem = {
  iconSrc: string;
  iconAlt: string;
  lines: string[];
};

export type ConferenceSubtheme = {
  src: string;
  label: string;
};

export type ConferenceSpecialSession = {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export type ConferenceCommitteeMember = {
  role: string;
  name: string;
  affiliation: string;
};

export type ConferenceConfig = {
  id: ConferenceId;
  title: string;
  aboutTitle: string;
  aboutBody: string;
  heroSrc: string;
  heroAlt: string;
  markSrc: string;
  markAlt: string;
  subthemes: ConferenceSubtheme[];
  topics: string[];
  registerTone: "green-deep" | "blue";
  committee: ConferenceCommitteeMember[];
  specialSession?: ConferenceSpecialSession;
};

export type ConferenceProps = {
  conferenceId: ConferenceId;
};
