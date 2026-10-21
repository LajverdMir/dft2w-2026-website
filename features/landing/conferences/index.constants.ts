import { ConferenceCardProps } from "@/features/landing/conferences/card/index.types";

export const CONFERENCE_CARDS: ConferenceCardProps[] = [
  {
    href: "/conferences/icodt",
    variant: "icodt",
    className: "bg-card-tint",
    logoSrc: "/landing/icodt-logo.png",
    logoAlt: "ICoDT² IEEE International Conference on Digital and Transformative Technologies",
    description:
      "Cutting-edge research, innovations and applications shaping the digital and transformative future.",
    ctaLabel: "Explore ICoDT²",
    ctaTone: "icodt",
    trackTone: "icodt",
    tracks: [
      { src: "/landing/track-digital.png", label: "Digital Technologies" },
      { src: "/landing/track-smart.png", label: "Smart Systems" },
      { src: "/landing/track-ict.png", label: "ICT & Networks" },
      { src: "/landing/track-emerging.png", label: "Emerging Tech" },
      { src: "/landing/track-industry.png", label: "Industry Applications" },
    ],
  },
  {
    href: "/conferences/icdi",
    variant: "icdi",
    className: "bg-white",
    logoSrc: "/landing/icdi-logo.png",
    logoAlt:
      "ICDI² AI&ML IEEE International Conference on Development and Innovations in Artificial Intelligence and Machine Learning",
    description:
      "Advancing AI and ML research and innovations for societal impact and sustainable development.",
    ctaLabel: "Explore ICDI² AI&ML",
    ctaTone: "icdi",
    trackTone: "icdi",
    tracks: [
      { src: "/landing/track-ai.png", label: "artificial intelligence" },
      { src: "/landing/track-ml.png", label: "Machine Learning" },
      { src: "/landing/track-data.png", label: "Data Speaks" },
      { src: "/landing/track-robotics.png", label: "Robotic and Automation" },
      { src: "/landing/track-society.png", label: "AI for Society" },
    ],
  },
];
