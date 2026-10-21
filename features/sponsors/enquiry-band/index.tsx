import Image from "next/image";
import {
  SPONSORS_CTA_TAGLINE,
  SPONSORS_CTA_TITLE,
  SPONSORS_QR_SRC,
} from "@/features/sponsors/index.constants";
import { Frame } from "@/layouts/landing/frame";
import {
  ENQUIRY_BUTTON,
  ENQUIRY_EMAIL,
  ENQUIRY_HASHTAG,
  ENQUIRY_LABEL,
  ENQUIRY_WEBSITE,
} from "./index.constants";

export const SponsorsEnquiryBand = () => {
  return (
    <section className="w-full bg-[#eef4ff] py-10 sm:py-12">
      <Frame>
        <div className="flex flex-col gap-6 rounded-[10px] border border-brand-blue/20 bg-white p-5 shadow-[0_6px_20px_rgba(1,17,43,0.08)] sm:p-7 lg:flex-row lg:items-center lg:gap-10">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="flex size-22 shrink-0 items-center justify-center rounded-[10px] bg-navy p-2 sm:size-25">
              <Image
                unoptimized
                src={SPONSORS_QR_SRC}
                alt="DFT²W partnership QR code"
                width={100}
                height={100}
                className="size-full object-contain"
              />
            </div>
            <div className="flex min-w-0 flex-col gap-1">
              <h2 className="m-0 text-[20px] leading-tight font-bold text-brand-blue uppercase sm:text-[24px]">
                {SPONSORS_CTA_TITLE}
              </h2>
              <p className="m-0 text-[14px] leading-snug text-ink sm:text-[16px]">
                {SPONSORS_CTA_TAGLINE}
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-2 border-t border-black/10 pt-5 text-[14px] sm:text-[15px] lg:flex-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <p className="m-0 font-bold text-ink">{ENQUIRY_LABEL}</p>
            <a
              href={`mailto:${ENQUIRY_EMAIL}`}
              className="break-all text-brand-blue underline-offset-2 hover:underline"
            >
              ✉ {ENQUIRY_EMAIL}
            </a>
            <a
              href={ENQUIRY_WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-brand-blue underline-offset-2 hover:underline"
            >
              🌐 {ENQUIRY_WEBSITE}
            </a>
            <p className="m-0 font-semibold text-black/60">{ENQUIRY_HASHTAG}</p>
          </div>

          <a
            href={`mailto:${ENQUIRY_EMAIL}`}
            className="inline-flex h-12.5 w-full items-center justify-center rounded-[5px] bg-brand-green px-6 text-[16px] font-medium text-white no-underline transition-colors hover:bg-brand-green-line lg:w-auto lg:shrink-0"
          >
            {ENQUIRY_BUTTON}
          </a>
        </div>
      </Frame>
    </section>
  );
};
