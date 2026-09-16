import type { Config } from "tailwindcss";

/**
 * A&S Wholesalers — brand token system (Bbettr Website OS v2.7).
 * Structure per SYSTEM/01-DESIGN-TOKENS.md; values are A&S-specific.
 *
 * Identity: A&S navy carries structure; a single reserved signal-red is the
 * conversion accent (primary CTA only); WhatsApp green is the only other action
 * colour. Light, near-monochrome field. Contrast pairs verified at token time.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./views/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
    "./engine/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary — A&S navy: structure, links, icons, headings
          primary: "#1B2A4A",
          primaryDark: "#12203B",
          primaryLight: "#2F4676",
          // Accent — conversion signal-red: PRIMARY CTA ONLY
          accent: "#C1121F",
          accentDark: "#9E0E19",
          // Ink scale (cool navy-tinted, dark → lighter)
          ink: "#0F1829", // body text on light; dark-spotlight background
          charcoal: "#1B2740",
          graphite: "#3C4658", // secondary text
          steel: "#5E6779", // muted micro labels on light (≥4.5:1 on bone)
          fog: "#AEB7C6", // muted text on dark surfaces
          // Light surfaces
          cloud: "#E7EBF1", // subtle fills / deeper light
          mist: "#F1F3F7", // tinted surface (section rhythm)
          bone: "#FBFBFC", // base light surface
          // Structure
          line: "#DFE4EC", // hairline borders/dividers
          // Action / channel
          whatsapp: "#25D366",
          whatsappDark: "#1EBE5A",
        },
        // Semantic states (never decoration)
        state: {
          error: "#DC2626",
          success: "#16A34A",
          focus: "#2E6BE6",
        },
      },
      fontFamily: {
        // Single primary typeface across the whole site. display/body/mono all map
        // to Poppins so any existing utility renders Poppins; hierarchy comes from
        // weight, size and tracking — never a second face.
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-poppins)", "system-ui", "sans-serif"],
        mono: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        card: "0 20px 50px -25px rgba(15,24,41,0.25)",
        glow: "0 20px 60px -20px rgba(27,42,74,0.35)",
        accent: "0 18px 50px -20px rgba(193,18,31,0.30)",
        ink: "0 30px 80px -30px rgba(8,12,22,0.85)",
        product: "0 44px 64px -34px rgba(15,24,41,0.32)",
        lift: "0 12px 30px -16px rgba(15,24,41,0.30)",
      },
      maxWidth: {
        prose: "65ch",
      },
      letterSpacing: {
        eyebrow: "0.2em",
      },
      transitionTimingFunction: {
        // The single sitewide ease (mirrors ENGINE/motion EASE) for CSS transitions
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
