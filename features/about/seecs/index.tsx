import { AboutHero } from "@/features/about/hero";
import { ConferenceInfoStrip } from "@/features/conference/info-strip";
import { ConferenceSectionHeading } from "@/features/conference/section-heading";
import { DeadlineCard } from "@/features/landing/hero/deadline-card";
import { Frame } from "@/layouts/landing/frame";
import {
  SEECS_ABOUT_BODY,
  SEECS_ABOUT_TITLE,
  SEECS_HERO,
  SEECS_HERO_EYEBROW,
  SEECS_HERO_TITLE,
  SEECS_HISTORY,
  SEECS_HISTORY_FACTS,
  SEECS_HISTORY_TITLE,
  SEECS_PRINCIPAL_MESSAGE,
  SEECS_PRINCIPAL_NAME,
  SEECS_PRINCIPAL_ROLE,
  SEECS_PRINCIPAL_TITLE,
  SEECS_SOURCE_HREF,
  SEECS_SOURCE_LABEL,
  SEECS_STATEMENTS,
  SEECS_VISION_MISSION_TITLE,
} from "./index.constants";

export const AboutSeecs = () => {
  return (
    <article className="w-full" id="seecs">
      <AboutHero
        variant="cover"
        eyebrow={SEECS_HERO_EYEBROW}
        title={SEECS_HERO_TITLE}
        src={SEECS_HERO.src}
        alt={SEECS_HERO.alt}
        width={SEECS_HERO.width}
        height={SEECS_HERO.height}
      />
      <ConferenceInfoStrip />
      <DeadlineCard />

      <Frame className="flex flex-col gap-12 py-10 sm:gap-14 sm:py-12">
        <section className="flex flex-col gap-4 sm:gap-5">
          <ConferenceSectionHeading title={SEECS_ABOUT_TITLE} />
          <p className="m-0 max-w-5xl text-[14px] leading-relaxed text-black sm:text-[16px] lg:text-[18px]">
            {SEECS_ABOUT_BODY}
          </p>
        </section>

        <section
          className="flex flex-col gap-4 rounded-[5px] bg-navy px-5 py-6 text-white sm:px-8 sm:py-8"
          id="principal"
        >
          <h2 className="m-0 text-[18px] font-bold uppercase sm:text-[22px]">
            {SEECS_PRINCIPAL_TITLE}
          </h2>
          <div className="flex max-w-5xl flex-col gap-3 text-[14px] leading-relaxed sm:text-[16px]">
            {SEECS_PRINCIPAL_MESSAGE.map((paragraph) => (
              <p key={paragraph} className="m-0">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-2 border-t border-white/20 pt-4">
            <p className="m-0 text-[16px] font-bold text-brand-yellow sm:text-[18px]">
              {SEECS_PRINCIPAL_NAME}
            </p>
            <p className="mt-1 mb-0 text-[13px] text-white/80 sm:text-[14px]">
              {SEECS_PRINCIPAL_ROLE}
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4 sm:gap-5" id="history">
          <ConferenceSectionHeading title={SEECS_HISTORY_TITLE} />
          <div className="flex max-w-5xl flex-col gap-3 text-[14px] leading-relaxed text-black sm:text-[16px]">
            {SEECS_HISTORY.map((paragraph) => (
              <p key={paragraph} className="m-0">
                {paragraph}
              </p>
            ))}
          </div>
          <dl className="m-0 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {SEECS_HISTORY_FACTS.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col justify-center rounded-[5px] bg-brand-blue px-4 py-4 text-white"
              >
                <dt className="m-0 text-[24px] leading-tight font-bold sm:text-[28px]">
                  {fact.value}
                </dt>
                <dd className="mt-1 mb-0 text-[13px] leading-snug sm:text-[14px]">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="flex flex-col gap-4 sm:gap-5" id="vision-mission">
          <ConferenceSectionHeading title={SEECS_VISION_MISSION_TITLE} />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {SEECS_STATEMENTS.map((statement) => (
              <div
                key={statement.id}
                className="flex flex-col overflow-hidden rounded-[5px] border border-brand-blue/20"
              >
                <h3 className="m-0 bg-brand-blue px-4 py-3 text-[16px] font-bold tracking-wide text-white uppercase sm:px-5 sm:text-[18px]">
                  {statement.heading}
                </h3>
                <div className="flex flex-1 flex-col gap-4 bg-white px-4 py-4 sm:px-5 sm:py-5">
                  <div>
                    <p className="m-0 text-[12px] font-bold tracking-wide text-brand-blue uppercase">
                      Vision
                    </p>
                    <p className="mt-1 mb-0 text-[14px] leading-relaxed text-black sm:text-[15px]">
                      {statement.vision}
                    </p>
                  </div>
                  <div>
                    <p className="m-0 text-[12px] font-bold tracking-wide text-brand-blue uppercase">
                      Mission
                    </p>
                    {statement.mission.length > 1 ? (
                      <ul className="mt-1 mb-0 flex list-disc flex-col gap-1.5 pl-5 text-[14px] leading-relaxed text-black sm:text-[15px]">
                        {statement.mission.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-1 mb-0 text-[14px] leading-relaxed text-black sm:text-[15px]">
                        {statement.mission[0]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            href={SEECS_SOURCE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-black/60 underline"
          >
            {SEECS_SOURCE_LABEL}
          </a>
        </section>
      </Frame>
    </article>
  );
};
