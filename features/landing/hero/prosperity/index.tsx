import Image from "next/image";
import { ProsperityLabel } from "@/features/landing/hero/prosperity-label";
import { LABEL_GAP, PROSPERITY_LEFT, PROSPERITY_POINTS, PROSPERITY_RIGHT } from "./index.constants";

export const HeroProsperity = () => {
  return (
    <div className="">
      <div className="hidden w-full flex-col items-center gap-2 lg:flex">
        <p className="max-w-32 text-center text-[11px] font-bold leading-normal text-brand-yellow-title">
          MULTI-DIMENSIONAL HUMAN PROSPERITY
        </p>
        <div className="relative mx-16 aspect-354/236 w-88.5">
          <Image unoptimized
            src="/landing/prosperity.png"
            alt="Multi-dimensional human prosperity"
            fill
            className="object-contain"
          />
          {PROSPERITY_POINTS.map((point) => (
            <p
              key={point.lines.join(" ")}
              style={
                point.align === "right"
                  ? {
                    top: `${point.top}%`,
                    right: `${100 - point.iconLeft + LABEL_GAP}%`,
                  }
                  : {
                    top: `${point.top}%`,
                    left: `${point.iconLeft + LABEL_GAP}%`,
                  }
              }
              className={`absolute w-24 -translate-y-1/2 text-[11px] font-bold leading-normal text-white ${point.align === "right" ? "text-right" : "text-left"
                }`}
            >
              {point.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-2 lg:hidden">
        <p className="max-w-32 text-center text-[11px] font-bold leading-normal text-brand-yellow-title">
          MULTI-DIMENSIONAL HUMAN PROSPERITY
        </p>
        <div className="h-auto w-full max-w-88.5">
          <Image unoptimized
            src="/landing/prosperity.png"
            alt="Multi-dimensional human prosperity"
            width={354}
            height={236}
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="grid w-full max-w-md grid-cols-2 gap-2">
          {PROSPERITY_LEFT.flatMap((item, index) => [item, PROSPERITY_RIGHT[index]]).map((item) => (
            <ProsperityLabel
              key={`mobile-${item.lines.join(" ")}`}
              className="rounded-[5px] bg-navy/70 px-2 py-1.5 text-center text-[11px] leading-tight font-bold text-white sm:text-[12px]"
              lines={item.lines}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
