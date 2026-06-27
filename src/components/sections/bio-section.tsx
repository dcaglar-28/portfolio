import Link from "next/link";
import { FileText } from "lucide-react";
import { BioProfileIntro } from "@/components/bio-profile-intro";
import { homeActivitySections, siteConfig } from "@/data/site";
import { ActivityDirectory } from "@/components/ui/activity-directory";
import { BioSkills } from "./bio-skills";

export function BioSection() {
  return (
    <section className="px-6 pb-16 pt-6 md:px-10 md:pb-20 md:pt-8 lg:px-16 lg:pb-24">
      <div className="container-wide max-w-4xl">
        <div className="home-page-accent">
          <h1 className="heading-serif text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            Home
          </h1>

          <BioProfileIntro />

          <div className="mt-20 border-t border-primary/25 pt-12">
            <ActivityDirectory sections={homeActivitySections} className="max-w-none" accented />
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <BioSkills />
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-border pt-10">
          <Link
            href={siteConfig.links.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary underline-offset-2 hover:underline"
          >
            <span className="inline-flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Resume (PDF)
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
