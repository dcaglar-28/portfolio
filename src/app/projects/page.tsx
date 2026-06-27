import type { Metadata } from "next";
import { PageLayout } from "@/components/page-layout";
import { PhysicalProjectsSection } from "@/components/sections/physical-projects";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Hands-on engineering projects — ${siteConfig.name}`,
};

export default function ProjectsPage() {
  return (
    <PageLayout>
      <PhysicalProjectsSection />
    </PageLayout>
  );
}
