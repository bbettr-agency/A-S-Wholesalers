import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/**
 * Sitemap — only real, indexable pages. The placeholder routes (/products, /about…)
 * are noindex "in progress" pages and are deliberately excluded until built.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
