import { AboutHero } from "@/features/about/hero";
import { SponsorsEnquiryBand } from "@/features/sponsors/enquiry-band";
import { SponsorIcon } from "@/features/sponsors/icon";
import { SponsorsImpactTable } from "@/features/sponsors/impact/table";
import { SponsorsWhyBand } from "@/features/sponsors/why-band";
import { Frame } from "@/layouts/landing/frame";
import {
  IMPACT_HERO,
  IMPACT_INTRO,
  IMPACT_PILLARS,
  IMPACT_QUOTE,
  IMPACT_SLOGAN,
  IMPACT_TITLE_LEAD,
  IMPACT_TITLE_MAIN,
} from "./index.constants";

export const SponsorsImpact = () => {
  return (
    <article className="w-full" id="impact-partnerships">
      <AboutHero
        variant="banner"
        title={`${IMPACT_TITLE_LEAD} ${IMPACT_TITLE_MAIN}`}
        src={IMPACT_HERO.src}
        alt={IMPACT_HERO.alt}
        width={IMPACT_HERO.width}
        height={IMPACT_HERO.height}
      />

      <section className="w-full bg-linear-to-r from-[#061a3d] via-[#0a2a5c] to-[#0b3a73] text-white">
        <Frame className="grid grid-cols-1 gap-7 py-8 sm:py-10 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="m-0 flex flex-col text-[26px] leading-[1.05] font-bold uppercase sm:text-[34px]">
              <span>{IMPACT_TITLE_LEAD}</span>
              <span className="text-[32px] text-brand-cyan sm:text-[42px]">{IMPACT_TITLE_MAIN}</span>
            </h2>
            <p className="m-0 flex flex-col text-[18px] leading-snug font-semibold text-brand-cyan italic sm:text-[21px]">
              {IMPACT_SLOGAN.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>

          <p className="m-0 border-l-2 border-brand-cyan/70 pl-4 text-[14px] leading-relaxed text-white/90 sm:text-[15px] lg:max-w-sm">
            {IMPACT_INTRO}
          </p>

          <ul className="m-0 grid list-none grid-cols-2 gap-px overflow-hidden rounded-[10px] bg-white/15 p-0 sm:grid-cols-4">
            {IMPACT_PILLARS.map((pillar) => (
              <li
                key={pillar.label}
                className="flex flex-col items-center gap-2 bg-[#0a2a5c] px-3 py-4 text-center lg:w-30"
              >
                <SponsorIcon name={pillar.icon} className="size-9 text-white" />
                <span className="text-[13px] leading-tight font-semibold">{pillar.label}</span>
              </li>
            ))}
          </ul>
        </Frame>
      </section>

      <Frame className="py-10 sm:py-12">
        <SponsorsImpactTable />
      </Frame>

      <SponsorsWhyBand quote={IMPACT_QUOTE} />
      <SponsorsEnquiryBand />
    </article>
  );
};
