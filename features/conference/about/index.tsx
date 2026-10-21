import { ConferenceSectionHeading } from "@/features/conference/section-heading";
import { ConferenceAboutProps } from "./index.types";

export const ConferenceAbout = ({
  title,
  body,
  headingConnector,
}: ConferenceAboutProps) => {
  return (
    <section className="flex w-full flex-col gap-4">
      <ConferenceSectionHeading title={title} connector={headingConnector} />
      <p className="m-0 max-w-168 text-[16px] leading-normal font-normal text-black sm:text-[20px]">
        {body}
      </p>
    </section>
  );
};
