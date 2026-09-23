/**
 * Enquiry configuration – the primary conversion, now a TRADE enquiry.
 *
 * The form qualifies a potential wholesale/trade lead (retailer, reseller,
 * installer / HVAC business) without being long enough to kill conversion. Built
 * for later GoHighLevel webhook integration (POST /api/enquiry → GHL_WEBHOOK_URL).
 * No fake backend; the demo validates and confirms. See app/api/enquiry/route.ts.
 */

export interface EnquiryField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required: boolean;
  /** Full-width in the two-column grid (selects for interest + the message). */
  full?: boolean;
  /** Options for an uncontrolled select (business type). */
  options?: readonly { value: string; label: string }[];
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel";
  placeholder?: string;
}

/** Business-type options – the trade audience A&S works with. */
export const businessTypeOptions = [
  { value: "", label: "Type of business" },
  { value: "retailer", label: "Retailer / dealer" },
  { value: "reseller", label: "Reseller" },
  { value: "installer", label: "Installer / HVAC business" },
  { value: "other", label: "Other trade" },
] as const;

/** Haier range of interest (mirrors the discovery selector so context is preserved). */
export const interestOptions = [
  { value: "", label: "Which Haier range?" },
  { value: "wall", label: "Wall-mounted split" },
  { value: "multi", label: "Multi-split" },
  { value: "ducted", label: "Ducted" },
  { value: "cassette", label: "Cassette" },
  { value: "solar", label: "Solar" },
  { value: "full-range", label: "The full range" },
  { value: "not-sure", label: "Not sure yet – advise me" },
] as const;

export const enquiryFields: EnquiryField[] = [
  { name: "name", label: "Your name", type: "text", required: true, autoComplete: "name", inputMode: "text" },
  { name: "company", label: "Business name", type: "text", required: true, autoComplete: "organization" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", inputMode: "email" },
  { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", inputMode: "tel" },
  { name: "businessType", label: "Business type", type: "select", required: false, options: businessTypeOptions },
  { name: "location", label: "Where are you based?", type: "text", required: false, autoComplete: "address-level2", placeholder: "Town / city" },
  { name: "interest", label: "Haier range of interest", type: "select", required: false, full: true },
  {
    name: "message",
    label: "Your enquiry",
    type: "textarea",
    required: false,
    full: true,
    placeholder: "e.g. we run a retail store in Pretoria and want to add Haier inverters to our range.",
  },
];

export const enquiryCopy = {
  eyebrow: "Trade enquiry",
  heading: "Looking to stock Haier? Let's talk.",
  lead: "Tell us about your business and the Haier ranges you're interested in stocking. We'll come back to discuss supply.",
  submit: "Send trade enquiry",
  submitting: "Sending…",
  reassurance: "No obligation · We reply during business hours · Or reach us on WhatsApp",
  consent:
    "By sending this enquiry you agree that A&S Wholesalers may contact you about your request (POPIA).",
  successHeading: "Trade enquiry received.",
  successBody:
    "Thanks – we've got your details and we'll be in touch during business hours to discuss supply. Need us sooner? Message us on WhatsApp or call the branch.",
  errorBody:
    "Something went wrong sending that. Please try again, or reach us directly on WhatsApp or by phone.",
} as const;
