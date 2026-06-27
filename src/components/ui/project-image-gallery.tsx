"use client";

import { useCallback, useMemo, useState } from "react";
import type { ProjectMedia } from "@/data/site";
import {
  StackedCardsInteraction,
  type StackedCardMedia,
} from "@/components/ui/stacked-cards-interaction";
import { cn } from "@/lib/utils";

type ProjectImageGalleryProps = {
  images: ProjectMedia[];
  className?: string;
};

const WINDOW_SIZE = 3;

function toStackedCard(item: ProjectMedia): StackedCardMedia {
  return {
    src: item.src,
    alt: item.alt,
    type: item.type,
    poster: item.poster,
  };
}

export function ProjectImageGallery({ images, className }: ProjectImageGalleryProps) {
  const [frontIndex, setFrontIndex] = useState(0);

  const count = images.length;

  const visibleCards = useMemo(() => {
    if (count === 0) return [];
    const visibleCount = Math.min(WINDOW_SIZE, count);
    return Array.from({ length: visibleCount }, (_, i) =>
      toStackedCard(images[(frontIndex + i) % count]),
    );
  }, [count, frontIndex, images]);

  const cycleNext = useCallback(() => {
    if (count <= 1) return;
    setFrontIndex((prev) => (prev + 1) % count);
  }, [count]);

  if (count === 0) return null;

  return (
    <div className={cn("project-image-gallery", className)}>
      <div className="project-stack-fill">
        <StackedCardsInteraction cards={visibleCards} onCycle={cycleNext} />
      </div>

      {count > 1 && (
        <p className="project-image-gallery-counter shrink-0 pt-3">
          {String(frontIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </p>
      )}
    </div>
  );
}
