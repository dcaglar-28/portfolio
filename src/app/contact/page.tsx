import type { Metadata } from "next";
import { PageLayout } from "@/components/page-layout";
import { ContactSection } from "@/components/sections/contact-section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} — ${siteConfig.location}`,
};

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactSection />
    </PageLayout>
  );
}
