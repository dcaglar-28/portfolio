import Link from "next/link";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12 md:px-10 lg:px-16">
      <div className="max-w-2xl">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
            >
              {siteConfig.email}
            </Link>
          </li>
        </ul>
        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          © {year} {siteConfig.name}. {siteConfig.location}
        </p>
      </div>
    </footer>
  );
}
