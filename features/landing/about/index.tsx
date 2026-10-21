import { ConferenceSectionHeading } from "@/features/conference/section-heading";
import { Frame } from "@/layouts/landing/frame";
import {
  ABOUT_BODY,
  ABOUT_TITLE,
  CONCEPT_NOTE_BODY,
  CONCEPT_NOTE_CHALLENGE,
  CONCEPT_NOTE_LEAD,
  CONCEPT_NOTE_TITLE,
  HOST_BODY,
  HOST_DETAILS,
  HOST_TITLE,
} from "./index.constants";

export const About = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-12" id="about-dft2w">
      <Frame className="flex flex-col gap-10 sm:gap-12">
        <div className="flex flex-col gap-4 sm:gap-5">
          <ConferenceSectionHeading title={ABOUT_TITLE} />
          <p className="m-0 max-w-5xl text-[14px] leading-relaxed font-normal text-black sm:text-[16px] lg:text-[18px]">
            {ABOUT_BODY}
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-[5px] bg-navy px-5 py-6 text-white sm:px-8 sm:py-8">
          <h3 className="m-0 text-[18px] font-bold uppercase sm:text-[22px]">
            {CONCEPT_NOTE_TITLE}
          </h3>
          <p className="m-0 max-w-5xl text-[14px] leading-relaxed sm:text-[16px]">
            <span className="font-medium text-brand-yellow">
              {CONCEPT_NOTE_LEAD}{" "}
            </span>
            <span className="font-bold">{CONCEPT_NOTE_CHALLENGE}</span>
          </p>
          <p className="m-0 max-w-5xl text-[14px] leading-relaxed sm:text-[16px]">
            {CONCEPT_NOTE_BODY}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <ConferenceSectionHeading title={HOST_TITLE} />
          <p className="m-0 max-w-5xl text-[14px] leading-relaxed font-normal text-black sm:text-[16px]">
            {HOST_BODY}
          </p>
          <dl className="m-0 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {HOST_DETAILS.map((item) => (
              <div
                key={item.label}
                className="border border-brand-blue/20 px-4 py-3"
              >
                <dt className="m-0 text-[12px] font-bold tracking-wide text-brand-blue uppercase">
                  {item.label}
                </dt>
                <dd className="mt-1 mb-0 text-[13px] leading-snug text-black sm:text-[14px]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Frame>
    </section>
  );
};
