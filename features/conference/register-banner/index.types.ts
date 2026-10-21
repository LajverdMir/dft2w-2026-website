import { ButtonTone } from "@/components/button/index.types";
import { ConferenceDateItem } from "@/features/conference/index.types";

export type ConferenceRegisterBannerProps = {
  dates: ConferenceDateItem[];
  tone: ButtonTone;
};
