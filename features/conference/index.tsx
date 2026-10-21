import { ConferenceCommittee } from "@/features/conference/committee";
import { CONFERENCE_DATES, CONFERENCES } from "@/features/conference/index.constants";
import { ConferenceIntro } from "@/features/conference/intro";
import { ConferencePublication } from "@/features/conference/publication";
import { ConferenceRegisterBanner } from "@/features/conference/register-banner";
import { ConferenceSpecialSession } from "@/features/conference/special-session";
import { ConferenceSubthemes } from "@/features/conference/subthemes";
import { EventShell } from "@/features/event-shell";
import { Frame } from "@/layouts/landing/frame";
import { ConferenceProps } from "./index.types";

export const Conference = ({ conferenceId }: ConferenceProps) => {
  const conference = CONFERENCES[conferenceId];

  return (
    <article className="w-full">
      <EventShell heroSrc={conference.heroSrc} heroAlt={conference.heroAlt}>
        <Frame className="flex flex-col gap-14 py-12">
          <ConferenceIntro
            markSrc={conference.markSrc}
            markAlt={conference.markAlt}
            aboutTitle={conference.aboutTitle}
            aboutBody={conference.aboutBody}
            topics={conference.topics}
          />
          <ConferenceSubthemes items={conference.subthemes} />
          <ConferenceCommittee members={conference.committee} />
          <ConferencePublication />
          <ConferenceRegisterBanner
            dates={CONFERENCE_DATES}
            tone={conference.registerTone}
          />
        </Frame>
        {conference.specialSession ? (
          <ConferenceSpecialSession {...conference.specialSession} />
        ) : null}
      </EventShell>
    </article>
  );
};
