import Image from "next/image";
import { ConferenceAbout } from "@/features/conference/about";
import { ConferenceTopics } from "@/features/conference/topics";
import { ConferenceIntroProps } from "./index.types";

export const ConferenceIntro = ({
  markSrc,
  markAlt,
  aboutTitle,
  aboutBody,
  topics,
}: ConferenceIntroProps) => {
  return (
    <section className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
      <div className="relative mx-auto w-full max-w-64 shrink-0 sm:max-w-80 lg:mx-0 lg:max-w-113.5">
        <div className="relative aspect-454/608 w-full overflow-hidden">
          <Image src={markSrc} alt={markAlt} fill unoptimized className="object-cover" />
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-10">
        <ConferenceAbout
          title={aboutTitle}
          body={aboutBody}
        />
        <ConferenceTopics topics={topics} />
      </div>
    </section>
  );
};
