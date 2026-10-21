import { BankDetail, RegistrationFeeRow, RegistrationGuideline } from "./index.types";

export const REGISTRATION_HERO_SRC = "/landing/hero-bg.png";
export const REGISTRATION_HERO_ALT = "DFT²W Registration countdown";
export const REGISTRATION_CLOSES_AT = "2026-11-10T23:59:59+05:00";
export const REGISTRATION_CLOSES_LABEL = "Registration Closes in";

export const REGISTRATION_FEES_TITLE = "Conference Registration Fees";
export const REGISTRATION_FEE_ROWS: RegistrationFeeRow[] = [
  {
    category: "Overseas Professional",
    regular: "US $300",
    ieee: "US $200",
  },
  {
    category: "Local Professional",
    regular: "PKR 15,000",
    ieee: "PKR 7,000",
  },
  {
    category: "International Author",
    regular: "US $150",
    ieee: "US $100",
  },
  {
    category: "Local Author",
    regular: "PKR 10,000",
    ieee: "PKR 7,000",
  },
  {
    category: "Attendees",
    regular: "PKR 7,000",
    ieee: "PKR 7,000",
    spanFees: true,
  },
];

export const REGISTRATION_GUIDELINES_TITLE = "Submission Guidelines";
export const REGISTRATION_GUIDELINES: RegistrationGuideline[] = [
  {
    title: "Guidelines for Authors",
    body: "The conference is soliciting full-length papers on all the identified areas of research. Submissions should clearly establish the research contribution, its relevance, importance, and novelty.",
  },
  {
    title: "The Submission Process",
    body: "Once a paper is submitted to the online conference system, it will undergo blind review by three peers. As per IEEE guidelines, all papers will undergo mandatory plagiarism detection. Following the review of submitted papers, successful authors will be invited to attend and present their work at ICoDT² 2026.",
    callout: {
      tone: "warning",
      text: "All authors are required to submit a blind version of paper. Remove identifying information and affiliations prior to submission.",
    },
  },
  {
    title: "Plagiarism Testing",
    body: "All papers accepted for publication must clear multiple rounds of plagiarism tests. As per HEC policy, the similarity index must not be more than 18% with single source similarity no more than 5%. Authors should check their camera-ready prior to submission.",
  },
  {
    title: "Camera Ready Instructions",
    body: "Authors of accepted papers should address reviewer comments and strictly follow the IEEE conference template. Pay particular attention to the correctness of the A4 page size, paper title, author names, affiliations, emails, etc., because once published these cannot be changed.",
    callout: {
      tone: "info",
      text: "Please send your camera ready for verification/approval to: icodt2-publications@seecs.edu.pk. Authors must mention their paper ID and title in all correspondence.",
    },
  },
  {
    title: "Paper Presentation Instructions",
    body: "Authors are instructed to create a presentation of 10-12 minutes length. After the conclusion of the presentation, there will be a 5-minute question-answer session. IEEE requires that a paper must be presented if it is to appear in the conference proceedings.",
  },
];

export const REGISTRATION_TEMPLATE_HINT =
  "Manuscript Templates for Conference Proceedings can be downloaded from:";
export const REGISTRATION_TEMPLATE_LABEL = "IEEE Conference template";
export const REGISTRATION_TEMPLATE_HREF =
  "https://www.ieee.org/conferences/publishing/templates.html";

export const REGISTRATION_BANK_TITLE = "Bank Details";
export const REGISTRATION_BANK_DETAILS: BankDetail[] = [
  {
    label: "Account Name",
    value: "SEECS Seminar/Workshops/Short Courses Account",
  },
  { label: "Account Number", value: "22927000746401" },
  { label: "IBAN", value: "PK87 HABB 0022927000746401" },
  { label: "SWIFT Code", value: "HABBPKKA007" },
  { label: "Bank Name", value: "Habib Bank Limited (HBL)" },
  {
    label: "Branch",
    value: "NUST Branch, Sector H-12, Islamabad (Pakistan)",
  },
];

export const REGISTRATION_CONFIRM_TITLE = "Confirm Your Registration";
export const REGISTRATION_CONFIRM_INTRO =
  "Once the fee has been paid, please complete the official registration form and attach your proof of payment.";
export const REGISTRATION_CONFIRM_STEPS = [
  "Transfer the applicable fee",
  "Keep your payment receipt",
  "Submit the registration form",
];
export const REGISTRATION_FORM_LABEL = "Open Registration Form";
export const REGISTRATION_FORM_HREF =
  "https://docs.google.com/forms/d/e/1FAIpQLScipiAldcuJWFVnk7IUjrn-KNKd2PmtT4ytLsL8RT5p0oZelA/viewform";

export const REGISTRATION_AUTHOR_TITLE =
  "Author & Attendee Registration Guidelines";
export const REGISTRATION_AUTHOR_RULES = [
  "The conference is offering discounted fees and includes exclusive priority access to all conference sessions, keynotes, networking sessions, opening ceremony, closing ceremony, lunches and tea breaks.",
  "Registration covers the inclusion of only one paper in the proceedings.",
  "An author having multiple accepted papers will need to submit independent registration fees for each paper.",
  "One registration entitles only one author to attend the conference.",
  "If any co-author wishes to attend the conference, they will need to submit a separate registration fee.",
  "Students must submit a valid student ID at the time of registration.",
  "IEEE members must provide a valid IEEE membership number. The membership number will be validated for being active and correct.",
  "Additional fees may apply for attending workshops.",
];
