import Image from "next/image";
import { ConferenceTrackProps } from "./index.types";

export const ConferenceTrack = ({ src, label }: ConferenceTrackProps) => {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center justify-start border-l border-black/25 px-0.5 pt-2 pb-2 first:border-l-0">
      <div className="size-9 sm:size-12.5">
        <Image unoptimized
          src={src}
          alt=""
          width={50}
          height={50}
          className="size-full object-contain"
        />
      </div>
      <p className="mt-0.5 w-full max-w-14.5 text-center text-[8px] leading-tight text-black capitalize sm:text-[9px]">
        {label}
      </p>
    </div>
  );
};
