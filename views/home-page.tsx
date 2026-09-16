import { Hero } from "@/components/sections/hero";
import { Positioning } from "@/components/sections/positioning";
import { RangeDiscovery } from "@/components/sections/range-discovery";
import { WhyHaier } from "@/components/sections/why-haier";
import { AirflowGallery } from "@/components/sections/airflow-gallery";
import { ResidentialCommercial } from "@/components/sections/residential-commercial";
import { SupplierValue } from "@/components/sections/supplier-value";
import { Location } from "@/components/sections/location";
import { EnquirySection } from "@/components/funnel/enquiry-section";

/**
 * Home page composition — the section chain. Each section answers the question the
 * previous one raised: who → what → which fits me → why Haier → the range →
 * home or business → why A&S → where → enquire.
 */
export function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Positioning />
      <RangeDiscovery />
      <WhyHaier />
      <AirflowGallery />
      <ResidentialCommercial />
      <SupplierValue />
      <Location />
      <EnquirySection />
    </main>
  );
}
