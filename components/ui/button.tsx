import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "md" | "lg";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: string;
  variant?: Variant;
  size?: Size;
  onDark?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

// The single ease + transitions used on every interactive element.
const base =
  "group inline-flex items-center justify-center gap-2 rounded-lg font-body font-medium " +
  "transition-[transform,box-shadow,background-color,color,border-color] duration-200 ease-brand " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus " +
  "active:translate-y-px disabled:pointer-events-none disabled:opacity-50 select-none";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

function variantClasses(variant: Variant, onDark: boolean): string {
  switch (variant) {
    case "primary":
      return "bg-brand-accent text-white shadow-accent hover:bg-brand-accentDark hover:-translate-y-0.5";
    case "secondary":
      return onDark
        ? "border border-white/25 text-white hover:bg-white/10 hover:border-white/40"
        : "border border-brand-primary/20 text-brand-primary hover:border-brand-primary/40 hover:bg-brand-primary/[0.04]";
    case "ghost":
      return onDark ? "text-white/90 hover:text-white" : "text-brand-primary hover:text-brand-primaryDark";
    case "whatsapp":
      // WhatsApp green with dark ink label = 7.6:1 (white-on-green fails contrast).
      return "bg-brand-whatsapp text-brand-ink font-semibold hover:bg-brand-whatsappDark hover:-translate-y-0.5 shadow-lift";
  }
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  onDark = false,
  fullWidth,
  className,
  children,
  leadingIcon,
  trailingIcon,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(base, sizes[size], variantClasses(variant, onDark), fullWidth && "w-full", className);

  const inner = (
    <>
      {leadingIcon}
      <span>{children}</span>
      {trailingIcon}
    </>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    // onClick is valid on anchors/Link; other button-only attrs are not spread here.
    const linkClick = onClick as unknown as React.MouseEventHandler<HTMLAnchorElement> | undefined;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          onClick={linkClick}
          {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={linkClick}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {inner}
    </button>
  );
}
