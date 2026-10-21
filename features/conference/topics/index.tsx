import { ConferenceSectionHeading } from "@/features/conference/section-heading";
import { ConferenceTopicColumn } from "@/features/conference/topic-column";
import { ConferenceTopicsProps } from "./index.types";

export const ConferenceTopics = ({
  topics,
  headingConnector,
}: ConferenceTopicsProps) => {
  const half = Math.ceil(topics.length / 2);
  const first = topics.slice(0, half);
  const second = topics.slice(half);

  return (
    <section className="flex w-full flex-col gap-8">
      <ConferenceSectionHeading title="Key Topics" connector={headingConnector} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <ConferenceTopicColumn topics={first} startWith="cyan" />
        <ConferenceTopicColumn topics={second} startWith="gray" />
      </div>
    </section>
  );
};
