import { ProsperityLabelProps } from "@/features/landing/hero/prosperity-label/index.types";

export const PROSPERITY_LEFT: ProsperityLabelProps[] = [
  {
    className: "text-right text-[11px] font-bold leading-normal text-white",
    lines: ["Quality", "Education"],
  },
  {
    className: "text-right text-[11px] font-bold leading-normal text-white",
    lines: ["Culture, Values", "& Community"],
  },
  {
    className: "text-right text-[11px] font-bold leading-normal text-white",
    lines: ["Sustainable", "Environment"],
  },
  {
    className: "text-right text-[11px] font-bold leading-normal text-white",
    lines: ["Food Security", "& Agriculture"],
  },
];

export const PROSPERITY_RIGHT: ProsperityLabelProps[] = [
  {
    className: "text-left text-[11px] font-bold leading-normal text-white",
    lines: ["Good Health", "& Well-being"],
  },
  {
    className: "text-left text-[11px] font-bold leading-normal text-white",
    lines: ["Inclusive", "Economies"],
  },
  {
    className: "text-left text-[11px] font-bold leading-normal text-white",
    lines: ["Innovation &", "Entrepreneurship"],
  },
  {
    className: "text-left text-[11px] font-bold leading-normal text-white",
    lines: ["Dignity & Equality", "Social Inclusion"],
  },
];

export const LABEL_GAP = 6;

export type ProsperityPoint = {
  lines: string[];
  top: number;
  align: "left" | "right";
  iconLeft: number;
};

export const PROSPERITY_POINTS: ProsperityPoint[] = [
  { lines: ["Quality", "Education"], top: 11, align: "right", iconLeft: 31 },
  {
    lines: ["Culture, Values", "& Community"],
    top: 28.4,
    align: "right",
    iconLeft: 22,
  },
  {
    lines: ["Sustainable", "Environment"],
    top: 55.2,
    align: "right",
    iconLeft: 20,
  },
  {
    lines: ["Food Security", "& Agriculture"],
    top: 78.1,
    align: "right",
    iconLeft: 31,
  },
  {
    lines: ["Good Health", "& Well-being"],
    top: 11,
    align: "left",
    iconLeft: 69,
  },
  {
    lines: ["Inclusive", "Economies"],
    top: 28.4,
    align: "left",
    iconLeft: 81,
  },
  {
    lines: ["Innovation &", "Entrepreneurship"],
    top: 55.2,
    align: "left",
    iconLeft: 84,
  },
  {
    lines: ["Dignity & Equality", "Social Inclusion"],
    top: 78.1,
    align: "left",
    iconLeft: 75,
  },
];
