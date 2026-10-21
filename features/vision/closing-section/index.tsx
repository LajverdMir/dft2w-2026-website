import Image from "next/image";
import { Frame } from "@/layouts/landing/frame";
import {
  VISION_CTA_EMAIL,
  VISION_CTA_QR_SRC,
  VISION_CTA_TAGLINE,
  VISION_CTA_TITLE,
  VISION_CTA_URL,
  VISION_CTA_WHO,
  VISION_CTA_WHO_TITLE,
  VISION_INITIATIVE_GLOBAL,
  VISION_INITIATIVE_YOUTH,
  VISION_INITIATIVES_MAIN,
  VISION_INITIATIVES_TITLE,
  VISION_OUTCOMES,
  VISION_OUTCOMES_TITLE,
} from "@/features/vision/index.constants";
import { VisionInitiative } from "@/features/vision/index.types";

const InitiativeCell = ({
  item,
  className = "",
}: {
  item: VisionInitiative;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2.5 bg-brand-blue px-3 py-5 text-center ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.iconSrc}
        alt=""
        width={46}
        height={50}
        className="h-11 w-auto object-contain"
      />
      <p className="m-0 max-w-40 text-[12px] leading-snug font-medium text-white sm:text-[13px]">
        {item.label}
      </p>
    </div>
  );
};

export const VisionClosingSection = () => {
  return (
    <section className="w-full" id="initiatives">
      <div className="w-full bg-brand-blue py-8 sm:py-10">
        <Frame>
          <div className="grid grid-cols-2 gap-px border border-white bg-white lg:grid-cols-5">
            <div className="col-span-2 flex items-center justify-center bg-brand-blue px-4 py-6 lg:col-span-4 lg:min-h-24">
              <h2 className="m-0 text-center text-[16px] font-bold tracking-wide text-white uppercase sm:text-[20px] lg:text-[22px]">
                {VISION_INITIATIVES_TITLE}
              </h2>
            </div>

            <InitiativeCell
              item={VISION_INITIATIVE_YOUTH}
              className="lg:min-h-24"
            />

            {VISION_INITIATIVES_MAIN.map((item) => (
              <InitiativeCell
                key={item.id}
                item={item}
                className="min-h-30"
              />
            ))}

            <InitiativeCell
              item={VISION_INITIATIVE_GLOBAL}
              className="min-h-30"
            />
          </div>
        </Frame>
      </div>

      <div className="w-full bg-white py-8 sm:py-10">
        <Frame className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="border border-[#c5d0e0] px-4 py-4 sm:px-5 sm:py-5">
              <div className="mb-3 flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/vision/closing/outcomes.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="size-8 object-contain sm:size-9"
                />
                <h3 className="m-0 text-[15px] font-bold tracking-wide text-brand-blue uppercase sm:text-[17px]">
                  {VISION_OUTCOMES_TITLE}
                </h3>
              </div>
              <ul className="m-0 list-none space-y-2 p-0">
                {VISION_OUTCOMES.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-2 text-[13px] leading-snug text-black sm:text-[14px]"
                  >
                    <span
                      aria-hidden
                      className="mt-px text-[14px] font-bold text-brand-blue"
                    >
                      ✓
                    </span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#c5d0e0] px-4 py-4 sm:px-5 sm:py-5">
              <div className="mb-3 flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/vision/closing/participate.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="size-8 object-contain sm:size-9"
                />
                <h3 className="m-0 text-[15px] font-bold tracking-wide text-brand-blue uppercase sm:text-[17px]">
                  {VISION_CTA_WHO_TITLE}
                </h3>
              </div>
              <p className="m-0 text-[13px] leading-relaxed text-black sm:text-[14px]">
                {VISION_CTA_WHO}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 border border-[#c5d0e0] px-4 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-5 sm:py-4">
            <Image
              src={VISION_CTA_QR_SRC}
              alt="DFT²W registration QR code"
              width={96}
              height={96}
              className="size-20 shrink-0 object-contain sm:size-[88px]"
            />
            <div className="min-w-0 flex-1">
              <h3 className="m-0 text-[18px] font-bold tracking-wide text-brand-blue uppercase sm:text-[22px]">
                {VISION_CTA_TITLE}
              </h3>
              <p className="mt-1 mb-3 text-[13px] text-black sm:text-[15px]">
                {VISION_CTA_TAGLINE}
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-1">
                <a
                  href={`mailto:${VISION_CTA_EMAIL}`}
                  className="inline-flex items-center gap-2 text-[12px] text-black no-underline sm:text-[13px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/vision/closing/email.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="size-4"
                  />
                  {VISION_CTA_EMAIL}
                </a>
                <a
                  href={VISION_CTA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[12px] text-black no-underline sm:text-[13px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/vision/closing/web.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="size-4"
                  />
                  {VISION_CTA_URL}
                </a>
              </div>
            </div>
          </div>
        </Frame>
      </div>
    </section>
  );
};
