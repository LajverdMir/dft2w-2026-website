import { ComingSoonPage } from "@/features/coming-soon-page";
import { DOWNLOADS_COMING_SOON, DOWNLOADS_TITLE } from "./index.constants";

// The full downloads grid lives in ./list (DownloadsList) and can be swapped back in when the files are ready
export const Downloads = () => {
  return (
    <ComingSoonPage
      id="downloads"
      title={DOWNLOADS_TITLE}
      message={DOWNLOADS_COMING_SOON}
    />
  );
};
