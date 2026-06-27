import type { ResearchItem } from "@/data/site";
import { researchItems } from "@/data/site";

const RESEARCH_PAGE_ORDER = [
  "safari-memory",
  "newtnn-ncal",
  "nexus-asic",
  "av-sensor-placement",
] as const;

export function getOrderedResearchItems(): ResearchItem[] {
  return RESEARCH_PAGE_ORDER.map(
    (id) => researchItems.find((item) => item.id === id)!,
  ).filter(Boolean);
}
