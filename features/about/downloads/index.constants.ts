import { DownloadItem } from "./index.types";

export const DOWNLOADS_TITLE = "Downloads";
export const DOWNLOADS_INTRO =
  "Download official DFT²W 2026 material — the event poster, sponsorship package tables and QR codes — for sharing, printing and promotion.";
export const DOWNLOADS_BUTTON_LABEL = "Download";
export const DOWNLOADS_COMING_SOON =
  "Official DFT²W 2026 material — posters, brochures, the Executive Message and more — will be available to download here soon.";

export const DOWNLOAD_ITEMS: DownloadItem[] = [
  {
    id: "poster",
    title: "DFT²W 2026 Poster",
    description: "Official event poster: themes, guiding question, dates and partners.",
    href: "/about/dftw-poster.jpg",
    fileName: "DFT2W-2026-Poster.jpg",
    format: "JPG",
    size: "475 KB",
  },
  {
    id: "packages",
    title: "Sponsorship & Partnership Packages",
    description: "Comparison table of sponsorship tiers, contributions and key benefits.",
    href: "/sponsors/packages-table.png",
    fileName: "DFT2W-2026-Sponsorship-Packages.png",
    format: "PNG",
    size: "3.1 MB",
  },
  {
    id: "packages-detail",
    title: "Impact & Experience Partnerships",
    description: "Detailed sponsorship package sheet with indicative sponsorship levels.",
    href: "/sponsors/packages-table-detail.png",
    fileName: "DFT2W-2026-Partnership-Packages-Detail.png",
    format: "PNG",
    size: "529 KB",
  },
  {
    id: "registration-qr",
    title: "Registration QR Code",
    description: "Scan to register for DFT²W 2026.",
    href: "/vision/closing/qr-code.png",
    darkPreview: true,
    fileName: "DFT2W-2026-Registration-QR.png",
    format: "PNG",
    size: "21 KB",
  },
  {
    id: "partnership-qr",
    title: "Partnership QR Code",
    description: "Scan for partnership and sponsorship enquiries.",
    href: "/sponsors/qr-code.png",
    darkPreview: true,
    fileName: "DFT2W-2026-Partnership-QR.png",
    format: "PNG",
    size: "21 KB",
  },
  {
    id: "workshops-qr",
    title: "Workshop Proposals QR Code",
    description: "Scan for workshop proposal guidelines and submission details.",
    href: "/workshops/qr-code.png",
    fileName: "DFT2W-2026-Workshop-Proposals-QR.png",
    format: "PNG",
    size: "11 KB",
  },
];
