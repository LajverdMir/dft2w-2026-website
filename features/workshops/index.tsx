import Image from "next/image";
import { Button } from "@/components/button";
import { ConferenceInfoStrip } from "@/features/conference/info-strip";
import { DeadlineCard } from "@/features/landing/hero/deadline-card";
import { WorkshopsHero } from "@/features/workshops/hero";
import { PlannedWorkshops } from "@/features/workshops/planned";
import { WorkshopReasonCard } from "@/features/workshops/reason-card";
import { WorkshopTopicChip } from "@/features/workshops/topic-chip";
import { Frame } from "@/layouts/landing/frame";
import {
  WORKSHOP_DEADLINE_DAY,
  WORKSHOP_DEADLINE_LABEL,
  WORKSHOP_DEADLINE_MONTH,
  WORKSHOP_DEADLINE_YEAR,
  WORKSHOP_GUIDELINES,
  WORKSHOP_GUIDELINES_LINK,
  WORKSHOP_GUIDELINES_TITLE,
  WORKSHOP_QR_SRC,
  WORKSHOP_REASONS,
  WORKSHOP_TOPICS,
  WORKSHOPS_INTRO_BOLD,
  WORKSHOPS_INTRO_LEAD,
  WORKSHOPS_TAGLINE,
} from "./index.constants";

export const Workshops = () => {
  return (
    <article className="w-full" id="workshops">
      <WorkshopsHero />
      <ConferenceInfoStrip />
      <DeadlineCard />

      <section className="mt-8 w-full bg-brand-blue py-12">
        <Frame className="flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WORKSHOP_REASONS.map((reason) => (
              <WorkshopReasonCard
                key={reason.title}
                title={reason.title}
                body={reason.body}
                icon={reason.icon}
              />
            ))}
          </div>
          <p className="m-0 text-center text-[16px] leading-relaxed text-white">
            {WORKSHOPS_INTRO_LEAD}
            <br />
            <span className="font-bold">{WORKSHOPS_INTRO_BOLD}</span>
            <br />
            {WORKSHOPS_TAGLINE}
          </p>
        </Frame>
      </section>

      <Frame className="flex flex-col gap-10 py-12">
        <PlannedWorkshops />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
          <section className="overflow-hidden rounded-[10px] border border-brand-blue/20">
            <div className="bg-[#0088FF] px-4 py-3 sm:px-6">
              <p className="m-0 text-[14px] font-bold text-white uppercase sm:text-[16px]">
                Topics of Interest{" "}
                <span className="font-normal normal-case">
                  (including but not limited to)
                </span>
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 bg-white p-4 sm:grid-cols-3 sm:p-6">
              {WORKSHOP_TOPICS.map((topic) => (
                <WorkshopTopicChip
                  key={topic.label}
                  label={topic.label}
                  iconSrc={topic.iconSrc}
                />
              ))}
            </div>
          </section>

          <section className="overflow-hidden rounded-[10px] border border-brand-blue/20">
            <div className="bg-[#0088FF] px-4 py-3 sm:px-6">
              <p className="m-0 text-[14px] font-bold text-white uppercase sm:text-[16px]">
                {WORKSHOP_GUIDELINES_TITLE}
              </p>
            </div>
            <div className="flex flex-col gap-4 bg-[#eaf1fb] p-4 sm:p-6">
              <ol className="m-0 flex list-decimal flex-col gap-3 pl-4 text-[13px] leading-snug text-black">
                {WORKSHOP_GUIDELINES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
              <Button
                href={WORKSHOP_GUIDELINES_LINK}
                label="Submit your Proposal"
                tone="green"
                size="panel"
                className="self-center"
              />
            </div>
          </section>
        </div>

      </Frame>

      <section className="w-full bg-brand-blue py-6 sm:py-10">
        <Frame className="flex flex-col items-stretch gap-4 sm:gap-6 lg:flex-row lg:justify-center">
          <div className="flex min-h-40.75 w-full overflow-hidden rounded-tr-[60px] border border-white font-nav text-white lg:w-74.25 lg:shrink-0">
            <p className="m-0 flex flex-1 items-center px-5 py-5 text-[18px] leading-[1.15] font-normal uppercase sm:px-6 sm:text-[22px]">
              {WORKSHOP_DEADLINE_LABEL}
            </p>
            <div className="flex w-30.5 shrink-0 flex-col items-center justify-center border-l border-white bg-brand-yellow py-2 text-center text-white">
              <span className="text-[48px] leading-none font-normal sm:text-[62px]">
                {WORKSHOP_DEADLINE_DAY}
              </span>
              <span className="text-[18px] leading-tight font-normal sm:text-[22px]">
                {WORKSHOP_DEADLINE_MONTH}
              </span>
              <span className="text-[24px] leading-tight font-normal sm:text-[31px]">
                {WORKSHOP_DEADLINE_YEAR}
              </span>
            </div>
          </div>

          <div className="flex min-h-40.75 w-full flex-col overflow-hidden rounded-bl-[60px] border border-white font-nav text-white sm:flex-row lg:max-w-164.5 lg:flex-1">
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 px-5 py-5 text-[14px] leading-tight sm:px-6 sm:text-[16px]">
              <p className="m-0">{WORKSHOPS_TAGLINE}</p>
              <p className="m-0">
                For proposal guidelines and submission details, visit:
                <br />
                <a
                  href={WORKSHOP_GUIDELINES_LINK}
                  className="break-all text-brand-yellow underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {WORKSHOP_GUIDELINES_LINK}
                </a>
              </p>
            </div>
            <div className="flex shrink-0 items-center justify-center bg-brand-yellow p-4 sm:w-42">
              <Image
                unoptimized
                src={WORKSHOP_QR_SRC}
                alt="QR code linking to workshop proposal guidelines and submission details"
                width={135}
                height={134}
                className="size-30 object-contain sm:size-33.75"
              />
            </div>
          </div>
        </Frame>
      </section>
    </article>
  );
};
