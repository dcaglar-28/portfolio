import { researchPageIntro } from "@/data/site";
import { getOrderedResearchItems } from "@/lib/research";
import { ResearchPageList } from "@/components/ui/research-page-list";

export function ResearchSection() {
  return (
    <section className="section-padding research-page-content">
      <div className="container-wide max-w-4xl">
        <ResearchPageList
          intro={researchPageIntro}
          items={getOrderedResearchItems()}
          className="max-w-none w-full"
        />
      </div>
    </section>
  );
}
