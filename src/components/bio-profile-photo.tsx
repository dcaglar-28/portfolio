"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type BioProfilePhotoProps = {
  src: string;
  alt: string;
  initials: string;
  className?: string;
};

export function BioProfilePhoto({ src, alt, initials, className }: BioProfilePhotoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-primary/35 bg-card ring-1 ring-primary/15",
        className,
      )}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/20 to-accent/10 px-4 text-center">
          <span className="font-serif text-4xl font-semibold tracking-tight text-foreground">
            {initials}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            Add public/profile.png
          </span>
        </div>
      )}
    </div>
  );
}
