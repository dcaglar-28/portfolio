"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuVertical } from "@/components/ui/menu-vertical";
import { navItems, siteConfig } from "@/data/site";

const sidebarMenuItems = navItems.map((item) => ({
  label: item.label,
  href: item.href,
}));

const resourceMenuItems = [
  { label: "Resume", href: siteConfig.links.cv, newTab: true },
];

export function SiteSidebar() {
  const pathname = usePathname();
  const activeHref = pathname === "/" || pathname === "/bio" ? "/home" : pathname;

  return (
    <aside
      className="fixed inset-y-0 left-0 z-40 hidden w-[var(--site-sidebar-width)] shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex"
      aria-label="Site navigation"
    >
      <div className="flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto px-3 py-7">
        <Link
          href="/home"
          className="group mb-2 flex w-full shrink-0 items-start gap-2 no-underline outline-none transition-colors duration-300 hover:text-sidebar-primary"
        >
          <span className="w-0 shrink-0" aria-hidden />
          <p className="min-w-0 flex-1 font-serif text-[calc((var(--site-sidebar-width)-1.5rem)/3.75)] font-semibold leading-[0.88] tracking-[-0.04em] text-sidebar-foreground transition-colors group-hover:text-sidebar-primary">
            {siteConfig.name.split(" ").map((part) => (
              <span key={part} className="block">
                {part}
              </span>
            ))}
          </p>
        </Link>

        <nav className="mt-8 flex flex-1 flex-col" aria-label="Main">
          <MenuVertical
            menuItems={sidebarMenuItems}
            activeHref={activeHref}
            color="var(--sidebar-primary)"
            compact
          />
        </nav>

        <div className="mt-auto border-t border-sidebar-border pt-6">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-sidebar-foreground/50">
            Documents
          </p>
          <MenuVertical
            menuItems={resourceMenuItems}
            activeHref={activeHref}
            color="var(--sidebar-accent)"
            compact
          />
        </div>
      </div>
    </aside>
  );
}
