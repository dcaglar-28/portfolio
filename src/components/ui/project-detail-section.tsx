import { ExternalLink } from "lucide-react";
import type { PhysicalProject } from "@/data/site";
import { ProjectHighlightsTimeline } from "@/components/ui/project-highlights-timeline";
import { ProjectImageGallery } from "@/components/ui/project-image-gallery";
import { cn } from "@/lib/utils";

type ProjectDetailSectionProps = {
  project: PhysicalProject;
  id?: string;
  className?: string;
};

export function ProjectDetailSection({ project, id, className }: ProjectDetailSectionProps) {
  return (
    <section
      id={id ?? project.id}
      className={cn("project-detail-section scroll-mt-28 py-12 md:py-16 lg:py-20", className)}
    >
      <div className="container-projects">
        <div className="project-detail-grid">
          <div className="project-detail-content">
            <h2 className="project-detail-title">{project.deckTitle}</h2>

            <p className="project-detail-meta">
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

          <ProjectImageGallery images={project.media} className="project-detail-gallery" />
        </div>
      </div>
    </section>
  );
}
