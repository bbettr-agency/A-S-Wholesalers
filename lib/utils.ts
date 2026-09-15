/** Tiny className joiner (no runtime dependency — OS keeps JS minimal). */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
