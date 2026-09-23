import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, telLink, whatsappLink } from "@/config/site";

/**
 * Channel CTAs – one component owns each channel so the number, label, tracking
 * hook and pre-filled message cannot drift across the site (OS lesson: Vision
 * Motors' CallButton).
 */

export function CallButton({
  size = "md",
  onDark,
  fullWidth,
  variant = "secondary",
}: {
  size?: "md" | "lg";
  onDark?: boolean;
  fullWidth?: boolean;
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <Button
      href={telLink}
      variant={variant}
      size={size}
      onDark={onDark}
      fullWidth={fullWidth}
      data-cta="call"
      leadingIcon={<Phone className="h-4 w-4" aria-hidden="true" />}
    >
      <span className="sr-only">Call A&S Wholesalers on </span>
      {site.contact.phone.label}
    </Button>
  );
}

export function WhatsAppButton({
  size = "md",
  fullWidth,
  message,
  label = "WhatsApp us",
}: {
  size?: "md" | "lg";
  fullWidth?: boolean;
  message?: string;
  label?: string;
}) {
  return (
    <Button
      href={whatsappLink(message)}
      variant="whatsapp"
      size={size}
      fullWidth={fullWidth}
      data-cta="whatsapp"
      leadingIcon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
    >
      {label}
    </Button>
  );
}
