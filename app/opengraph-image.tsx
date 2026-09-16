import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const runtime = "edge";
export const alt = "A&S Wholesalers — Haier air conditioning, supplied from Centurion";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded OG image (real file at /opengraph-image). System fonts for robustness. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F1829",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 14, height: 56, background: "#C1121F", borderRadius: 3 }} />
          <div style={{ color: "#FBFBFC", fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>
            A&S Wholesalers
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#FBFBFC",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            Haier air conditioning,{" "}
            <span style={{ color: "#F04858" }}>supplied</span> from Centurion.
          </div>
          <div style={{ marginTop: 26, color: "#AEB7C6", fontSize: 28 }}>
            Wall-mounted · Multi-split · Ducted · Cassette · Solar
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "#AEB7C6", fontSize: 24 }}>
            {site.address.city}, {site.address.province}
          </div>
          <div style={{ color: "#5E6779", fontSize: 22, letterSpacing: 2, textTransform: "uppercase" }}>
            answholesalers.co.za
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
