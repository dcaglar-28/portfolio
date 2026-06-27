import { BookOpen, CheckCircle2, Circle, ExternalLink, FlaskConical } from "lucide-react";
import Link from "next/link";
import type { ResearchItem } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const phaseStatusStyles = {
  completed: {
    icon: CheckCircle2,
    label: "Complete",
    dot: "bg-primary border-primary",
    line: "bg-primary/40",
  },
  in_progress: {
    icon: FlaskConical,
    label: "In progress",
    dot: "bg-primary/60 border-primary ring-4 ring-primary/15",
    line: "bg-border",
  },
  planned: {
    icon: Circle,
    label: "Planned",
    dot: "bg-background border-border",
    line: "bg-border",
  },
} as const;

type ResearchShowcaseCardProps = {
  item: ResearchItem;
};

export function ResearchShowcaseCard({ item }: ResearchShowcaseCardProps) {
  const isOngoing = item.status === "ongoing";

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card shadow-theme",
        isOngoing && "ring-1 ring-primary/15",
      )}
    >
      {isOngoing && (
        <div
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-chart-2 to-chart-4"
          aria-hidden
        />
      )}

      <div className="border-b border-border p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-lg",
              isOngoing ? "bg-primary/15 text-primary" : "bg-secondary/50 text-chart-3",
            )}
          >
            {isOngoing ? (
              <FlaskConical className="h-5 w-5" aria-hidden />
            ) : (
              <BookOpen className="h-5 w-5" aria-hidden />
            )}
          </div>
          <Badge variant={isOngoing ? "primary" : "outline"}>
            {isOngoing ? "Ongoing" : "Completed"}
          </Badge>
          <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
          <span className="hidden text-border sm:inline" aria-hidden>
            |
          </span>
          <span className="text-sm text-muted-foreground">{item.pageAffiliation}</span>
        </div>

        <h3 className="heading-serif mt-5 text-2xl font-semibold md:text-3xl">{item.title}</h3>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {item.summary}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="muted">{tag}</Badge>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-0 lg:grid-cols-5">
        <div className="space-y-8 border-b border-border p-6 md:p-8 lg:col-span-3 lg:border-b-0 lg:border-r">
          {item.researchQuestion && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                Research question
              </p>
              <blockquote className="mt-3 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-foreground md:text-base">
                {item.researchQuestion}
              </blockquote>
            </div>
          )}

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              Method
            </p>
            <ul className="mt-3 space-y-2.5">
              {item.method.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <aside className="space-y-6 bg-sidebar/50 p-6 md:p-8 lg:col-span-2">
          {(item.papers ?? item.links) && (item.papers ?? item.links)!.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {(item.papers ?? item.links)!.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  {link.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          )}
        </aside>
      </div>

      {item.phases.length > 0 && (
      <div className="border-t border-border p-6 md:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          Roadmap
        </p>
        <ol className="mt-6 space-y-0">
          {item.phases.map((phase, index) => {
            const style = phaseStatusStyles[phase.status];
            const Icon = style.icon;
            const isLast = index === item.phases.length - 1;

            return (
              <li key={phase.id} className="relative flex gap-4 pb-8 last:pb-0">
                {!isLast && (
                  <span
                    className={cn(
                      "absolute left-[11px] top-7 h-[calc(100%-1.25rem)] w-px",
                      style.line,
                    )}
                    aria-hidden
                  />
                )}
                <div
                  className={cn(
                    "relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2",
                    style.dot,
                  )}
                >
                  <Icon
                    className={cn(
                      "h-3 w-3",
                      phase.status === "completed" && "text-primary-foreground",
                      phase.status === "in_progress" && "text-primary",
                      phase.status === "planned" && "text-muted-foreground",
                    )}
                    aria-hidden
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-medium text-foreground">{phase.name}</h4>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {style.label}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {phase.summary}
                  </p>
                  {phase.deliverables && phase.deliverables.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {phase.deliverables.map((d) => (
                        <li
                          key={d}
                          className="text-xs leading-relaxed text-muted-foreground before:mr-2 before:text-primary before:content-['–']"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      )}
    </article>
  );
}
