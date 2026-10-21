export type RegistrationFeeRow = {
  category: string;
  regular: string;
  ieee: string;
  spanFees?: boolean;
};

export type RegistrationCallout = {
  tone: "warning" | "info";
  text: string;
};

export type RegistrationGuideline = {
  title: string;
  body: string;
  callout?: RegistrationCallout;
};

export type BankDetail = {
  label: string;
  value: string;
};
