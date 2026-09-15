/**
 * Enquiry configuration — the primary conversion.
 *
 * The form is built for later GoHighLevel webhook integration (POST /api/enquiry
 * → GHL_WEBHOOK_URL). Fields map to what GHL needs plus attribution. No fake
 * backend: in the demo the endpoint validates and confirms; when the webhook env
 * is set it forwards. See app/api/enquiry/route.ts.
 */

export interface EnquiryField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required: boolean;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel";
  placeholder?: string;
}

/** Solution-interest options (mirror the discovery selector so context is preserved). */
export const interestOptions = [
  { value: "", label: "What are you looking at?" },
  { value: "wall", label: "Wall-mounted split" },
  { value: "multi", label: "Multi-split" },
  { value: "ducted", label: "Ducted" },
  { value: "cassette", label: "Cassette" },
  { value: "solar", label: "Solar" },
  { value: "not-sure", label: "Not sure yet — need advice" },
] as const;

export const enquiryFields: EnquiryField[] = [
  { name: "name", label: "Your name", type: "text", required: true, autoComplete: "name", inputMode: "text" },
  { name: "company", label: "Company (optional)", type: "text", required: false, autoComplete: "organization" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", inputMode: "email" },
  { name: "phone", label: "Best number to reach you", type: "tel", required: true, autoComplete: "tel", inputMode: "tel" },
  { name: "interest", label: "Solution of interest", type: "select", required: false },
  {
    name: "message",
    label: "What do you need?",
    type: "textarea",
    required: false,
    placeholder: "e.g. two bedrooms and an open-plan living area in Centurion, or a 200 m² retail floor.",
  },
];

export const enquiryCopy = {
  eyebrow: "Send an enquiry",
  heading: "Tell us the space. We'll point you to the unit.",
  lead: "Residential or commercial — send the room, the site or the model you're after and we'll come back with the right Haier fit.",
  submit: "Send enquiry",
  submitting: "Sending…",
  reassurance: "No obligation · We reply during business hours · Or reach us on WhatsApp",
  consent:
    "By sending this enquiry you agree that A&S Wholesalers may contact you about your request (POPIA).",
  successHeading: "Enquiry received.",
  successBody:
    "Thanks — we've got your details and we'll be in touch during business hours. Need us sooner? Message us on WhatsApp or call the branch.",
  errorBody:
    "Something went wrong sending that. Please try again, or reach us directly on WhatsApp or by phone.",
} as const;
