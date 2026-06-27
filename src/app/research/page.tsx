import type { Metadata } from "next";
import { PageLayout } from "@/components/page-layout";
import { ResearchSection } from "@/components/sections/research-section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Research",
  description: `Research and co-design work — ${siteConfig.name}`,
};

export default function ResearchPage() {
  return (
    <PageLayout>
      <ResearchSection />
    </PageLayout>
  );
}
