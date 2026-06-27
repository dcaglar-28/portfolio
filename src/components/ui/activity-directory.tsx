import Link from "next/link";
import { ResearchPaperLinks } from "@/components/ui/research-paper-links";
import { cn } from "@/lib/utils";

export type ActivityLink = {
  label: string;
  href: string;
};

export type ActivityEntry = {
  id?: string;
  title: string;
  organization?: string;
  period?: string;
  roleLine?: string;
  description?: string | string[];
  bullets?: string[];
  contributionsHeading?: string;
  links?: ActivityLink[];
};

export type ActivitySection = {
  id: string;
  title: string;
  subtitle?: string;
  entries: ActivityEntry[];
};

type ActivityDirectoryProps = {
  pageTitle?: string;
  intro?: string | string[];
  sections: ActivitySection[];
  className?: string;
  /** Horizontal paper link row below bullets (research page) */
  horizontalPaperLinks?: boolean;
  /** Purple accent styling for homepage activity blocks */
  accented?: boolean;
};

function ActivityDescription({ description }: { description: string | string[] }) {
  const lines = Array.isArray(description) ? description : [description];
  return (
    <div className="mt-3 space-y-2">
      {lines.map((line) => (
        <p key={line} className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {line}
        </p>
      ))}
    </div>
  );
}

function ActivityEntryBlock({
  entry,
  horizontalPaperLinks,
  accented,
}: {
  entry: ActivityEntry;
  horizontalPaperLinks?: boolean;
  accented?: boolean;
}) {
  return (
    <article className={cn("py-8", entry.id && "scroll-mt-28")} id={entry.id}>
      <h3
        className={cn(
          "text-lg font-medium tracking-tight md:text-xl",
          accented && "text-primary",
        )}
      >
        {entry.title}
      </h3>

      {(entry.organization || entry.period) && (
        <p className="mt-2 text-sm text-muted-foreground">
          {entry.organization}
          {entry.organization && entry.period && (
            <span className={cn(accented ? "text-primary/40" : "text-border")}> · </span>
          )}
          {entry.period && (
            <span className={cn("font-mono text-xs", accented && "text-primary/80")}>
              {entry.period}
            </span>
          )}
        </p>
      )}

      {entry.roleLine && (
        <p className="mt-1 text-sm italic text-muted-foreground/90">{entry.roleLine}</p>
      )}

      {entry.description && <ActivityDescription description={entry.description} />}

      {entry.contributionsHeading && (
        <h4 className="mt-6 text-base font-semibold tracking-tight text-foreground md:text-lg">
          {entry.contributionsHeading}
        </h4>
      )}

      {entry.bullets && entry.bullets.length > 0 && (
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground md:text-base">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}

      {entry.links && entry.links.length > 0 && horizontalPaperLinks ? (
        <ResearchPaperLinks links={entry.links} />
      ) : null}

      {entry.links && entry.links.length > 0 && !horizontalPaperLinks ? (
        <ul className="mt-4 space-y-1.5">
          {entry.links.map((link) => {
            const external = link.href.startsWith("http");
            const display = link.href.startsWith("mailto:")
              ? link.href.replace("mailto:", "")
              : link.href.startsWith("tel:")
                ? link.href.replace("tel:", "")
                : link.href.replace(/^https?:\/\//, "").replace(/\/$/, "");
            const content = (
              <span>
                <span className="font-medium text-foreground/80">{link.label}:</span>{" "}
                <span className="text-primary underline-offset-2 hover:underline">
                  {display}
                </span>
              </span>
            );
            return (
              <li key={link.href} className="text-sm">
                {external ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <Link href={link.href}>{content}</Link>
                )}
              </li>
            );
          })}
        </ul>
      ) : null}
    </article>
  );
}

export function ActivityDirectory({
  pageTitle,
  intro,
  sections,
  className,
  horizontalPaperLinks = false,
  accented = false,
}: ActivityDirectoryProps) {
  const introParagraphs = intro
    ? Array.isArray(intro)
      ? intro
      : [intro]
    : [];

  return (
    <div className={cn("mx-auto max-w-2xl", className)}>
      {pageTitle && (
        <h1 className="heading-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {pageTitle}
        </h1>
      )}

      {introParagraphs.length > 0 && (
        <div className={cn("space-y-4", pageTitle ? "mt-8" : "")}>
          {introParagraphs.map((p) => (
            <p key={p} className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {p}
            </p>
          ))}
        </div>
      )}

      {sections.map((section, index) => (
        <section
          key={section.id}
          className={cn(
            "border-t pt-12",
            accented ? "border-primary/20" : "border-border",
            index === 0 && !pageTitle && introParagraphs.length === 0
              ? "mt-0 border-t-0 pt-0"
              : "mt-16",
            index === 0 && (pageTitle || introParagraphs.length > 0) && "first:mt-14",
          )}
        >
          <h2
            className={cn(
              "heading-serif text-2xl font-semibold md:text-3xl",
              accented ? "text-primary" : "text-foreground",
            )}
          >
            {section.title}
          </h2>

          {section.subtitle && (
            <p className="mt-2 text-sm italic text-muted-foreground/90">{section.subtitle}</p>
          )}

          <div className={cn("divide-y", accented ? "divide-primary/15" : "divide-border")}>
            {section.entries.map((entry) => (
              <ActivityEntryBlock
                key={entry.id ?? entry.title}
                entry={entry}
                horizontalPaperLinks={horizontalPaperLinks}
                accented={accented}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
