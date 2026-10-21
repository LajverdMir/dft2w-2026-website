import Image from "next/image";
import { PillarItemProps } from "./index.types";

export const PillarItem = ({
  className,
  iconClass,
  iconImageClass,
  iconSrc,
  labelClass,
  label,
}: PillarItemProps) => {
  return (
    <div className={className}>
      <div className={iconClass}>
        <Image unoptimized
          src={iconSrc}
          alt=""
          width={43}
          height={32}
          className={iconImageClass}
        />
      </div>
      <p className={labelClass}>{label}</p>
    </div>
  );
};
