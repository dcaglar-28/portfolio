import type { ProjectShowcaseItem } from "@/components/ui/project-showcase";
import type { PhysicalProject, ProjectMedia } from "@/data/site";

function projectThumbnail(media: ProjectMedia[]): string {
  const first = media[0];
  if (!first) return "";
  return first.type === "video" ? (first.poster ?? first.src) : first.src;
}

/** Title + summary for the selected-work list row */
export function getProjectListDisplay(project: PhysicalProject) {
  return {
    listTitle: project.deckTitle,
    summary: project.summary,
  };
}

/** Map site projects to hover-list overview items */
export function physicalProjectsToShowcase(
  projects: PhysicalProject[],
): ProjectShowcaseItem[] {
  return projects.map((project) => ({
    id: project.id,
    title: project.deckTitle,
    description: project.summary,
    year: project.year,
    link: `#${project.id}`,
    image: projectThumbnail(project.media),
  }));
}
