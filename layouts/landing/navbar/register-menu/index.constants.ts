import { RegisterMenuItem } from "./index.types";

export const REGISTER_MENU_LABEL = "Register / Participate";

export const REGISTER_MENU_ITEMS: RegisterMenuItem[] = [
  {
    href: "/register/workshop",
    label: "Workshop",
    description: "Sign up for a DFT²W workshop",
    iconPath: "M3 4h18M5 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4M12 15v4m-4 2 4-2 4 2",
  },
  {
    href: "/register/participant",
    label: "Register",
    description: "Register as a participant",
    iconPath:
      "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Zm0 9 2 2 4-4",
  },
];
