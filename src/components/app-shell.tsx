import { SiteFooter } from "@/components/site-footer";
import { SiteMobileHeader } from "@/components/site-mobile-header";
import { SiteSidebar } from "@/components/site-sidebar";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteSidebar />
      <SiteMobileHeader />
      <div className="flex min-h-screen min-w-0 flex-col overflow-visible pt-14 pl-0 lg:pt-0 lg:pl-[var(--site-sidebar-width)]">
        <main className="flex-1 overflow-visible">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
