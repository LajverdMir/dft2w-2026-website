import { Button } from "@/components/button";
import { AboutHero } from "@/features/about/hero";
import { VENUE_MAPS_HREF } from "@/features/about/index.constants";
import { AboutTextSection } from "@/features/about/text-section";
import { ConferenceInfoStrip } from "@/features/conference/info-strip";
import { ConferenceSectionHeading } from "@/features/conference/section-heading";
import { DeadlineCard } from "@/features/landing/hero/deadline-card";
import { Frame } from "@/layouts/landing/frame";
import {
  ISLAMABAD_FACTS,
  ISLAMABAD_HERO,
  ISLAMABAD_HERO_EYEBROW,
  ISLAMABAD_HERO_TITLE,
  ISLAMABAD_INTRO,
  ISLAMABAD_INTRO_TITLE,
  ISLAMABAD_SECTIONS,
  ISLAMABAD_SOURCE_HREF,
  ISLAMABAD_SOURCE_LABEL,
  ISLAMABAD_VENUE_ADDRESS,
  ISLAMABAD_VENUE_CTA,
  ISLAMABAD_VENUE_NAME,
  ISLAMABAD_VENUE_TITLE,
} from "./index.constants";

export const AboutIslamabad = () => {
  return (
    <article className="w-full" id="islamabad">
      <AboutHero
        variant="cover"
        eyebrow={ISLAMABAD_HERO_EYEBROW}
        title={ISLAMABAD_HERO_TITLE}
        src={ISLAMABAD_HERO.src}
        alt={ISLAMABAD_HERO.alt}
        width={ISLAMABAD_HERO.width}
        height={ISLAMABAD_HERO.height}
      />
      <ConferenceInfoStrip />
      <DeadlineCard />

      <Frame className="flex flex-col gap-12 py-10 sm:gap-14 sm:py-12">
        <section className="flex flex-col gap-4 sm:gap-5" id="capital">
          <ConferenceSectionHeading title={ISLAMABAD_INTRO_TITLE} />
          <div className="flex max-w-5xl flex-col gap-3 text-[14px] leading-relaxed text-black sm:text-[16px] lg:text-[18px]">
            {ISLAMABAD_INTRO.map((paragraph) => (
              <p key={paragraph} className="m-0">
                {paragraph}
              </p>
            ))}
          </div>
          <dl className="m-0 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {ISLAMABAD_FACTS.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col justify-center rounded-[5px] bg-brand-blue px-4 py-4 text-white"
              >
                <dt className="m-0 text-[24px] leading-tight font-bold sm:text-[30px]">
                  {fact.value}
                </dt>
                <dd className="mt-1 mb-0 text-[12px] leading-snug sm:text-[14px]">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {ISLAMABAD_SECTIONS.map((section) => (
          <AboutTextSection key={section.id} section={section} />
        ))}

        <section
          className="flex flex-col items-start gap-4 rounded-[5px] bg-navy px-5 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8"
          id="venue"
        >
          <div>
            <p className="m-0 text-[13px] font-bold tracking-wide text-brand-yellow uppercase">
              {ISLAMABAD_VENUE_TITLE}
            </p>
            <p className="mt-1 mb-0 text-[16px] font-bold sm:text-[18px]">
              {ISLAMABAD_VENUE_NAME}
            </p>
            <p className="mt-1 mb-0 text-[14px] text-white/80">
              {ISLAMABAD_VENUE_ADDRESS}
            </p>
          </div>
          <Button
            href={VENUE_MAPS_HREF}
            label={ISLAMABAD_VENUE_CTA}
            tone="green"
            size="panel"
            external
          />
        </section>

        <a
          href={ISLAMABAD_SOURCE_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="-mt-8 text-[12px] text-black/60 underline"
        >
          {ISLAMABAD_SOURCE_LABEL}
        </a>
      </Frame>
    </article>
  );
};
