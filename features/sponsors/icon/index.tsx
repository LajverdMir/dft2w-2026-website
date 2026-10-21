import { SPONSOR_ICON_PATHS } from "./index.constants";
import { SponsorIconProps } from "./index.types";

export const SponsorIcon = ({ name, className = "size-6" }: SponsorIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path
        d={SPONSOR_ICON_PATHS[name]}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
