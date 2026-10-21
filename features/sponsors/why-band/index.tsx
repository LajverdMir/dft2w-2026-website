import Image from "next/image";
import {
  SPONSORS_WHY_LEFT_CARDS,
  SPONSORS_WHY_TALL_CARDS,
  SPONSORS_WHY_TITLE,
} from "@/features/sponsors/index.constants";
import { Frame } from "@/layouts/landing/frame";
import { SponsorsWhyBandProps } from "./index.types";

const WHY_CARDS = [...SPONSORS_WHY_LEFT_CARDS, ...SPONSORS_WHY_TALL_CARDS];

export const SponsorsWhyBand = ({ quote }: SponsorsWhyBandProps) => {
  return (
    <section className="w-full bg-navy py-10 text-white sm:py-12">
      <Frame
        className={`flex flex-col gap-8 ${quote ? "xl:flex-row xl:items-center xl:gap-10" : ""}`}
      >
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <h2 className="m-0 text-[22px] leading-tight font-bold text-brand-yellow uppercase sm:text-[26px]">
            {SPONSORS_WHY_TITLE}
          </h2>
          <ul className="m-0 grid list-none grid-cols-2 gap-px overflow-hidden rounded-[10px] bg-white/15 p-0 sm:grid-cols-3 lg:grid-cols-5">
            {WHY_CARDS.map((card, index) => (
              <li
                key={card.id}
                className={`flex flex-col items-center gap-3 bg-navy px-3 py-6 text-center ${
                  index === WHY_CARDS.length - 1 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <Image
                  unoptimized
                  src={card.iconSrc}
                  alt=""
                  width={80}
                  height={70}
                  className="h-12 w-auto object-contain"
                />
                <p className="m-0 text-[13px] leading-tight font-bold tracking-wide uppercase sm:text-[14px]">
                  {card.title}
                </p>
                <p className="m-0 text-[12px] leading-snug text-white/75 sm:text-[13px]">
                  {card.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {quote ? (
          <blockquote className="m-0 flex gap-3 border-l-4 border-brand-yellow pl-5 xl:w-80 xl:shrink-0">
            <span className="text-[44px] leading-none font-bold text-brand-yellow" aria-hidden="true">
              “
            </span>
            <p className="m-0 text-[17px] leading-relaxed font-medium sm:text-[19px]">
              {quote}
            </p>
          </blockquote>
        ) : null}
      </Frame>
    </section>
  );
};
