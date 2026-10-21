import { CALLOUT_TONE_CLASS } from "./index.constants";
import { RegistrationCalloutProps } from "./index.types";

const EMAIL_PATTERN = /[\w.+-]+@[\w-]+\.[\w.-]+/g;

const renderWithEmailLinks = (text: string) => {
  const parts = text.split(EMAIL_PATTERN);
  const emails = text.match(EMAIL_PATTERN) ?? [];

  return parts.flatMap((part, index) => {
    const email = emails[index];
    return email
      ? [part, <a key={email} href={`mailto:${email}`} className="font-bold underline">{email}</a>]
      : [part];
  });
};

export const RegistrationCallout = ({ tone, text }: RegistrationCalloutProps) => {
  return (
    <div
      className={`flex items-start gap-3 rounded-[10px] px-4 py-3 text-[13px] leading-normal font-medium sm:text-[14px] ${CALLOUT_TONE_CLASS[tone]}`}
    >
      {tone === "warning" ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="mt-0.5 size-5 shrink-0"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M12 8v5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="mt-0.5 size-5 shrink-0"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="m4 6.5 8 6 8-6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <p className="m-0">{renderWithEmailLinks(text)}</p>
    </div>
  );
};
