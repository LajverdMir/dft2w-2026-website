import { ConferenceTopicColumnProps } from "./index.types";

export const ConferenceTopicColumn = ({
  topics,
  startWith,
}: ConferenceTopicColumnProps) => {
  return (
    <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
      {topics.map((topic, index) => {
        const isCyan = startWith === "cyan" ? index % 2 === 0 : index % 2 === 1;
        return (
          <li
            key={topic}
            className={`rounded-sm px-4 py-2.5 text-[14px] font-medium text-black sm:text-[16px] ${
              isCyan ? "bg-brand-cyan/15" : "bg-brand-gray"
            }`}
          >
            {topic}
          </li>
        );
      })}
    </ul>
  );
};
