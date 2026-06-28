import Link from "next/link";
import { contactPage, findMe, readingList, siteConfig } from "@/data/site";
import { InteractiveGlobeWindow } from "@/components/ui/interactive-globe-window";
import { WhatImReadingSection } from "@/components/sections/what-im-reading-section";

export function ContactSection() {
  return (
    <section className="section-padding">
      <div className="container-wide max-w-5xl">
        <h1 className="heading-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Contact
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {contactPage.intro}
        </p>

        <div className="mt-16 border-t border-border pt-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {contactPage.globeEyebrow}
          </p>

          <InteractiveGlobeWindow person={findMe} className="mt-10" />
        </div>

        <div className="mt-14 border-t border-border pt-10">
          <h2 className="heading-serif text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {contactPage.whatsNextTitle}
          </h2>
          <div className="mt-4 max-w-2xl space-y-4">
            {(Array.isArray(contactPage.whatsNextDescription)
              ? contactPage.whatsNextDescription
              : [contactPage.whatsNextDescription]
            ).map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <WhatImReadingSection
          className="mt-14"
          title={contactPage.readingTitle}
          items={readingList}
        />

        <div className="mt-14 border-t border-border pt-10">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            Reach me
          </h2>
          <ul className="mt-6 flex flex-col gap-3 text-sm md:text-base">
            <li>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                {siteConfig.email}
              </Link>
            </li>
            <li>
              <Link
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
              >
                {siteConfig.phone}
              </Link>
            </li>
            <li className="text-muted-foreground">{siteConfig.location}</li>
            <li className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                LinkedIn
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                GitHub
              </Link>
              <Link
                href={siteConfig.links.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                Resume (PDF)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
