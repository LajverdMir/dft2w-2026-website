import { notFound } from "next/navigation";
import { Conference } from "@/features/conference";
import { CONFERENCE_IDS, CONFERENCES, isConferenceId } from "@/features/conference/index.constants";
import { ConferencePageProps } from "./page.types";

export function generateStaticParams() {
  return CONFERENCE_IDS.map((conferenceId) => ({ conferenceId }));
}

export default async function Page({ params }: ConferencePageProps) {
  const { conferenceId } = await params;

  if (!isConferenceId(conferenceId)) {
    notFound();
  }

  return <Conference conferenceId={CONFERENCES[conferenceId].id} />;
}
