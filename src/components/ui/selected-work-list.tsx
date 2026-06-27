import Link from "next/link";
import type { PhysicalProject } from "@/data/site";
import { getProjectListDisplay } from "@/lib/project-showcase";
import { cn } from "@/lib/utils";

type SelectedWorkListProps = {
  projects: PhysicalProject[];
  eyebrow?: string;
  className?: string;
};

export function SelectedWorkList({
  projects,
  eyebrow = "Selected work",
  className,
}: SelectedWorkListProps) {
  return (
    <div className={cn(className)}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {eyebrow}
      </p>

      <ul className="mt-8 divide-y divide-border border-t border-border">
        {projects.map((project) => {
          const { listTitle, summary } = getProjectListDisplay(project);

          return (
            <li key={project.id}>
              <div className="py-8 md:py-10">
                <Link
                  href={`#${project.id}`}
                  className="text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary md:text-2xl"
                >
                  {listTitle}
                </Link>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {summary}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
