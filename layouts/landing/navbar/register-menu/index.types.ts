export type RegisterMenuItem = {
  href: string;
  label: string;
  description: string;
  iconPath: string;
};

export type RegisterMenuProps = {
  // "bar" = desktop header (floating panel), "drawer" = mobile menu (expands in place)
  variant: "bar" | "drawer";
};
