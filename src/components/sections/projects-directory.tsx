"use client";

import { useCallback, useEffect, useState } from "react";
import type { PhysicalProject } from "@/data/site";
import { ProjectDetailSection } from "@/components/ui/project-detail-section";
import { SelectedWorkList } from "@/components/ui/selected-work-list";

type ProjectsDirectoryProps = {
  projects: PhysicalProject[];
};

function projectIdFromHash(projects: PhysicalProject[]) {
  const id = window.location.hash.slice(1);
  return projects.some((project) => project.id === id) ? id : null;
}

export function ProjectsDirectory({ projects }: ProjectsDirectoryProps) {
  const [openId, setOpenId] = useState<string>("");

  const openProject = useCallback((id: string | null, scroll = false) => {
    setOpenId(id ?? "");

    if (id) {
      window.history.replaceState(null, "", `#${id}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }

    if (scroll && id) {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  useEffect(() => {
    const syncFromHash = (scroll = false) => {
      const id = projectIdFromHash(projects);
      setOpenId(id ?? "");

      if (scroll && id) {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };

    const handleHashChange = () => syncFromHash(true);

    syncFromHash(true);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [projects]);

  return (
    <section className="container-projects max-w-4xl pb-12 pt-20 md:pb-16 lg:pt-28">
      <h1 className="heading-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        Projects
      </h1>

      <SelectedWorkList
        projects={projects}
        className="mt-14"
        value={openId}
        onValueChange={(id) => openProject(id || null, true)}
        renderDetail={(project) => <ProjectDetailSection project={project} inline />}
      />
    </section>
  );
}
