import { ExternalLink } from "lucide-react";
import type { PhysicalProject } from "@/data/site";
import { ProjectHighlightsTimeline } from "@/components/ui/project-highlights-timeline";
import { ProjectImageGallery } from "@/components/ui/project-image-gallery";
import { cn } from "@/lib/utils";

type ProjectDetailSectionProps = {
  project: PhysicalProject;
  id?: string;
  className?: string;
  /** Inline under a list row — hides title and uses tighter layout */
  inline?: boolean;
};

export function ProjectDetailSection({
  project,
  id,
  className,
  inline = false,
}: ProjectDetailSectionProps) {
  const content = (
    <div className="project-detail-grid">
      <div className="project-detail-content">
        {!inline && <h2 className="project-detail-title">{project.deckTitle}</h2>}

        <p className={cn("project-detail-meta", inline && "mt-0")}>
          <span className="font-mono text-xs">{project.year}</span>
          {project.tags.length > 0 && (
            <>
              <span className="text-border"> · </span>
              <span>{project.tags.join(" · ")}</span>
            </>
          )}
        </p>

        <ProjectHighlightsTimeline highlights={project.highlights} />

        {project.links && project.links.length > 0 && (
          <div className="project-detail-links">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail-link"
              >
                {link.label}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        )}
      </div>

      <ProjectImageGallery
        images={project.media}
        className={cn("project-detail-gallery", inline && "project-detail-gallery--inline")}
      />
    </div>
  );

  return (
    <section
      id={id ?? project.id}
      className={cn(
        "project-detail-section scroll-mt-28",
        inline ? "py-8 md:py-10" : "py-12 md:py-16 lg:py-20",
        className,
      )}
    >
      {inline ? content : <div className="container-projects">{content}</div>}
    </section>
  );
}
