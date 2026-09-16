import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The datasheet motif — the ownable A&S signature. Model codes, capacities and
 * dimension rules rendered as real spec data in monospace, lifted from the Haier
 * catalogue's own technical language.
 */

/** ModelCode — a monospace model-number chip (e.g. ES09QF32I). */
export function ModelCode({ children, onDark }: { children: ReactNode; onDark?: boolean }) {
  return (
    <span
      className={cn(
        "tnum inline-flex items-center rounded font-medium text-[0.7rem] uppercase tracking-wide px-1.5 py-0.5 ring-1",
        onDark
          ? "text-brand-fog ring-white/15"
          : "text-brand-graphite ring-brand-line bg-brand-bone",
      )}
    >
      {children}
    </span>
  );
}

/** DataChip — a labelled spec value (capacity, BTU, class). */
export function DataChip({
  label,
  value,
  onDark,
  className,
}: {
  label: string;
  value: string;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg px-3 py-2 ring-1",
        onDark ? "bg-white/[0.06] ring-white/12" : "bg-brand-bone ring-brand-line",
        className,
      )}
    >
      <div className={cn("font-medium text-[0.65rem] uppercase tracking-[0.14em]", onDark ? "text-brand-fog" : "text-brand-steel")}>
        {label}
      </div>
      <div className={cn("tnum mt-0.5 font-display text-sm font-bold", onDark ? "text-brand-bone" : "text-brand-ink")}>
        {value}
      </div>
    </div>
  );
}

/**
 * DimensionRule — a hairline "measurement" line with end ticks, echoing the
 * datasheet dimension lines. Used as a restrained section-structure accent.
 */
export function DimensionRule({ label, className, onDark }: { label?: string; className?: string; onDark?: boolean }) {
  const line = onDark ? "bg-white/20" : "bg-brand-line";
  const tick = onDark ? "bg-white/30" : "bg-brand-steel/50";
  const text = onDark ? "text-brand-fog" : "text-brand-steel";
  return (
    <div className={cn("flex items-center gap-3", className)} aria-hidden="true">
      <span className={cn("h-2 w-px", tick)} />
      <span className={cn("h-px flex-1", line)} />
      {label ? <span className={cn("font-medium text-[0.65rem] uppercase tracking-[0.2em]", text)}>{label}</span> : null}
      <span className={cn("h-px flex-1", line)} />
      <span className={cn("h-2 w-px", tick)} />
    </div>
  );
}
