import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { SiteHero } from "@/components/site-hero";
import { ConferenceInfoStrip } from "@/features/conference/info-strip";
import { ConferenceSectionHeading } from "@/features/conference/section-heading";
import { DeadlineCard } from "@/features/landing/hero/deadline-card";
import { SponsorsImpactTable } from "@/features/sponsors/impact/table";
import { SponsorsPackagesTable } from "@/features/sponsors/packages-table";
import { Frame } from "@/layouts/landing/frame";
import {
  SPONSORS_CTA_BUTTON_PRIMARY,
  SPONSORS_CTA_BUTTON_SECONDARY,
  SPONSORS_CTA_CONTACT,
  SPONSORS_CTA_INQUIRY,
  SPONSORS_CTA_TAGLINE,
  SPONSORS_CTA_TITLE,
  SPONSORS_DOMAINS,
  SPONSORS_DOMAINS_TITLE,
  SPONSORS_INTRO_BODY,
  SPONSORS_INTRO_CARDS,
  SPONSORS_INTRO_LEAD,
  SPONSORS_PACKAGES_TITLE,
  SPONSORS_QR_SRC,
  SPONSORS_WHY_LEFT_CARDS,
  SPONSORS_WHY_TALL_CARDS,
  SPONSORS_WHY_TITLE,
} from "./index.constants";
import { SponsorWhyCard, SponsorsProps } from "./index.types";

