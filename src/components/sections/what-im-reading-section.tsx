import type { ReadingItem } from "@/data/site";
import { ClickableListLink } from "@/components/ui/clickable-list-link";
import { cn } from "@/lib/utils";

type WhatImReadingSectionProps = {
  title: string;
  items: ReadingItem[];
  className?: string;
};

export function WhatImReadingSection({ title, items, className }: WhatImReadingSectionProps) {
  if (items.length === 0) return null;

  return (
    <div className={cn("border-t border-border pt-10", className)}>
      <h2 className="heading-serif text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>

      <ul className="mt-6 space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <ClickableListLink href={item.href}>{item.title}</ClickableListLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
