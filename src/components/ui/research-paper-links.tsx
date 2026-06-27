"use client";

import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export type PaperLink = {
  label: string;
  href: string;
};

type ResearchPaperLinksProps = {
  links: PaperLink[];
  className?: string;
};

/**
 * Horizontal inline link list for research papers (Lumina nav-inspired; no images/WebGL).
 */
export function ResearchPaperLinks({ links, className }: ResearchPaperLinksProps) {
  if (links.length === 0) return null;

  return (
    <nav
      aria-label="Related papers and resources"
      className={cn("research-paper-links mt-8 border-t border-border/80 pt-6", className)}
    >
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Papers &amp; resources
      </p>
      <ul className="flex flex-wrap items-end gap-x-8 gap-y-5">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-[7rem] max-w-[16rem] flex-col gap-2"
            >
              <span
                aria-hidden
                className="block h-px w-full origin-left scale-x-100 bg-border/80 transition-all duration-300 group-hover:scale-x-100 group-hover:bg-primary"
              />
              <span className="flex items-start gap-1.5 font-mono text-[10px] uppercase leading-snug tracking-[0.16em] text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                <span>{link.label}</span>
                <ExternalLink className="mt-0.5 h-3 w-3 shrink-0 opacity-40 transition-opacity group-hover:opacity-100" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
