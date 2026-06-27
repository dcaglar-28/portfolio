"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type MenuItem = {
  label: string;
  href: string;
  newTab?: boolean;
};

export interface MenuVerticalProps {
  menuItems: MenuItem[];
  /** Accent for hover — CSS color value */
  color?: string;
  activeHref?: string;
  compact?: boolean;
  className?: string;
}

function isItemActive(activeHref: string | undefined, href: string) {
  if (!activeHref) return false;
  if (activeHref === href) return true;
  return href !== "/" && activeHref.startsWith(`${href}/`);
}

export function MenuVertical({
  menuItems = [],
  color = "var(--sidebar-primary)",
  activeHref,
  compact = false,
  className,
}: MenuVerticalProps) {
  const linkClass = compact
    ? "text-xl font-semibold leading-tight"
    : "text-4xl font-semibold leading-tight";

  const arrowClass = compact ? "size-6" : "size-10";

  return (
    <ul className={cn("flex w-full flex-col gap-1", className)}>
      {menuItems.map((item) => {
        const isActive = isItemActive(activeHref, item.href);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              target={item.newTab ? "_blank" : undefined}
              rel={item.newTab ? "noopener noreferrer" : undefined}
              className={cn(
                "group/nav flex min-h-9 items-center gap-2 no-underline outline-none transition-colors duration-300",
                isActive
                  ? "text-sidebar-primary"
                  : "text-sidebar-foreground hover:text-sidebar-primary",
              )}
              style={isActive ? { color } : undefined}
              aria-current={isActive ? "page" : undefined}
            >
              <span
                className={cn(
                  "flex shrink-0 items-center justify-center overflow-hidden transition-all duration-300 ease-out",
                  isActive
                    ? "w-0 opacity-0"
                    : "w-0 opacity-0 group-hover/nav:w-7 group-hover/nav:opacity-100",
                  compact && !isActive && "group-hover/nav:w-6",
                )}
                aria-hidden
              >
                <ArrowRight
                  strokeWidth={3}
                  className={arrowClass}
                  style={{ color: isActive ? undefined : color }}
                />
              </span>
              <span className={cn(linkClass, "truncate")}>{item.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
