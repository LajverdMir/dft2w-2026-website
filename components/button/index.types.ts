export type ButtonTone = "green" | "green-deep" | "blue" | "icodt" | "icdi" | "yellow";

export type ButtonSize = "nav" | "card" | "panel";

export type ButtonProps = {
  href: string;
  label: string;
  tone: ButtonTone;
  size: ButtonSize;
  className?: string;
  external?: boolean;
  download?: string;
};
