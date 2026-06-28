"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import type { ReactNode } from "react";
import type { PhysicalProject } from "@/data/site";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { getProjectListDisplay } from "@/lib/project-showcase";
import { cn } from "@/lib/utils";

type SelectedWorkListProps = {
  projects: PhysicalProject[];
  className?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  renderDetail?: (project: PhysicalProject) => ReactNode;
};

const plusTriggerClassName = cn(
  "flex flex-1 items-center justify-between py-2 text-left transition-all",
  "[&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200",
  "[&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180",
);

export function SelectedWorkList({
  projects,
  className,
  value,
  onValueChange,
  renderDetail,
}: SelectedWorkListProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn("w-full border-t border-border", className)}
      value={value}
      onValueChange={onValueChange}
    >
      {projects.map((project) => {
        const { listTitle, summary } = getProjectListDisplay(project);

        return (
          <AccordionItem
            key={project.id}
            value={project.id}
            className="border-b border-border py-4 md:py-6"
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className={plusTriggerClassName}>
                <span className="flex flex-col space-y-1.5 pr-6">
                  <span className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {listTitle}
                  </span>
                  {summary && (
                    <span className="max-w-2xl text-sm font-normal leading-relaxed text-muted-foreground md:text-base">
                      {summary}
                    </span>
                  )}
                </span>
                <Plus
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 opacity-60 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>

            {renderDetail && (
              <AccordionContent className="pb-2 pt-4 md:pt-6">
                {renderDetail(project)}
              </AccordionContent>
            )}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
