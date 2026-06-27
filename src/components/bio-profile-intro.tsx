import { bioProfile, siteConfig } from "@/data/site";
import { BioProfilePhoto } from "@/components/bio-profile-photo";

export function BioProfileIntro() {
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="mt-10 grid gap-10 lg:grid-cols-[minmax(200px,280px)_1fr] lg:items-start lg:gap-14">
      <BioProfilePhoto
        src={bioProfile.photo}
        alt={bioProfile.photoAlt}
        initials={initials}
        className="mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none"
      />

      <div className="space-y-4 border-l-2 border-primary/35 pl-5 md:pl-6">
          {bioProfile.funBio.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {paragraph}
            </p>
          ))}
      </div>
    </header>
  );
}
