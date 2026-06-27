import { physicalProjects } from "@/data/site";
import { ProjectDetailSection } from "@/components/ui/project-detail-section";
import { SelectedWorkList } from "@/components/ui/selected-work-list";

export function PhysicalProjectsSection() {
  return (
    <div>
      <section className="container-projects max-w-4xl pb-12 pt-20 md:pb-16 lg:pt-28">
        <h1 className="heading-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Projects
        </h1>

        <SelectedWorkList projects={physicalProjects} className="mt-14" />
      </section>

      <div className="border-t border-border">
        {physicalProjects.map((project) => (
          <div key={project.id} className="border-t border-border">
            <ProjectDetailSection project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
