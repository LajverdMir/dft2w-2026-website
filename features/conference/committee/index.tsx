import { ConferenceSectionHeading } from "@/features/conference/section-heading";
import { CommitteeMember } from "./index.types";

type ConferenceCommitteeProps = {
  title?: string;
  members: CommitteeMember[];
};

export const ConferenceCommittee = ({
  title = "Organizing Committee",
  members,
}: ConferenceCommitteeProps) => {
  return (
    <section className="flex flex-col gap-6" id="committee">
      <ConferenceSectionHeading title={title} />
      <div className="overflow-hidden border border-brand-blue/20">
        <div className="hidden grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)_minmax(0,1.4fr)] bg-brand-blue px-4 py-3 text-[12px] font-bold tracking-wide text-white uppercase sm:grid sm:px-5">
          <span>Role</span>
          <span>Name</span>
          <span>Affiliation</span>
        </div>
        <ul className="m-0 list-none divide-y divide-brand-blue/15 p-0">
          {members.map((member) => (
            <li
              key={`${member.role}-${member.name}`}
              className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)_minmax(0,1.4fr)] sm:gap-4 sm:px-5"
            >
              <p className="m-0 text-[12px] font-bold tracking-wide text-brand-blue uppercase sm:text-[13px] sm:normal-case sm:tracking-normal sm:text-black sm:font-semibold">
                {member.role}
              </p>
              <p className="m-0 text-[14px] font-semibold break-words text-ink sm:font-medium">
                {member.name}
              </p>
              <p className="m-0 text-[13px] leading-snug break-words text-black/75">
                {member.affiliation}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
