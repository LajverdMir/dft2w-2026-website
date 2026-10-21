import { DeadlineCard } from "@/features/landing/hero/deadline-card";
import { ConferenceHero } from "@/features/conference/hero";
import { ConferenceInfoStrip } from "@/features/conference/info-strip";
import { EventShellProps } from "./index.types";

export const EventShell = ({ heroSrc, heroAlt, children }: EventShellProps) => {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <ConferenceHero heroSrc={heroSrc} heroAlt={heroAlt} />
      <ConferenceInfoStrip />
      <DeadlineCard />
      {children}
    </div>
  );
};
