import { HeroBackdrop } from "@/components/hero-backdrop";
import { Button } from "@/components/button";
import { ConferenceInfoStrip } from "@/features/conference/info-strip";
import { ConferenceSectionHeading } from "@/features/conference/section-heading";
import { DeadlineCard } from "@/features/landing/hero/deadline-card";
import { RegistrationCallout } from "@/features/registration/callout";
import { RegistrationCountdown } from "@/features/registration/countdown";
import { Frame } from "@/layouts/landing/frame";
import {
  REGISTRATION_AUTHOR_RULES,
  REGISTRATION_AUTHOR_TITLE,
  REGISTRATION_BANK_DETAILS,
  REGISTRATION_BANK_TITLE,
  REGISTRATION_CLOSES_LABEL,
  REGISTRATION_CONFIRM_INTRO,
  REGISTRATION_CONFIRM_STEPS,
  REGISTRATION_CONFIRM_TITLE,
  REGISTRATION_FEE_ROWS,
  REGISTRATION_FEES_TITLE,
  REGISTRATION_FORM_HREF,
  REGISTRATION_FORM_LABEL,
  REGISTRATION_GUIDELINES,
  REGISTRATION_GUIDELINES_TITLE,
  REGISTRATION_TEMPLATE_HINT,
  REGISTRATION_TEMPLATE_HREF,
  REGISTRATION_TEMPLATE_LABEL,
} from "./index.constants";

