import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Container – 12-col field, max-w-7xl, token gutters. */
export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return <Tag className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}>{children}</Tag>;
}

type Tone = "bone" | "mist" | "ink";

const toneClasses: Record<Tone, string> = {
  bone: "bg-brand-bone text-brand-ink",
  mist: "bg-brand-mist text-brand-ink",
  ink: "bg-brand-ink text-brand-bone",
};

/** Section – the tonal building block. Surface rhythm never repeats a tone twice. */
export function Section({
  children,
  tone = "bone",
  className,
  id,
  compact,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  compact?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        toneClasses[tone],
        compact ? "py-14 md:py-20" : "py-20 md:py-28",
        "scroll-mt-24",
        className,
      )}
    >
      {children}
    </section>
  );
}
