import type { Metadata } from "next";
import { site } from "@/config/site";
import { seo } from "@/config/seo";

/**
 * buildMetadata — one canonical, OG- and Twitter-complete Metadata object per page.
 * OG image is produced by app/opengraph-image.tsx (real file at build).
 */
export function buildMetadata(opts?: {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
}): Metadata {
  const path = opts?.path ?? "/";
  const url = new URL(path, site.url).toString();
  const title = opts?.title ?? seo.titleDefault;
  const description = opts?.description ?? seo.description;

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    keywords: seo.keywords as unknown as string[],
    alternates: { canonical: url },
    robots: opts?.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      type: seo.og.type,
      siteName: seo.og.siteName,
      title,
      description,
      url,
      locale: "en_ZA",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
