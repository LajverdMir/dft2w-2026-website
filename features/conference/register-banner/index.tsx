import { Button } from "@/components/button";
import { REGISTER_BODY, REGISTER_HEADLINE } from "@/features/conference/index.constants";
import { REGISTRATION_FORM_HREF } from "@/features/registration/index.constants";
import { ConferenceRegisterBannerProps } from "./index.types";

export const ConferenceRegisterBanner = ({
  dates,
  tone,
}: ConferenceRegisterBannerProps) => {
  return (
    <section
      className="flex w-full flex-col gap-6 rounded-[5px] bg-brand-blue px-4 py-8 text-white sm:px-6 md:px-8"
      id="dates"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
        <p className="m-0 shrink-0 text-[16px] font-bold">IMPORTANT DATES:</p>
        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {dates.map((item) => (
            <div
              key={item.label}
              className="min-h-24 border border-white px-3 py-3 text-[13px] leading-normal sm:min-h-30 sm:text-[16px]"
            >
              <p className="m-0 font-bold break-words uppercase">{item.label}</p>
              <p className="mt-1 mb-0 font-normal">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-154">
          <p className="m-0 text-[16px] font-bold">{REGISTER_HEADLINE}</p>
          <p className="mt-1 mb-0 text-[16px] font-normal">{REGISTER_BODY}</p>
        </div>
        <Button
          href={REGISTRATION_FORM_HREF}
          label="Register/Participate"
          tone={tone}
          size="panel"
          external
        />
      </div>
    </section>
  );
};
