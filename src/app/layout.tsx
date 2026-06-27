import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Source_Code_Pro } from "next/font/google";
import { AppShell } from "@/components/app-shell";
import { siteConfig } from "@/data/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-family-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-family-serif",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-family-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | CMU ECE Portfolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${montserrat.variable} ${playfair.variable} ${sourceCodePro.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --background: #1a1d23;
                --foreground: #e5e5e5;
                --primary: #6c5ce7;
                --border: #444444;
                --muted-foreground: #a3a3a3;
                --sidebar: #1a1d23;
                --sidebar-foreground: #e5e5e5;
                --sidebar-border: #444444;
                --sidebar-primary: #6c5ce7;
              }
              html { color-scheme: dark; }
              body {
                margin: 0;
                min-height: 100vh;
                background-color: var(--background);
                color: var(--foreground);
              }
              .research-page-content article h3 {
                color: var(--primary);
              }
              .research-page-content article h2 {
                color: var(--foreground);
              }
              .research-paper-links {
                border-top: 1px solid var(--border);
                padding-top: 1.5rem;
                margin-top: 2rem;
              }
              .research-paper-links a:hover span:last-child {
                color: var(--primary);
              }
              .research-paper-links .group:hover [aria-hidden] {
                background-color: var(--primary);
              }
            `,
          }}
        />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
