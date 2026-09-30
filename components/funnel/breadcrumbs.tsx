import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  href?: string;
}

/** Visual breadcrumb trail. Emit BreadcrumbList schema separately (lib/schema). */
export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((it, i) => (
          <li key={`${it.name}-${i}`} className="flex items-center gap-1.5">
            {i > 0 ? <ChevronRight className="h-3.5 w-3.5 text-brand-steel" aria-hidden="true" /> : null}
            {it.href ? (
              <Link href={it.href} className="text-brand-steel transition-colors hover:text-brand-primary">
                {it.name}
              </Link>
            ) : (
              <span className="font-medium text-brand-graphite" aria-current="page">
                {it.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
