import Image from "next/image";
import { ReactNode } from "react";
import { AboutHero } from "@/features/about/hero";
import { SponsorsEnquiryBand } from "@/features/sponsors/enquiry-band";
import { SponsorIcon } from "@/features/sponsors/icon";
import { SponsorsWhyBand } from "@/features/sponsors/why-band";
import { Frame } from "@/layouts/landing/frame";
import {
  SPONSORSHIP_PACKAGES,
  SPONSORSHIPS_COLUMNS,
  SPONSORSHIPS_DOMAINS,
  SPONSORSHIPS_DOMAINS_TITLE,
  SPONSORSHIPS_FOOTNOTE,
  SPONSORSHIPS_HERO,
  SPONSORSHIPS_INTRO,
  SPONSORSHIPS_QUESTION,
  SPONSORSHIPS_QUESTION_TITLE,
  SPONSORSHIPS_SPEAKER_SUFFIX,
  SPONSORSHIPS_TITLE,
} from "./index.constants";

// Desktop: one table row per package. Mobile: each row becomes a stacked card.
const TABLE_COLUMNS =
  "lg:grid-cols-[minmax(0,2.3fr)_minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,1.05fr)_minmax(0,1.6fr)_minmax(0,2.2fr)]";

const Cell = ({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      role="cell"
      className={`flex min-w-0 flex-col justify-center gap-1 px-4 py-3 lg:items-center lg:border-l lg:border-white/15 lg:px-3 lg:py-4 lg:text-center ${className}`}
    >
      <span className="text-[10.5px] font-semibold tracking-wide text-white/65 uppercase lg:hidden">
        {label}
      </span>
      {children}
    </div>
  );
};

