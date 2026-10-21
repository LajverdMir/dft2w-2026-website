import { ConferenceSectionHeading } from "@/features/conference/section-heading";
import { ConferenceSubthemeCard } from "@/features/conference/subtheme-card";
import { ConferenceSubthemesProps } from "./index.types";

export const ConferenceSubthemes = ({ items }: ConferenceSubthemesProps) => {
  return (
    <section className="flex w-full flex-col gap-8">
      <ConferenceSectionHeading title="Sub themes" />
      <div className="grid grid-cols-2 justify-items-center gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <ConferenceSubthemeCard
            key={item.label}
            src={item.src}
            label={item.label}
          />
        ))}
      </div>
    </section>
  );
};
