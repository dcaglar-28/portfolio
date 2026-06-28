import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type ClickableListLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ClickableListLink({ href, children, className }: ClickableListLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex w-full items-start gap-3 rounded-md px-2 py-2 -mx-2",
        "text-muted-foreground transition-colors",
        "hover:bg-primary/5 hover:text-primary",
        "focus-visible:bg-primary/5 focus-visible:text-primary focus-visible:outline-none",
        "active:text-primary",
        className,
      )}
    >
      <span className="min-w-0 flex-1 text-base font-medium leading-snug underline-offset-4 group-hover:underline md:text-lg">
        {children}
      </span>
      <ExternalLink
        className="mt-1 h-4 w-4 shrink-0 opacity-45 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100"
        aria-hidden
      />
    </Link>
  );
}
