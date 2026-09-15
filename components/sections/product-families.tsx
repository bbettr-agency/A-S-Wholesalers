import Image from "next/image";
import { Container, Section } from "@/components/ui/layout";
import { SectionHeading, Eyebrow } from "@/components/ui/typography";
import { ModelCode, DataChip } from "@/components/ui/data";
import { Reveal, Stagger } from "@/engine/motion";
import { cn } from "@/lib/utils";
import { families, type ProductFamily } from "@/config/products";
import { products } from "@/config/home";
import { EnquireLink } from "@/components/funnel/enquire-link";

const wallSolar = ["aeropure", "ai-eco", "turbo", "solar-eco"];
const commercial = ["multi-odu", "lsp-duct", "msp-duct", "mini-cassette", "cassette"];

function byIds(ids: string[]): ProductFamily[] {
  return ids.map((id) => families.find((f) => f.id === id)!).filter(Boolean);
}

/** Large featured product card (Aeropure) — the editorial anchor. */
function FeaturedCard({ f }: { f: ProductFamily }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-brand-line transition-shadow duration-300 ease-brand hover:shadow-card md:flex-row">
      <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-brand-mist to-white md:aspect-auto md:w-1/2">
        <Image src={f.image} alt={f.imageAlt} fill sizes="(max-width:768px) 100vw, 480px" className="object-contain p-4" />
        <span className="absolute left-4 top-4 rounded-full bg-brand-accent px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-white">
          Flagship
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brand-steel">{f.line}</p>
          <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-brand-ink">{f.name}</h3>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-brand-graphite">{f.blurb}</p>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <DataChip label="Capacity" value={f.capacity} />
            <DataChip label="BTU" value={f.btu} />
            <DataChip label="Class" value={f.energyClass} />
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {f.models.map((m) => (
              <ModelCode key={m}>{m}</ModelCode>
            ))}
          </div>
        </div>
        <div className="mt-6 border-t border-brand-line pt-4">
          <EnquireLink interest={f.solution} label={`Enquire about the ${f.name}`} />
        </div>
      </div>
    </div>
  );
}

/** Standard product card. */
function ProductCard({ f }: { f: ProductFamily }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-brand-line transition-shadow duration-300 ease-brand hover:shadow-card">
      <div className="relative aspect-[5/3] w-full bg-gradient-to-b from-brand-mist to-white">
        <Image src={f.image} alt={f.imageAlt} fill sizes="(max-width:768px) 100vw, 360px" className="object-contain p-3 transition-transform duration-500 ease-brand group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-brand-steel">{f.line}</p>
        <h3 className="mt-1.5 font-display text-lg font-semibold text-brand-ink">{f.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-graphite">{f.blurb}</p>
        <div className="mt-4 flex items-center gap-2">
          <span className="tnum text-sm font-semibold text-brand-primary">{f.capacity}</span>
          <span className="text-brand-line">·</span>
          <span className="tnum text-xs text-brand-steel">{f.btu}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {f.models.slice(0, 3).map((m) => (
            <ModelCode key={m}>{m}</ModelCode>
          ))}
          {f.models.length > 3 ? <span className="text-xs text-brand-steel">+{f.models.length - 3}</span> : null}
        </div>
        <div className="mt-4 border-t border-brand-line pt-3">
          <EnquireLink interest={f.solution} label="Enquire" />
        </div>
      </div>
    </div>
  );
}

export function ProductFamilies() {
  const [featured, ...restWall] = byIds(wallSolar);
  const commercialFamilies = byIds(commercial);

  return (
    <Section tone="bone" id="products">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={products.eyebrow} heading={products.heading} lead={products.lead} maxWidth="max-w-2xl" />
        </Reveal>

        {/* Wall-mounted & solar */}
        <div className="mt-12">
          <Eyebrow className="mb-5">{products.residentialHeading}</Eyebrow>
          <Reveal>
            <FeaturedCard f={featured} />
          </Reveal>
          <Stagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {restWall.map((f) => (
              <Reveal key={f.id} preset="fadeUpItem">
                <ProductCard f={f} />
              </Reveal>
            ))}
          </Stagger>
        </div>

        {/* Commercial */}
        <div className="mt-16">
          <Eyebrow className="mb-5">{products.commercialHeading}</Eyebrow>
          <Stagger className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3")}>
            {commercialFamilies.map((f) => (
              <Reveal key={f.id} preset="fadeUpItem">
                <ProductCard f={f} />
              </Reveal>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
