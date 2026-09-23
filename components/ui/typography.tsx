import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Eyebrow – caps, wide tracking. A label, never a heading. */
export function Eyebrow({
  children,
  onDark,
  className,
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-medium text-xs uppercase tracking-[0.2em]",
        onDark ? "text-brand-fog" : "text-brand-steel",
        className,
      )}
    >
      {children}
    </p>
  );
}

/**
 * SectionHeading – eyebrow → H2 → lead. Grouping is visible: eyebrow sits tight to
 * the heading, the lead a step further. One accent word max is handled by callers.
 */
export function SectionHeading({
  eyebrow,
  heading,
  lead,
  onDark,
  align = "left",
  as: Tag = "h2",
  className,
  maxWidth = "max-w-2xl",
}: {
  eyebrow?: string;
  heading: ReactNode;
  lead?: ReactNode;
  onDark?: boolean;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  maxWidth?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "", maxWidth, className)}>
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <Tag
        className={cn(
          "font-display font-bold tracking-tight",
          Tag === "h2"
            ? "mt-3 text-3xl leading-[1.08] md:text-4xl lg:text-5xl"
            : "mt-3 text-xl leading-tight md:text-2xl",
          onDark ? "text-brand-bone" : "text-brand-ink",
        )}
      >
        {heading}
      </Tag>
      {lead ? (
        <p
          className={cn(
            "mt-4 max-w-prose text-base leading-relaxed md:text-lg",
            align === "center" && "mx-auto",
            onDark ? "text-brand-fog" : "text-brand-graphite",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/** Accent – the single accent-coloured span allowed once per heading. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-brand-accent">{children}</span>;
}
