import Image from "next/image";
import { WorkshopTopicChipProps } from "./index.types";

export const WorkshopTopicChip = ({
  label,
  iconSrc,
}: WorkshopTopicChipProps) => {
  return (
    <div className="flex items-start gap-3 border-b border-black/10 pb-3">
      <Image
        unoptimized
        src={iconSrc}
        alt=""
        width={32}
        height={32}
        className="size-12 shrink-0 object-contain"
      />
      <p className="m-0 text-[13px] leading-snug font-medium text-black">
        {label}
      </p>
    </div>
  );
};
