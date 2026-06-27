"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type ProjectMedia = {
  src: string;
  alt?: string;
  type?: "image" | "video";
  poster?: string;
};

export type ShowcaseStep = {
  id: string;
  title: string;
  text: string;
};

export type ShowcaseLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FeatureShowcaseProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  stats?: string[];
  steps?: ShowcaseStep[];
  media: ProjectMedia;
  panelMinHeight?: number;
  links?: ShowcaseLink[];
  reverseLayout?: boolean;
  className?: string;
};

function ShowcaseMedia({
  media,
  title,
}: {
  media: ProjectMedia;
  title: string;
}) {
  const alt = media.alt ?? title;

  if (media.type === "video") {
    return (
      <video
        src={media.src}
        poster={media.poster}
        controls
        playsInline
        className="h-full w-full object-cover"
        aria-label={alt}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={media.src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
  );
}

export function FeatureShowcase({
  id,
  eyebrow = "Project",
  title,
  description,
  stats = [],
  steps = [],
  media,
  panelMinHeight = 520,
  links = [],
  reverseLayout = false,
  className,
}: FeatureShowcaseProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full scroll-mt-28 border-b border-border bg-background text-foreground",
        className,
      )}
    >
      <div
        className={cn(
          "container-wide grid grid-cols-1 gap-10 py-12 md:grid-cols-12 md:py-16 lg:gap-14 lg:py-20",
        )}
      >
        <div className={cn("md:col-span-6", reverseLayout && "md:order-2")}>
          <Badge variant="outline" className="mb-6 font-mono text-[10px] uppercase tracking-[0.18em]">
            {eyebrow}
          </Badge>

          <h2 className="heading-serif text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>

          {description ? (
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{description}</p>
          ) : null}

          {stats.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {stats.map((s) => (
                <Badge key={s} variant="secondary">
                  {s}
                </Badge>
              ))}
            </div>
          )}

          {steps.length > 0 && (
            <div className="mt-10 max-w-xl">
              <Accordion type="single" collapsible className="w-full">
                {steps.map((step) => (
                  <AccordionItem key={step.id} value={step.id}>
                    <AccordionTrigger className="text-left text-base font-medium">
                      {step.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {step.text}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map((link, index) => {
                const isExternal =
                  link.external ?? (link.href.startsWith("http") || link.href.startsWith("//"));
                if (isExternal) {
                  return (
                    <Button
                      key={link.href}
                      asChild
                      size="lg"
                      variant={index === 0 ? "default" : "secondary"}
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  );
                }
                return (
                  <Button
                    key={link.href}
                    asChild
                    size="lg"
                    variant={index === 0 ? "default" : "secondary"}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                );
              })}
            </div>
          )}
        </div>

        <div className={cn("md:col-span-6", reverseLayout && "md:order-1")}>
          <Card
            className="relative overflow-hidden rounded-2xl border border-border bg-card/40 p-0 shadow-theme"
            style={{ height: panelMinHeight, minHeight: panelMinHeight }}
          >
            <ShowcaseMedia media={media} title={title} />
          </Card>
        </div>
      </div>
    </section>
  );
}
