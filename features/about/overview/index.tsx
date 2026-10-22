import { AboutHero } from "@/features/about/hero";
import { ABOUT_POSTER } from "@/features/about/index.constants";
import { ConferenceInfoStrip } from "@/features/conference/info-strip";
import { DeadlineCard } from "@/features/landing/hero/deadline-card";
import { VisionClosingSection } from "@/features/vision/closing-section";
import { VisionPillarsSection } from "@/features/vision/pillars-section";

export const AboutOverview = () => {
  return (
    <article className="w-full" id="about">
      <AboutHero
        variant="banner"
        title="About DFT²W"
        src={ABOUT_POSTER.src}
        alt={ABOUT_POSTER.alt}
        width={ABOUT_POSTER.width}
        height={ABOUT_POSTER.height}
      />
      <ConferenceInfoStrip />
      <DeadlineCard />
      <VisionPillarsSection />
      <VisionClosingSection />
    </article>
  );
};