const WhyPartnerCard = ({
  card,
  className = "",
}: {
  card: SponsorWhyCard;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 border border-white px-4 py-5 text-center ${className}`}
    >
      <Image
        unoptimized
        src={card.iconSrc}
        alt=""
        width={80}
        height={70}
        className="h-14 w-auto object-cover"
      />
      <div>
        <p className="m-0 text-[13px] font-bold tracking-wide uppercase sm:text-[14px]">
          {card.title}
        </p>
        <p className="mt-1.5 mb-0 text-[11px] leading-snug sm:text-[12px]">
          {card.body}
        </p>
      </div>
    </div>
  );
};
export const Sponsors = ({
  packages = "standard",
  showIntro = true,
  showCtaButton = true,
}: SponsorsProps) => {
  return (
    <article className="w-full" id="sponsors">
      <SiteHero />
      <ConferenceInfoStrip />
      <DeadlineCard />
      <Frame className="flex flex-col gap-12 py-12">
        {showIntro ? (
          <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {SPONSORS_INTRO_CARDS.map((card) => (
              <div
                key={card.id}
                className={`relative overflow-hidden rounded-tl-[50px] border border-brand-blue px-6 py-5 pl-14 ${
                  card.tone === "blue"
                    ? "bg-[#deebff]"
                    : "rounded-tl-none rounded-bl-[50px] bg-[#ccf4ff]"
                }`}
              >
                <Image
                  unoptimized
                  src={card.iconSrc}
                  alt={card.iconAlt}
                  width={38}
                  height={38}
                  className="absolute top-2 left-2 size-9 object-contain"
                />
                {card.id === "about" ? (
                  <p className="m-0 text-[14px] leading-normal text-black">
                    <span className="font-bold">{SPONSORS_INTRO_LEAD}</span>
                    {SPONSORS_INTRO_BODY}
                  </p>
                ) : (
                  <div className="text-[14px] leading-normal text-black">
                    <p className="m-0 font-bold">{card.title}</p>
                    <p className="m-0">{card.body}</p>
                  </div>
                )}
              </div>
            ))}
          </section>
        ) : null}

        <section className="flex flex-col gap-4">
          <ConferenceSectionHeading title={SPONSORS_PACKAGES_TITLE} />
          {packages === "standard" ? (
            <Link
              href="/sponsors/packages"
              className="text-[14px] font-medium text-brand-blue underline"
            >
              More package details
            </Link>
          ) : (
            <Link
              href="/sponsors"
              className="text-[14px] font-medium text-brand-blue underline"
            >
              Back to sponsorship packages
            </Link>
          )}
          {packages === "standard" ? (
            <SponsorsPackagesTable title={SPONSORS_PACKAGES_TITLE} />
          ) : (
            <SponsorsImpactTable />
          )}
        </section>
      </Frame>

      <section className="w-full bg-brand-blue py-10 text-white sm:py-12">
        <Frame>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-[auto_1fr]">
            <div className="flex items-center justify-center border border-white px-4 py-5 sm:col-span-2 lg:col-span-2 lg:min-h-16">
              <h2 className="m-0 text-center text-[20px] font-bold sm:text-[22px] lg:text-[24px]">
                {SPONSORS_WHY_TITLE}
              </h2>
            </div>

            {SPONSORS_WHY_TALL_CARDS.map((card) => (
              <WhyPartnerCard
                key={card.id}
                card={card}
                className="min-h-44 sm:min-h-48 lg:row-span-2 lg:min-h-0"
              />
            ))}

            {SPONSORS_WHY_LEFT_CARDS.map((card, index) => (
              <WhyPartnerCard
                key={card.id}
                card={card}
                className={`min-h-40 lg:min-h-0 ${
                  index === SPONSORS_WHY_LEFT_CARDS.length - 1
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }`}
              />
            ))}
          </div>
        </Frame>
      </section>

      <Frame className="flex flex-col gap-0 py-12">
        <div className="rounded-t-[10px] bg-linear-to-r from-[#0088ff] to-white px-4 py-4.5 sm:px-9">
          <p className="m-0 font-nav text-[16px] font-bold text-white uppercase sm:text-[19px]">
            {SPONSORS_DOMAINS_TITLE}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 border border-t-0 border-[#8f8fb5]/20 bg-white px-4 py-8 shadow-[3px_4px_4px_0_rgba(0,0,0,0.25)] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {SPONSORS_DOMAINS.map((domain) => (
            <div
              key={domain.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="flex size-18.25 items-center justify-center rounded-full border-2 border-[#161646]/30 bg-[#f4f7ff]">
                <Image
                  unoptimized
                  src={domain.iconSrc}
                  alt=""
                  width={48}
                  height={48}
                  className="size-11 object-contain"
                />
              </div>
              <p className="m-0 max-w-28 text-[12px] font-bold leading-tight text-[#161646]">
                {domain.label}
              </p>
            </div>
          ))}
        </div>
      </Frame>

      <section className="w-full bg-brand-blue py-10 text-white">
        <Frame>
          <div className="flex flex-col gap-6 border border-white px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <Image
                unoptimized
                src={SPONSORS_QR_SRC}
                alt="DFT²W partnership QR code"
                width={100}
                height={100}
                className="size-25 object-contain"
              />
              <div className="flex min-w-0 flex-col gap-2">
                <h2 className="m-0 text-[20px] font-bold sm:text-[24px]">
                  {SPONSORS_CTA_TITLE}
                </h2>
                <p className="m-0 text-[14px] font-bold">
                  {SPONSORS_CTA_TAGLINE}
                </p>
                <p className="m-0 text-[14px] font-bold">
                  {SPONSORS_CTA_INQUIRY}
                </p>
                <p className="m-0 break-words text-[14px]">
                  {SPONSORS_CTA_CONTACT}
                </p>
              </div>
            </div>
            {showCtaButton ? (
              <a
                href="mailto:dft2w@seecs.edu.pk"
                className="inline-flex min-h-16 w-full min-w-0 flex-col items-center justify-center rounded-[5px] bg-brand-green px-6 py-3 text-center text-white no-underline sm:w-auto sm:min-w-56"
              >
                <span className="text-[17px] font-bold">
                  {SPONSORS_CTA_BUTTON_PRIMARY}
                </span>
                <span className="text-[14px] font-light">
                  {SPONSORS_CTA_BUTTON_SECONDARY}
                </span>
              </a>
            ) : (
              <Button
                href="/sponsors"
                label="View Sponsorship Packages"
                tone="green"
                size="panel"
              />
            )}
          </div>
        </Frame>
      </section>
    </article>
  );
};
