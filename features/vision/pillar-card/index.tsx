import Image from "next/image";
import Link from "next/link";
import { VisionPillarTone } from "@/features/vision/index.types";
import { VisionPillarCardProps } from "./index.types";

const HEADER_CLASS: Record<VisionPillarTone, string> = {
  purple: "bg-pillar-purple",
  blue: "bg-pillar-blue",
  teal: "bg-pillar-teal",
};

const CHIP_CLASS: Record<VisionPillarTone, string> = {
  purple: "bg-pillar-purple-chip text-black",
  blue: "bg-pillar-blue-chip text-black",
  teal: "bg-pillar-teal-chip text-black",
};

const NUMBER_CLASS: Record<VisionPillarTone, string> = {
  purple: "text-pillar-purple",
  blue: "text-pillar-blue",
  teal: "text-pillar-teal",
};

export const VisionPillarCard = ({
  id,
  number,
  title,
  subtitle,
  tone,
  focusAreas,
  events,
  href,
  isLast = false,
}: VisionPillarCardProps) => {
  return (
    <article
      className={`flex min-w-0 flex-col bg-white ${isLast ? "" : "lg:border-r lg:border-black/15"}`}
      id={id}
    >
      <Link
        href={href}
        className={`relative flex min-h-40 flex-col justify-center gap-2 px-5 py-5 pr-24 text-white sm:min-h-44 sm:px-6 ${HEADER_CLASS[tone]}`}
      >
        <h3 className="m-0 text-[20px] leading-tight font-bold sm:text-[22px]">
          {title}
        </h3>
        <p className="m-0 max-w-[220px] text-[12px] leading-snug font-normal sm:text-[13px]">
          {subtitle}
        </p>
        <div className="pointer-events-none absolute top-1/2 right-3 flex -translate-y-1/2 items-center gap-1 sm:right-4">
          <span
            className={`flex size-16 items-center justify-center rounded-full bg-white text-[42px] leading-none font-bold sm:size-[72px] sm:text-[48px] ${NUMBER_CLASS[tone]}`}
          >
            {number}
          </span>
          <span className="text-[11px] font-semibold tracking-wide text-white [writing-mode:vertical-rl] rotate-180">
            Pillar
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 px-3 pt-4 pb-3 sm:px-4">
        <h4 className="m-0 text-center text-[16px] font-bold text-black sm:text-[18px]">
          Focus Areas
        </h4>
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          {focusAreas.map((area) => (
            <li
              key={area}
              className={`rounded-md px-3 py-2.5 text-center text-[11px] leading-snug font-medium sm:text-[12px] ${CHIP_CLASS[tone]}`}
            >
              {area}
            </li>
          ))}
        </ul>
        <h4 className="m-0 mt-2 text-center text-[16px] font-bold text-black sm:text-[18px]">
          Event & Activities
        </h4>
      </div>

      <div className="mt-auto bg-vision-navy px-2 pt-2.5 pb-2 text-white min-h-[68px] h-auto">
        <ul className="m-0 flex list-none items-start justify-between gap-1 p-0">
          {events.map((event) => (
            <li
              key={event.label}
              className="flex min-w-0 flex-1 flex-col items-center gap-1"
            >
              <div className="flex h-7 w-full items-center justify-center">
                <Image
                  src={event.iconSrc}
                  alt=""
                  width={40}
                  height={28}
                  className="h-6 w-auto max-w-full object-contain"
                />
              </div>
              <span className="max-w-full text-center text-[9px] leading-tight font-medium break-words sm:text-[10px] lg:text-[9px]">
                {event.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
