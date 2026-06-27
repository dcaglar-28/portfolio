import { skillGroups } from "@/data/site";
import { Badge } from "@/components/ui/badge";

export function BioSkills() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-theme">
      <h3 className="heading-serif text-xl font-semibold">Skills</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        From coursework, research, and project work.
      </p>

      {skillGroups.map((group) => (
        <div key={group.label} className="mt-6 first:mt-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            {group.label}
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <li key={skill}>
                <Badge variant="outline">{skill}</Badge>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
