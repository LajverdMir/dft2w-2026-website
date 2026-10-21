export type NavbarMenuItem = {
  href: string;
  label: string;
};

export type NavbarItemProps = {
  href: string;
  label: string;
  hasMenu?: boolean;
  isActive?: boolean;
  items?: NavbarMenuItem[];
};
