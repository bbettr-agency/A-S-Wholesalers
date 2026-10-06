/**
 * Distributor proposition – the client-confirmed trade facts (2026-10).
 *
 * TRUTH DISCIPLINE: every value here is now owner-confirmed and, for the
 * authorised-distributor status, backed by the Haier "Certificate of
 * Authorisation" held in /public/documents. Still NOT stated (unconfirmed):
 * published prices, percentage discounts, pricing tiers, MOQ, credit terms,
 * delivery turnaround/cost, "free delivery", exclusivity, "official". Warranty
 * terms are Haier's; claim procedures/exclusions are not invented.
 */

/** The Haier Certificate of Authorisation – A&S's strongest credibility asset. */
export const certificate = {
  eyebrow: "Authorised Haier distribution",
  heading: "Authorised to distribute Haier.",
  // Printed wording on the certificate, used verbatim so copy and document agree.
  statement: "Authorised Distributor of Haier Air Conditioners",
  body: "A&S Wholesalers is an authorised distributor of Haier Air Conditioners, supplying the range to independent retailers and trade customers. The authorisation is issued and signed by Haier South Africa.",
  issuedBy: "Issued by Haier South Africa",
  viewLabel: "View distribution certificate",
  image: "/documents/haier-authorised-distributor-certificate.webp",
  imageAlt:
    "Haier Certificate of Authorisation naming A&S Wholesalers an Authorised Distributor of Haier Air Conditioners, signed by Haier South Africa",
  pdf: "/documents/haier-authorised-distributor-certificate.pdf",
};

/** Confirmed distributor support / assurance points for the trade. */
export const support = {
  eyebrow: "Why buy from A&S",
  heading: "A distributor that stands behind the range.",
  lead: "More than a price – A&S supplies the Haier range with the delivery, parts and after-sales support a trade business needs.",
  points: [
    {
      title: "Authorised Haier distributor",
      body: "An authorised distributor of Haier Air Conditioners – the range comes to you through the proper channel.",
    },
    {
      title: "Nationwide delivery available",
      body: "A&S delivers across South Africa. Delivery is arranged to suit the order – talk to us about your requirements.",
    },
    {
      title: "Trade pricing on request",
      body: "Wholesale pricing is based on your requirements and quantities. Contact A&S to discuss pricing for your business.",
    },
    {
      title: "Haier spare parts",
      body: "Genuine Haier spare parts are available through A&S, including the parts your after-sales and warranty work needs.",
    },
    {
      title: "After-sales support",
      body: "A&S supports what it supplies – real help with product and warranty requirements after the sale.",
    },
    {
      title: "A real warranty structure",
      body: "Haier's manufacturer warranty backs every unit, from the full unit through to the compressor.",
    },
  ],
};

/** Haier manufacturer warranty – client-confirmed terms. Claim detail on enquiry. */
export const warranty = {
  eyebrow: "Backed by warranty",
  heading: "A Haier warranty behind every unit.",
  lead: "Every Haier unit A&S supplies carries Haier's manufacturer warranty – a genuine assurance you can pass on to your own customers.",
  terms: [
    { years: "2", unit: "years", label: "Full unit" },
    { years: "5", unit: "years", label: "PC board & electrics" },
    { years: "10", unit: "years", label: "Compressor" },
  ],
  note: "Warranty terms and conditions apply. Contact A&S for full warranty information.",
};

/** How a retailer/reseller starts – contact-first, never a rigid online sign-up. */
export const becomeStockist = {
  eyebrow: "Become a stockist",
  heading: "Start stocking Haier in three steps.",
  lead: "There's no rigid online sign-up. The best first step is simply to make contact – A&S will take your business through the right process from there.",
  steps: [
    {
      n: "01",
      title: "Tell us about your business",
      body: "Send an enquiry with who you are, how you operate and the Haier ranges you're interested in stocking.",
    },
    {
      n: "02",
      title: "Discuss your requirements",
      body: "A&S comes back to understand your requirements and the quantities you're looking at, and to talk through pricing.",
    },
    {
      n: "03",
      title: "A&S sets you up to supply",
      body: "We take you through the appropriate supply arrangement for your business and get the range moving to your customers.",
    },
  ],
};

/** Downloadable Haier catalogue (the actual supplied catalogue). */
export const catalogue = {
  eyebrow: "The full range, on paper",
  heading: "Download the Haier catalogue.",
  body: "The complete Haier air-conditioning catalogue – every range, model and specification you can offer your customers.",
  cta: "Download the Haier catalogue",
  href: "/documents/haier-air-conditioning-catalogue.pdf",
};

/** Concise, verified trade FAQ. */
export const faq = {
  eyebrow: "Trade FAQ",
  heading: "Questions from the trade.",
  items: [
    {
      q: "Is A&S an authorised Haier distributor?",
      a: "Yes. A&S Wholesalers is an authorised distributor of Haier Air Conditioners, authorised by Haier South Africa – you can view the certificate on this site.",
    },
    {
      q: "How do I become an A&S trade customer?",
      a: "Start by contacting A&S. We'll learn about your business and requirements and take you through the appropriate supply process – there's no rigid online sign-up.",
    },
    {
      q: "Do you offer trade pricing?",
      a: "Yes. Wholesale pricing is based on your requirements and quantities. Contact A&S to discuss pricing for your business.",
    },
    {
      q: "Do you deliver?",
      a: "A&S offers nationwide delivery across South Africa. Delivery is arranged to suit the order – tell us what you need and we'll arrange it.",
    },
    {
      q: "Can I buy a single unit directly from A&S?",
      a: "A&S is a wholesale/trade supplier. If you need a single unit for your home, contact us and we'll point you to one of the retailers we supply.",
    },
    {
      q: "Does A&S supply Haier spare parts?",
      a: "Yes. Genuine Haier spare parts are available through A&S, including parts for after-sales and warranty requirements.",
    },
    {
      q: "What warranty applies?",
      a: "Haier's manufacturer warranty: 2 years on the full unit, 5 years on the PC board and electrics, and 10 years on the compressor. Terms and conditions apply – contact A&S for full warranty information.",
    },
    {
      q: "Does A&S provide after-sales support?",
      a: "Yes. A&S provides after-sales support to its customers, particularly around product and warranty requirements.",
    },
  ],
};

/** One restrained line that routes home/retail buyers without being unwelcoming. */
export const retailRouting = {
  text: "Buying a single unit for your home?",
  linkText: "We'll point you to a retailer we supply.",
};
