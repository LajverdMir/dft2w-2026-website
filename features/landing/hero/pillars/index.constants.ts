import { PillarItemProps } from "@/features/landing/hero/pillar-item/index.types";

export const HERO_PILLARS: PillarItemProps[] = [
  {
    className: "flex min-w-0 w-full items-center gap-2 lg:flex-[2]",
    iconClass: "h-8 w-10 shrink-0 overflow-hidden",
    iconImageClass: "h-[200%] w-[240%] max-w-none -translate-y-[3%] translate-x-[8%]",
    iconSrc: "/landing/pillar-sprite.png",
    labelClass: "text-[11px] font-medium leading-normal",
    label:
      "Bridging Academia, Industry, Government, Entrepreneurs and Society for a Responsible, Inclusive and Prosperous Digital Future.",
  },
  {
    className: "flex min-w-0 w-full items-center gap-2 lg:flex-1",
    iconClass: "flex h-8 w-10 shrink-0 items-center justify-center overflow-hidden",
    iconImageClass: "h-full w-auto max-w-none object-contain",
    iconSrc: "/img1.png",
    labelClass: "text-[11px] font-medium leading-tight lg:text-[14px] lg:leading-normal",
    label: "Advancing Science",
  },
  {
    className: "flex min-w-0 w-full items-center gap-2 lg:flex-1",
    iconClass: "flex h-8 w-10 shrink-0 items-center justify-center overflow-hidden",
    iconImageClass: "h-full w-auto max-w-none object-contain",
    iconSrc: "/img2.png",
    labelClass: "text-[11px] font-medium leading-tight lg:text-[14px] lg:leading-normal",
    label: "Empowering People",
  },
  {
    className: "flex min-w-0 w-full items-center gap-2 lg:flex-1",
    iconClass: "flex h-8 w-10 shrink-0 items-center justify-center overflow-hidden",
    iconImageClass: "h-full w-auto max-w-none object-contain",
    iconSrc: "/img3.png",
    labelClass: "text-[11px] font-medium leading-tight lg:text-[14px] lg:leading-normal",
    label: "Strengthening Economies",
  },
  {
    className: "flex min-w-0 w-full items-center gap-2 lg:flex-1",
    iconClass: "flex h-8 w-10 shrink-0 items-center justify-center overflow-hidden",
    iconImageClass: "h-full w-auto max-w-none object-contain",
    iconSrc: "/img4.png",
    labelClass: "text-[11px] font-medium leading-tight lg:text-[14px] lg:leading-normal",
    label: "Transforming Societies",
  },
];
