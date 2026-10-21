import { AboutHero } from "@/features/about/hero";
import { ABOUT_POSTER } from "@/features/about/index.constants";
import { AboutTextSection } from "@/features/about/text-section";
import { ConferenceInfoStrip } from "@/features/conference/info-strip";
import { ConferenceSectionHeading } from "@/features/conference/section-heading";
import { DeadlineCard } from "@/features/landing/hero/deadline-card";
import { Frame } from "@/layouts/landing/frame";
import {
  EXECUTIVE_AMBITION,
  EXECUTIVE_BELIEF,
  EXECUTIVE_BELIEF_BODY,
  EXECUTIVE_BELIEF_LABEL,
  EXECUTIVE_CLOSING,
  EXECUTIVE_COMPONENT_TONE_CLASS,
  EXECUTIVE_COMPONENTS,
  EXECUTIVE_COMPONENTS_CLOSE,
  EXECUTIVE_COMPONENTS_INTRO,
  EXECUTIVE_COMPONENTS_TITLE,
  EXECUTIVE_COUNCIL_BODY,
  EXECUTIVE_COUNCIL_LABEL,
  EXECUTIVE_COUNCIL_TITLE,
  EXECUTIVE_EYEBROW,
  EXECUTIVE_OPENING,
  EXECUTIVE_QUESTION,
  EXECUTIVE_QUESTION_LABEL,
  EXECUTIVE_QUESTION_LEAD,
  EXECUTIVE_THEME,
  EXECUTIVE_THEME_LABEL,
  EXECUTIVE_TITLE,
} from "./index.constants";

export const ExecutiveMessage = () => {
  return (
    <article className="w-full" id="executive-message">
      <AboutHero
        variant="banner"
        title={`DFT²W ${EXECUTIVE_TITLE}`}
        src={ABOUT_POSTER.src}
        alt={ABOUT_POSTER.alt}
        width={ABOUT_POSTER.width}
        height={ABOUT_POSTER.height}
      />
      <ConferenceInfoStrip />
      <DeadlineCard />

      <Frame className="flex flex-col gap-12 py-10 sm:gap-14 sm:py-12">
        <header className="flex flex-col gap-3 rounded-t-[18px] bg-vision-navy px-5 py-7 text-white sm:rounded-t-3xl sm:px-8 sm:py-8 lg:px-10">
          <p className="m-0 text-[13px] font-semibold tracking-wide text-brand-yellow uppercase sm:text-[15px]">
            {EXECUTIVE_EYEBROW}
          </p>
          <h2 className="m-0 text-[26px] leading-tight font-bold uppercase sm:text-[34px] lg:text-[40px]">
            {EXECUTIVE_TITLE}
          </h2>
          <p className="m-0 max-w-3xl text-[15px] leading-snug font-medium italic sm:text-[18px]">
            “{EXECUTIVE_THEME}”
          </p>
        </header>

        {EXECUTIVE_OPENING.map((section) => (
          <AboutTextSection key={section.id} section={section} />
        ))}

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2" id="belief">
          <div className="flex flex-col gap-4 rounded-[5px] bg-navy px-5 py-6 text-white sm:px-8 sm:py-8">
            <p className="m-0 text-[13px] font-bold tracking-wide text-brand-yellow uppercase sm:text-[14px]">
              {EXECUTIVE_BELIEF_LABEL}
            </p>
            <blockquote className="m-0 border-l-4 border-brand-yellow pl-4 text-[18px] leading-snug font-bold italic sm:text-[22px]">
              “{EXECUTIVE_BELIEF}”
            </blockquote>
            <p className="m-0 text-[14px] leading-relaxed text-white/90 sm:text-[15px]">
              {EXECUTIVE_BELIEF_BODY}
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-bl-[50px] border border-brand-blue bg-[#ccf4ff] px-5 py-6 text-black sm:px-8 sm:py-8">
            <p className="m-0 text-[14px] leading-relaxed sm:text-[15px]">
              {EXECUTIVE_QUESTION_LEAD}
            </p>
            <p className="m-0 text-[13px] font-bold tracking-wide text-brand-blue uppercase sm:text-[14px]">
              {EXECUTIVE_QUESTION_LABEL}
            </p>
            <blockquote className="m-0 text-[18px] leading-snug font-bold text-ink sm:text-[22px]">
              “{EXECUTIVE_QUESTION}”
            </blockquote>
            <div className="mt-auto border-t border-brand-blue/30 pt-4">
              <p className="m-0 text-[12px] font-bold tracking-wide text-brand-blue uppercase">
                {EXECUTIVE_THEME_LABEL}
              </p>
              <p className="mt-1 mb-0 text-[15px] font-semibold italic sm:text-[16px]">
                “{EXECUTIVE_THEME}”
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4 sm:gap-5" id="components">
          <ConferenceSectionHeading title={EXECUTIVE_COMPONENTS_TITLE} />
          <p className="m-0 max-w-5xl text-[14px] leading-relaxed text-black sm:text-[16px]">
            {EXECUTIVE_COMPONENTS_INTRO}
          </p>
          <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3">
            {EXECUTIVE_COMPONENTS.map((component) => (
              <li
                key={component.id}
                className={`flex flex-col gap-2 rounded-[5px] border-t-4 px-4 py-5 sm:px-5 ${EXECUTIVE_COMPONENT_TONE_CLASS[component.tone]}`}
              >
                <p className="tone-text m-0 text-[12px] font-bold tracking-wide uppercase">
                  {component.label}
                </p>
                <h3 className="m-0 text-[20px] leading-tight font-bold text-ink sm:text-[22px]">
                  {component.title}
                </h3>
                <p className="m-0 text-[14px] leading-relaxed text-black">
                  {component.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="m-0 max-w-5xl text-[14px] leading-relaxed font-medium text-black sm:text-[16px]">
            {EXECUTIVE_COMPONENTS_CLOSE}
          </p>
        </section>

        <AboutTextSection section={EXECUTIVE_AMBITION} />

        <section
          className="flex flex-col gap-3 rounded-[5px] border-l-4 border-pillar-teal bg-pillar-blue-chip px-5 py-6 sm:px-8 sm:py-8"
          id="icon-dft2"
        >
          <p className="m-0 text-[12px] font-bold tracking-wide text-pillar-teal uppercase sm:text-[13px]">
            {EXECUTIVE_COUNCIL_LABEL}
          </p>
          <h3 className="m-0 text-[18px] leading-snug font-bold text-ink sm:text-[22px]">
            {EXECUTIVE_COUNCIL_TITLE}
          </h3>
          {EXECUTIVE_COUNCIL_BODY.map((paragraph) => (
            <p
              key={paragraph}
              className="m-0 max-w-5xl text-[14px] leading-relaxed text-black sm:text-[16px]"
            >
              {paragraph}
            </p>
          ))}
        </section>

        <AboutTextSection section={EXECUTIVE_CLOSING} />
      </Frame>
    </article>
  );
};
