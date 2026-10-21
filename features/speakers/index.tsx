import { SiteHero } from "@/components/site-hero";
import { ConferenceInfoStrip } from "@/features/conference/info-strip";
import { ConferenceSectionHeading } from "@/features/conference/section-heading";
import { DeadlineCard } from "@/features/landing/hero/deadline-card";
import { SpeakersShowcase } from "@/features/speakers/showcase";
import { Frame } from "@/layouts/landing/frame";
import { SPEAKERS_HINT, SPEAKERS_SECTION_TITLE } from "./index.constants";

export const SpeakersPage = () => {
  return (
    <article className="w-full" id="speakers">
      <SiteHero />
      <ConferenceInfoStrip />
      <DeadlineCard />
      <Frame className="flex flex-col gap-12 py-8 sm:gap-16 sm:py-12">
        <section className="flex flex-col gap-4 sm:gap-6">
          <ConferenceSectionHeading title={SPEAKERS_SECTION_TITLE} />
          <p className="m-0 text-[13px] text-black/60 sm:text-[14px]">
            {SPEAKERS_HINT}
          </p>
          <SpeakersShowcase />
        </section>
      </Frame>
    </article>
  );
};
