import type { Metadata } from "next";
import { HomePage } from "@/views/home-page";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({ path: "/" });

export default function Page() {
  return <HomePage />;
}
