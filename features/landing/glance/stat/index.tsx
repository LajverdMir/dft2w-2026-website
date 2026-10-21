import { GlanceStatProps } from "./index.types";

export const GlanceStat = ({ value, label, className }: GlanceStatProps) => {
  return (
    <div
      className={`flex flex-col justify-center border border-white text-white ${className}`}
    >
      <span className="text-[28px] leading-normal font-bold sm:text-[36px] lg:text-[40px]">
        {value}
      </span>
      <span className="text-[14px] leading-normal font-normal whitespace-pre-line sm:text-[16px] lg:text-[20px]">
        {label}
      </span>
    </div>
  );
};