export const Registration = () => {
  return (
    <article className="w-full" id="register">
      <div className="relative w-full overflow-hidden bg-hero">
        <Frame className="relative z-10 flex flex-col items-center gap-8 py-12 text-center">
          <h1 className="m-0 text-[28px] font-normal text-brand-yellow uppercase sm:text-[37px]">
            {REGISTRATION_CLOSES_LABEL}
          </h1>
          <RegistrationCountdown />
        </Frame>
        <HeroBackdrop dim />
      </div>

      <ConferenceInfoStrip />
      <DeadlineCard />

      <Frame className="flex flex-col gap-14 py-12">
        <section className="w-full">
          <div className="overflow-hidden rounded-[10px] border border-brand-blue/15 shadow-[0_6px_20px_rgba(1,17,43,0.08)]">
            <div className="bg-brand-blue px-4 py-4 text-center">
              <h2 className="m-0 text-[20px] font-bold text-white uppercase sm:text-[27px]">
                {REGISTRATION_FEES_TITLE}
              </h2>
            </div>
            <div
              role="table"
              aria-label={REGISTRATION_FEES_TITLE}
              className="flex flex-col"
            >
              <div
                role="row"
                className="hidden grid-cols-3 bg-[#0088ff] text-center text-[16px] font-medium text-white uppercase sm:grid md:text-[20px]"
              >
                <div role="columnheader" className="px-3 py-4">Category</div>
                <div role="columnheader" className="px-3 py-4">Regular Fee</div>
                <div role="columnheader" className="px-3 py-4">IEEE Member Fee</div>
              </div>
              {REGISTRATION_FEE_ROWS.map((row, index) => (
                <div
                  key={row.category}
                  role="row"
                  className={`grid grid-cols-2 border-b border-[#e5e4e4] text-center font-medium text-black last:border-b-0 sm:grid-cols-3 ${
                    index % 2 === 0 ? "bg-[#f0f0f0]" : "bg-white"
                  }`}
                >
                  <div
                    role="rowheader"
                    className="col-span-2 bg-[#0088ff]/10 px-4 py-2.5 text-[15px] font-bold text-brand-blue sm:col-span-1 sm:bg-transparent sm:px-3 sm:py-4 sm:text-[16px] sm:font-medium sm:text-black md:text-[20px]"
                  >
                    {row.category}
                  </div>
                  {row.spanFees ? (
                    <div role="cell" className="col-span-2 flex flex-col gap-0.5 px-3 py-3 sm:py-4">
                      <span className="text-[11px] font-semibold tracking-wide text-black/55 uppercase sm:hidden">
                        All attendees
                      </span>
                      <span className="text-[16px] md:text-[20px]">{row.regular}</span>
                    </div>
                  ) : (
                    <>
                      <div role="cell" className="flex flex-col gap-0.5 px-3 py-3 sm:py-4">
                        <span className="text-[11px] font-semibold tracking-wide text-black/55 uppercase sm:hidden">
                          Regular
                        </span>
                        <span className="text-[16px] md:text-[20px]">{row.regular}</span>
                      </div>
                      <div role="cell" className="flex flex-col gap-0.5 border-l border-[#e5e4e4] px-3 py-3 sm:border-l-0 sm:py-4">
                        <span className="text-[11px] font-semibold tracking-wide text-black/55 uppercase sm:hidden">
                          IEEE Member
                        </span>
                        <span className="text-[16px] md:text-[20px]">{row.ieee}</span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <ConferenceSectionHeading title={REGISTRATION_GUIDELINES_TITLE} />
          {REGISTRATION_GUIDELINES.map((item, index) => (
            <div key={item.title} className="flex flex-col gap-4">
              <div>
                <h3 className="m-0 text-[18px] font-bold text-black">
                  {item.title}
                </h3>
                <p className="mt-2 mb-0 text-[14px] leading-6 text-black">
                  {item.body}
                </p>
              </div>
              {index === 0 ? (
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="rounded-[10px] bg-[#d9d9d9] px-5 py-2 text-[14px] text-black">
                    {REGISTRATION_TEMPLATE_HINT}
                  </div>
                  <Button
                    href={REGISTRATION_TEMPLATE_HREF}
                    label={REGISTRATION_TEMPLATE_LABEL}
                    tone="blue"
                    size="nav"
                  />
                </div>
              ) : null}
              {item.callout ? (
                <RegistrationCallout
                  tone={item.callout.tone}
                  text={item.callout.text}
                />
              ) : null}
              <div className="h-px w-full bg-black/20" />
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 overflow-hidden rounded-[20px] lg:grid-cols-[1.7fr_1fr]">
          <div className="bg-brand-blue px-4 py-8 text-white sm:px-8 sm:py-10">
            <h2 className="m-0 text-[28px] font-bold capitalize sm:text-[36px] md:text-[44px]">
              {REGISTRATION_BANK_TITLE}
            </h2>
            <dl className="mt-8 space-y-3">
              {REGISTRATION_BANK_DETAILS.map((detail) => (
                <div
                  key={detail.label}
                  className="grid grid-cols-1 gap-1 rounded-sm bg-brand-cyan/20 px-3 py-2 sm:grid-cols-[160px_1fr]"
                >
                  <dt className="text-[12px] font-bold">{detail.label}</dt>
                  <dd className="m-0 break-words text-[12px] font-bold sm:text-right">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="bg-[#00c3d0] px-4 py-8 text-black sm:px-8 sm:py-10">
            <h2 className="m-0 text-[20px] font-bold sm:text-[22px]">
              {REGISTRATION_CONFIRM_TITLE}
            </h2>
            <p className="mt-6 mb-0 text-[12px] leading-normal">
              {REGISTRATION_CONFIRM_INTRO}
            </p>
            <ol className="mt-6 list-decimal space-y-2 pl-5 text-[12px]">
              {REGISTRATION_CONFIRM_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div className="mt-10">
              <Button
                href={REGISTRATION_FORM_HREF}
                label={REGISTRATION_FORM_LABEL}
                tone="blue"
                size="panel"
                external
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <ConferenceSectionHeading title={REGISTRATION_AUTHOR_TITLE} />
          <ul className="m-0 list-disc space-y-3 pl-6 text-[14px] leading-6 text-black">
            {REGISTRATION_AUTHOR_RULES.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </section>
      </Frame>
    </article>
  );
};
