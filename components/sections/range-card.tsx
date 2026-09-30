import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ModelCode } from "@/components/ui/data";
import type { ProductFamily } from "@/config/products";
import type { RangeDetail } from "@/config/catalogue";

/**
 * RangeCard – a single product-led card linking to a range page. One card, one
 * hairline ring: the white product render merges into the card (no box-in-box).
 */
export function RangeCard({
  family,
  detail,
  priority,
}: {
  family: ProductFamily;
  detail: RangeDetail;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/haier-range/${detail.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-brand-line transition-shadow duration-300 ease-brand hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus"
    >
      <div className="relative aspect-[4/3] w-full">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_56%_at_50%_46%,rgba(27,42,74,0.05),transparent_70%)]" />
        <Image
          src={family.image}
          alt={family.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 380px"
          quality={86}
          className="object-contain p-5 transition-transform duration-500 ease-brand group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-brand-line p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-steel">{detail.positioning}</p>
        <h3 className="mt-1.5 font-display text-lg font-semibold text-brand-ink">{family.name}</h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="tnum text-sm font-semibold text-brand-primary">{family.capacity}</span>
          <span className="text-brand-line">·</span>
          <span className="tnum text-xs text-brand-steel">{family.energyClass}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {family.models.slice(0, 2).map((m) => (
            <ModelCode key={m}>{m}</ModelCode>
          ))}
          {family.models.length > 2 ? <span className="text-xs text-brand-steel">+{family.models.length - 2}</span> : null}
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary transition-colors group-hover:text-brand-accent">
          View range
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-brand group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
