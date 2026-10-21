export type WorkshopTopic = {
  label: string;
  iconSrc: string;
};

export type WorkshopReasonIcon = "audience" | "handshake" | "globe" | "star";

export type WorkshopReason = {
  title: string;
  body: string;
  icon: WorkshopReasonIcon;
};

export type PlannedWorkshop = {
  title: string;
  instructors: string;
  institution: string;
  note?: string;
  tentative?: boolean;
};
