import { physicalProjects } from "@/data/site";
import { ProjectsDirectory } from "@/components/sections/projects-directory";

export function PhysicalProjectsSection() {
  return <ProjectsDirectory projects={physicalProjects} />;
}
