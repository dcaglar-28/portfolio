import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";
import { cn } from "@/lib/utils";

export type ParsedHighlight = {
  heading: string;
  content: string;
};

/** Split "Title: body" highlights; otherwise use the full line as body. */
export function parseProjectHighlight(line: string): ParsedHighlight {
  const colon = line.indexOf(":");
  if (colon > 0 && colon < 80) {
    return {
      heading: line.slice(0, colon).trim(),
      content: line.slice(colon + 1).trim(),
    };
  }
  return { heading: "", content: line };
}

type ProjectHighlightsTimelineProps = {
  highlights: string[];
  className?: string;
};

export function ProjectHighlightsTimeline({
  highlights,
  className,
}: ProjectHighlightsTimelineProps) {
  const items = highlights.map(parseProjectHighlight);

  return (
    <Timeline className={cn("mt-8", className)}>
      {items.map(({ heading, content }, index) => {
        const isLast = index === items.length - 1;

        return (
          <TimelineItem key={`${index}-${heading}`} status="done">
            <TimelineHeading>{heading}</TimelineHeading>
            <TimelineDot status="done" />
            {!isLast && <TimelineLine done />}
            <TimelineContent className={cn(isLast && "pb-0")}>{content}</TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