export const Sponsorships = () => {
  return (
    <article className="w-full" id="sponsorships">
      <AboutHero
        variant="banner"
        title={SPONSORSHIPS_TITLE}
        src={SPONSORSHIPS_HERO.src}
        alt={SPONSORSHIPS_HERO.alt}
        width={SPONSORSHIPS_HERO.width}
        height={SPONSORSHIPS_HERO.height}
      />

      <section className="w-full border-t border-white/10 bg-[#0a1838] text-white">
        <Frame className="grid grid-cols-1 gap-6 py-7 sm:py-8 md:grid-cols-2 md:gap-0">
          <div className="flex items-start gap-4 md:pr-8">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-brand-cyan text-brand-cyan">
              <SponsorIcon name="users" className="size-7" />
            </span>
            <p className="m-0 text-[14px] leading-relaxed text-white/90 sm:text-[15px]">
              {SPONSORSHIPS_INTRO}
            </p>
          </div>
          <div className="flex items-start gap-4 border-t border-white/20 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <h2 className="m-0 text-[16px] font-bold tracking-wide text-brand-yellow uppercase sm:text-[18px]">
                {SPONSORSHIPS_QUESTION_TITLE}
              </h2>
              <p className="m-0 text-[14px] leading-relaxed text-white/90 sm:text-[15px]">
                {SPONSORSHIPS_QUESTION}
              </p>
            </div>
            <SponsorIcon name="question" className="hidden size-14 text-white sm:block" />
          </div>
        </Frame>
      </section>

      <Frame className="flex flex-col gap-6 py-10 sm:gap-8 sm:py-12">
        <div className="flex items-center gap-3 sm:gap-5">
          <span className="h-0.5 min-w-4 flex-1 bg-navy" />
          <h2 className="m-0 text-center text-[20px] leading-tight font-bold text-navy uppercase sm:text-[28px] lg:text-[32px]">
            {SPONSORSHIPS_TITLE}
          </h2>
          <span className="h-0.5 min-w-4 flex-1 bg-navy" />
        </div>

        <div
          role="table"
          aria-label={SPONSORSHIPS_TITLE}
          className="flex flex-col gap-4 lg:gap-0 lg:overflow-hidden lg:rounded-[10px] lg:shadow-[0_8px_24px_rgba(1,17,43,0.18)]"
        >
          <div
            role="row"
            className={`hidden bg-navy text-[12px] leading-tight font-bold text-white uppercase lg:grid ${TABLE_COLUMNS}`}
          >
            {Object.values(SPONSORSHIPS_COLUMNS).map((column, index) => (
              <div
                key={column}
                role="columnheader"
                className={`flex items-center px-3 py-3.5 ${
                  index === 0 ? "pl-5" : "justify-center border-l border-white/15 text-center"
                }`}
              >
                {column}
              </div>
            ))}
          </div>

          {SPONSORSHIP_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              role="row"
              className={`grid grid-cols-2 overflow-hidden sm:grid-cols-3 rounded-[10px] text-white shadow-[0_4px_14px_rgba(1,17,43,0.18)] lg:rounded-none lg:border-t lg:border-white/15 lg:shadow-none ${TABLE_COLUMNS} ${pkg.rowClass}`}
            >
              <div
                role="rowheader"
                className="col-span-2 flex items-center gap-3 border-b border-white/15 px-4 py-4 sm:col-span-3 lg:col-span-1 lg:border-b-0 lg:pl-5"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-white/90">
                  <SponsorIcon name={pkg.icon} className="size-6" />
                </span>
                <div className="flex min-w-0 flex-col">
                  <span className="text-[15px] leading-tight font-bold uppercase sm:text-[16px] lg:text-[14px] xl:text-[15px]">
                    {pkg.name}
                  </span>
                  {pkg.note ? (
                    <span className="mt-0.5 text-[12px] text-white/80">{pkg.note}</span>
                  ) : null}
                </div>
              </div>

              <Cell label={SPONSORSHIPS_COLUMNS.pkr}>
                <span className="text-[15px] font-semibold sm:text-[16px] lg:text-[15px]">
                  {pkg.pkr}
                </span>
              </Cell>
              <Cell label={SPONSORSHIPS_COLUMNS.usd} className="border-l border-white/15">
                <span className="text-[15px] font-semibold sm:text-[16px] lg:text-[15px]">
                  {pkg.usd}
                </span>
              </Cell>
              <Cell
                label={SPONSORSHIPS_COLUMNS.registrations}
                className="col-span-2 border-t border-white/15 sm:col-span-1 sm:border-t-0 sm:border-l"
              >
                <span className="text-[15px] font-semibold sm:text-[16px] lg:text-[15px]">
                  {pkg.registrations}
                </span>
              </Cell>

              <Cell
                label={SPONSORSHIPS_COLUMNS.speaker}
                className={`col-span-2 border-t border-white/15 sm:col-span-3 lg:col-span-1 lg:border-t-0 ${
                  pkg.speakerReps ? "" : "hidden lg:flex"
                }`}
              >
                {pkg.speakerReps ? (
                  <p className="m-0 text-[13px] leading-snug text-white/90">
                    <strong className="font-semibold text-white">{pkg.speakerReps}</strong>{" "}
                    {SPONSORSHIPS_SPEAKER_SUFFIX}
                  </p>
                ) : (
                  <span className="text-[15px]">—</span>
                )}
              </Cell>

              <Cell
                label={SPONSORSHIPS_COLUMNS.opportunity}
                className="col-span-2 border-t border-white/15 pb-4 sm:col-span-3 lg:col-span-1 lg:border-t-0 lg:pb-4"
              >
                <p
                  className={`m-0 text-[15px] leading-snug font-bold ${
                    pkg.id === "gold" ? "text-[#fff1b8]" : "text-brand-yellow"
                  }`}
                >
                  {pkg.opportunityTitle}
                </p>
                {pkg.opportunityBody ? (
                  <p className="m-0 text-[13px] leading-snug text-white/90">
                    {pkg.opportunityBody}
                  </p>
                ) : null}
              </Cell>
            </div>
          ))}
        </div>

        <p className="m-0 text-[12px] leading-relaxed text-black/65 sm:text-[13px]">
          {SPONSORSHIPS_FOOTNOTE}
        </p>
      </Frame>

      <Frame className="pb-10 sm:pb-12">
        <section className="flex flex-col gap-5 rounded-[10px] border border-brand-blue/15 bg-white p-5 shadow-[0_6px_20px_rgba(1,17,43,0.08)] sm:p-7">
          <h2 className="m-0 text-center text-[20px] font-bold text-[#d97800] uppercase sm:text-[24px]">
            {SPONSORSHIPS_DOMAINS_TITLE}
          </h2>
          <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 min-[420px]:grid-cols-3 md:grid-cols-5">
            {SPONSORSHIPS_DOMAINS.map((domain) => (
              <li
                key={domain.label}
                className="flex flex-col items-center gap-2 rounded-lg bg-[#f4f7ff] px-2 py-4 text-center"
              >
                <Image
                  unoptimized
                  src={domain.iconSrc}
                  alt=""
                  width={48}
                  height={48}
                  className="size-10 object-contain"
                />
                <span className="text-[12px] leading-tight font-semibold text-[#161646] sm:text-[13px]">
                  {domain.label}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </Frame>

      <SponsorsWhyBand />
      <SponsorsEnquiryBand />
    </article>
  );
};
