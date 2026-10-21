import Image from "next/image";
import { ConferenceInfoItemProps } from "./index.types";

export const ConferenceInfoItem = ({
  iconSrc,
  iconAlt,
  lines,
}: ConferenceInfoItemProps) => {
  return (
    <div className="flex min-w-0 items-start gap-2.5 text-white sm:items-center">
      <div className="size-7 shrink-0">
        <Image unoptimized
          src={iconSrc}
          alt={iconAlt}
          width={28}
          height={28}
          className="size-full object-contain"
        />
      </div>
      <p className="m-0 min-w-0 text-[13px] leading-snug font-medium sm:text-[15px] sm:leading-normal">
        {lines.join(" ")}
      </p>
    </div>
  );
};
