import { ConferenceConnectorArrowProps } from "./index.types";

export const ConferenceConnectorArrow = ({
  className = "",
}: ConferenceConnectorArrowProps) => {
  return (
    <div
      className={`z-10 flex size-10 items-center justify-center rounded-full border-2 border-brand-blue bg-white shadow-[2px_3px_6px_0px_rgba(0,0,0,0.2)] ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="size-5 text-brand-blue"
        aria-hidden="true"
      >
        <path
          d="M5 12h13M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
