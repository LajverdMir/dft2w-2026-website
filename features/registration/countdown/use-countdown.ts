import { useEffect, useState } from "react";
import { REGISTRATION_CLOSES_AT } from "@/features/registration/index.constants";
import { Remaining } from "./index.types";
import { getRemaining } from "./index.utils";

// Placeholder for the server render and first client render, so both match (no hydration mismatch);
// the real time left is filled in once the page is running in the browser.
const EMPTY: Remaining = { days: "--", hours: "--", mins: "--", secs: "--" };

export const useCountdown = () => {
  const target = new Date(REGISTRATION_CLOSES_AT).getTime();
  const [remaining, setRemaining] = useState<Remaining>(EMPTY);

  useEffect(() => {
    const tick = () => setRemaining(getRemaining(target));
    const first = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, [target]);

  return remaining;
};
