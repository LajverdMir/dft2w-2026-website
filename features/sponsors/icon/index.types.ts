import { SPONSOR_ICON_PATHS } from "./index.constants";

export type SponsorIconName = keyof typeof SPONSOR_ICON_PATHS;

export type SponsorIconProps = {
  name: SponsorIconName;
  className?: string;
};
