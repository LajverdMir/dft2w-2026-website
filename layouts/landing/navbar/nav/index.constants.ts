import { NavbarItemProps } from "@/layouts/landing/navbar/nav-item/index.types";

export const NAVBAR_ITEMS: NavbarItemProps[] = [
  {
    href: "/about",
    label: "About DFT²W",
    hasMenu: true,
    items: [
      { href: "/vision", label: "DFT²W at a Glance" },
      { href: "/about/seecs", label: "NUST SEECS at a Glance" },
      { href: "/about/executive-message", label: "DFT²W Vision | Executive Message" },
      { href: "/about/islamabad", label: "Venue: Islamabad at a Glance" },
      { href: "/about/downloads", label: "Downloads" },
    ],
  },
  {
    href: "/#conferences",
    label: "Conferences",
    hasMenu: true,
    items: [
      { href: "/conferences/icodt", label: "ICoDT²" },
      { href: "/conferences/icdi", label: "ICDI² AI&ML" },
      { href: "/conferences/organizing-committee", label: "Organizing Committee" },
    ],
  },
  { href: "/speakers", label: "Speakers" },
  {
    href: "/workshops",
    label: "Workshops",
    hasMenu: true,
    items: [
      { href: "/workshops/closed", label: "Workshop Closed" },
      { href: "/workshops/scheduled", label: "Workshop Scheduled" },
    ],
  },
  {
    href: "/#tech-expo",
    label: "Tech Expo",
    hasMenu: true,
    items: [
      { href: "/tech-expo/registration", label: "Registration" },
      { href: "/tech-expo/details", label: "Details" },
    ],
  },
  {
    href: "/sponsors",
    label: "Sponsors",
    hasMenu: true,
    items: [
      { href: "/sponsors/sponsorships", label: "Sponsorships" },
      { href: "/sponsors/more", label: "More" },
    ],
  },
];
