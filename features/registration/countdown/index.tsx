"use client";

import { useCountdown } from "./use-countdown";

export const RegistrationCountdown = () => {
  const remaining = useCountdown();

  const units: { label: string; value: string }[] = [
    { label: "days", value: remaining.days },
    { label: "Hours", value: remaining.hours },
    { label: "mins", value: remaining.mins },
    { label: "SECS", value: remaining.secs },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex size-28 flex-col items-center justify-center rounded-[5px] border border-[#b6b6b6] bg-[#07327b]/60 shadow-[1px_4px_4px_0_rgba(0,0,0,0.25)] sm:size-35"
        >
          <p className="m-0 text-[28px] font-bold text-white uppercase sm:text-[37px]">
            {unit.value}
          </p>
          <p className="m-0 text-[14px] text-white uppercase">{unit.label}</p>
        </div>
      ))}
    </div>
  );
};
