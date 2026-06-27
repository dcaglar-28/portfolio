import type { ResearchItem } from "@/data/site";
import { ResearchPaperLinks } from "@/components/ui/research-paper-links";
import { cn } from "@/lib/utils";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={index}
              className="rounded bg-muted/60 px-1 py-0.5 font-mono text-[0.9em] text-foreground/90"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        return part;
      })}
    </>
  );
}

function ResearchPageEntry({ item }: { item: ResearchItem }) {
  const resources = item.papers ?? item.links ?? [];

  return (
    <article className={cn("research-entry scroll-mt-28 py-8 md:py-10")} id={item.id}>
      <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
        {item.title}
      </h2>

      <div className="mt-2 space-y-1 text-sm md:text-base">
        <p className="font-semibold text-foreground">
          {item.pageAffiliation}
          {item.affiliationNote && (
            <span className="font-normal text-muted-foreground"> {item.affiliationNote}</span>
          )}
        </p>

        {item.subtitleLine && (
          <p className="text-muted-foreground">{item.subtitleLine}</p>
        )}

        {item.pageCollaborators && (
          <p className="text-muted-foreground">{item.pageCollaborators}</p>
        )}

        <p className="font-mono text-xs italic text-muted-foreground md:text-sm">
          {item.period}
        </p>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
        {item.summary}
      </p>

      {item.researchQuestion && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          <span className="font-semibold text-foreground">Research question:</span>{" "}
          <RichText text={item.researchQuestion} />
        </p>
      )}

      <h3 className="mt-6 text-base font-semibold tracking-tight text-primary md:text-lg">
        Key Contributions
        {item.contributionsNote && (
          <span className="ml-1.5 font-normal italic text-muted-foreground">
            {item.contributionsNote}
          </span>
        )}
      </h3>

      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground md:text-base">
        {item.method.map((bullet) => (
          <li key={bullet}>
            <RichText text={bullet} />
          </li>
        ))}
      </ul>

      {item.plannedWork && (
        <>
          <h3 className="mt-6 text-base font-semibold tracking-tight text-primary md:text-lg">
            {item.plannedWork.heading}
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            {item.plannedWork.items.map((bullet) => (
              <li key={bullet}>
                <RichText text={bullet} />
              </li>
            ))}
          </ul>
        </>
      )}

      <ResearchPaperLinks links={resources} className="mt-6 pt-5" />
    </article>
  );
}

type ResearchPageListProps = {
  intro: string;
  items: ResearchItem[];
  className?: string;
};

export function ResearchPageList({ intro, items, className }: ResearchPageListProps) {
  return (
    <div className={cn("w-full", className)}>
      <h1 className="heading-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        Research
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
        {intro}
      </p>

      <div className="mt-12 divide-y divide-border border-t border-border pt-10 md:mt-14 md:pt-12">
        {items.map((item) => (
          <ResearchPageEntry key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
