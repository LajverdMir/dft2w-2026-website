import { CONFERENCE_INFO_ITEMS } from "@/features/conference/index.constants";
import { ConferenceInfoItem } from "@/features/conference/info-item";
import { Frame } from "@/layouts/landing/frame";

export const ConferenceInfoStrip = () => {
  return (
    <div className="w-full bg-brand-blue">
      <Frame className="grid grid-cols-1 gap-4 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:py-4">
        {CONFERENCE_INFO_ITEMS.map((item) => (
          <ConferenceInfoItem
            key={item.lines[0]}
            iconSrc={item.iconSrc}
            iconAlt={item.iconAlt}
            lines={item.lines}
          />
        ))}
      </Frame>
    </div>
  );
};
