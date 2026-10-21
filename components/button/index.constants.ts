export const BUTTON_TONE_CLASS = {
  green: "bg-brand-green text-white",
  "green-deep": "bg-brand-green-deep text-white",
  blue: "bg-brand-blue text-white",
  icodt: "bg-[#0742a4] text-white",
  icdi: "bg-[#933ad5] text-white",
  yellow: "bg-brand-yellow-glance text-ink",
} as const;

export const BUTTON_SIZE_CLASS = {
  card: "mt-auto h-12.5 w-full max-w-70.25 text-[16px] font-medium capitalize sm:text-[20px]",
  panel: "h-12.5 w-full max-w-full text-[15px] font-medium capitalize sm:max-w-51.25",
  nav: "h-10 w-auto max-w-none px-2.5 text-[11px] font-normal uppercase sm:min-w-42 sm:p-2.5 sm:text-[13px]",
} as const;
