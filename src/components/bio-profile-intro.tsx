import { bioProfile } from "@/data/site";

export function BioProfileIntro() {
  return (
    <header className="mt-10 space-y-4 border-l-2 border-primary/35 pl-5 md:pl-6">
      {bioProfile.funBio.map((paragraph) => (
        <p
          key={paragraph}
          className="text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {paragraph}
        </p>
      ))}
    </header>
  );
}
