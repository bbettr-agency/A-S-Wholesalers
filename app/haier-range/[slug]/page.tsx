import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RangeDetailView } from "@/components/sections/range-detail-view";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { rangeDetail, familyBySlug, detailFor } from "@/config/catalogue";

export function generateStaticParams() {
  return Object.values(rangeDetail).map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const family = familyBySlug(params.slug);
  const detail = family ? detailFor(family.id) : undefined;
  if (!family || !detail) return buildMetadata({ noindex: true });
  return buildMetadata({
    title: detail.seoTitle,
    description: detail.seoDescription,
    path: `/haier-range/${detail.slug}`,
  });
}

export default function RangePage({ params }: { params: { slug: string } }) {
  const family = familyBySlug(params.slug);
  const detail = family ? detailFor(family.id) : undefined;
  if (!family || !detail) notFound();

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Haier Range", url: "/haier-range" },
    { name: family.name, url: `/haier-range/${detail.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            productSchema({
              name: family.name,
              description: detail.overview,
              image: family.image,
              models: family.models,
              specs: detail.specs,
              url: `/haier-range/${detail.slug}`,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <RangeDetailView family={family} detail={detail} />
    </>
  );
}
