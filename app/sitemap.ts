import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { rangeDetail } from "@/config/catalogue";

/**
 * Sitemap – all real, indexable routes: home, the Haier Range index, every
 * individual range page, Trade Supply, About and Contact. /api and /thank-you are
 * excluded.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (p: string) => (p === "" ? site.url : `${site.url}${p}`);

  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/haier-range", priority: 0.9, freq: "monthly" },
    { path: "/trade-supply", priority: 0.8, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "yearly" },
    { path: "/contact", priority: 0.7, freq: "yearly" },
  ];

  const rangeRoutes = Object.values(rangeDetail).map((d) => ({
    url: url(`/haier-range/${d.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes.map((r) => ({ url: url(r.path), lastModified: now, changeFrequency: r.freq, priority: r.priority })),
    ...rangeRoutes,
  ];
}
