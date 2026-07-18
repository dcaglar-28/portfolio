import { getOrderedResearchItems } from "@/lib/research";
import { ResearchPageList } from "@/components/ui/research-page-list";

export function ResearchSection() {
  return (
    <section className="research-page-content px-6 pb-16 pt-6 md:px-10 md:pb-20 md:pt-8 lg:px-16 lg:pb-24">
      <div className="container-wide max-w-4xl">
        <ResearchPageList
          items={getOrderedResearchItems()}
          className="max-w-none w-full"
        />
      </div>
    </section>
  );
}
