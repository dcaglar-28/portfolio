import type { Metadata } from "next";
import { HomeInstitutionBanner } from "@/components/home-institution-banner";
import { PageLayout } from "@/components/page-layout";
import { BioSection } from "@/components/sections/bio-section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Home",
  description: `Background and skills — ${siteConfig.name}, ${siteConfig.tagline}`,
};

export default function HomePage() {
  return (
    <>
      <HomeInstitutionBanner />
      <PageLayout className="pt-4 md:pt-6">
        <BioSection />
      </PageLayout>
    </>
  );
}
