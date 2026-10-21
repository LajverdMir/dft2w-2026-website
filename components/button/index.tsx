import { BUTTON_SIZE_CLASS, BUTTON_TONE_CLASS } from "./index.constants";
import { ButtonProps } from "./index.types";

export const Button = ({
  href,
  label,
  tone,
  size,
  className,
  external = false,
  download,
}: ButtonProps) => {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-[5px] whitespace-nowrap text-center no-underline ${BUTTON_TONE_CLASS[tone]} ${BUTTON_SIZE_CLASS[size]} ${className}`}
      href={href}
      download={download}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {label}
    </a>
  );
};
