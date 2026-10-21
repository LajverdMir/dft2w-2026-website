import Image from "next/image";
import { REASON_ICON_SRC } from "./index.constants";
import { WorkshopReasonCardProps } from "./index.types";

export const WorkshopReasonCard = ({
  title,
  body,
  icon,
}: WorkshopReasonCardProps) => {
  return (
    <article className="flex min-h-45 min-w-45 flex-col justify-start gap-2 rounded-[10px] bg-plate pb-6 text-black">
      <div className="flex h-21.25 w-21.25 self-end items-center justify-center rounded-[50px_0_50px_50px] bg-[#0088FF] shadow-[2px_3px_4px_0px_rgba(0,0,0,0.2)]">
        <Image
          unoptimized
          src={REASON_ICON_SRC[icon]}
          alt=""
          width={40}
          height={40}
          className="size-14 mr-1 object-contain"
        />
      </div>
      <div className="flex flex-col gap-2 px-5">
        <h3 className="m-0 text-[20px] font-bold capitalize">{title}</h3>
        <p className="m-0 text-[16px] leading-normal font-normal">{body}</p>
      </div>
    </article>
  );
};
