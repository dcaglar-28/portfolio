"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type StackedCardMedia = {
  src: string;
  alt?: string;
  type?: "image" | "video";
  poster?: string;
};

function videoMimeType(src: string) {
  return src.toLowerCase().endsWith(".mov") ? "video/quicktime" : "video/mp4";
}

function VideoThumbnail({
  src,
  alt,
  poster,
}: {
  src: string;
  alt?: string;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || poster) return;

    const showFrame = () => {
      if (video.readyState >= 1) {
        video.currentTime = Math.min(0.25, video.duration || 0.25);
      }
    };

    video.addEventListener("loadeddata", showFrame);
    showFrame();
    return () => video.removeEventListener("loadeddata", showFrame);
  }, [src, poster]);

  return (
    <div className="relative h-full w-full">
      {poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt={alt ?? "Video thumbnail"}
          className="project-stack-media"
        />
      ) : (
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          className="project-stack-media"
          aria-hidden
        >
          <source src={src} type={videoMimeType(src)} />
        </video>
      )}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/25"
        aria-hidden
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-sm">
          <Play className="ml-0.5 h-5 w-5 fill-current" />
        </span>
      </div>
    </div>
  );
}

function ActiveVideo({ src, alt }: { src: string; alt?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      controls
      preload="auto"
      className="project-stack-media"
      aria-label={alt ?? "Project video"}
      onClick={(e) => e.stopPropagation()}
    >
      <source src={src} type={videoMimeType(src)} />
    </video>
  );
}

const MediaCard = ({
  className,
  media,
  isActive,
}: {
  className?: string;
  media: StackedCardMedia;
  isActive: boolean;
}) => {
  const isVideo = media.type === "video";
  const isGif = !isVideo && media.src.toLowerCase().endsWith(".gif");
  const stillSrc = isGif && media.poster ? media.poster : media.src;

  return (
    <div className={cn("project-stack-card", className)}>
      <div className="project-stack-card-inner">
        {isVideo ? (
          isActive ? (
            <ActiveVideo src={media.src} alt={media.alt} />
          ) : (
            <VideoThumbnail src={media.src} alt={media.alt} poster={media.poster} />
          )
        ) : isGif ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={stillSrc}
              alt={isActive ? "" : (media.alt ?? "Project media")}
              aria-hidden={isActive}
              className="project-stack-media"
            />
            {isActive ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={media.src}
                alt={media.alt ?? "Project media"}
                className="project-stack-media-layer"
              />
            ) : null}
          </>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={media.src}
            alt={media.alt ?? "Project media"}
            className="project-stack-media"
          />
        )}
      </div>
    </div>
  );
};

type StackedCardsInteractionProps = {
  cards: StackedCardMedia[];
  spreadDistance?: number;
  rotationAngle?: number;
  animationDelay?: number;
  className?: string;
  onCycle?: () => void;
};

const StackedCardsInteraction = ({
  cards,
  spreadDistance = 72,
  rotationAngle = 5,
  animationDelay = 0.1,
  className,
  onCycle,
}: StackedCardsInteractionProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const limitedCards = cards.slice(0, 3);
  const expanded = isHovering;
  const canCycle = limitedCards.length > 1 && Boolean(onCycle);

  const handleStackClick = () => {
    if (!canCycle) return;
    setIsHovering(false);
    onCycle?.();
  };

  if (limitedCards.length === 0) return null;

  return (
    <div className={cn("relative w-full max-w-[36rem]", className)}>
      <div
        className={cn("project-stack-stage", canCycle && "cursor-pointer")}
        onClick={handleStackClick}
        onKeyDown={(e) => {
          if (canCycle && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            handleStackClick();
          }
        }}
        role={canCycle ? "button" : undefined}
        tabIndex={canCycle ? 0 : undefined}
        aria-label={canCycle ? "Show next photo" : undefined}
      >
        {limitedCards.map((card, index) => {
          const isFirst = index === 0;

          let xOffset = 0;
          let rotation = 0;

          if (limitedCards.length > 1) {
            if (index === 1) {
              xOffset = -spreadDistance;
              rotation = -rotationAngle;
            } else if (index === 2) {
              xOffset = spreadDistance;
              rotation = rotationAngle;
            }
          }

          return (
            <motion.div
              key={card.src}
              className="absolute inset-0 flex items-center justify-center"
              style={{ transformOrigin: "center center" }}
              initial={false}
              animate={{
                x: expanded ? xOffset : 0,
                rotate: expanded ? rotation : 0,
                zIndex: isFirst ? 10 : limitedCards.length - index,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: index * animationDelay,
                type: "spring",
              }}
              {...(isFirst && {
                onHoverStart: () => setIsHovering(true),
                onHoverEnd: () => setIsHovering(false),
              })}
            >
              <MediaCard
                className={isFirst ? "z-10" : "z-0"}
                media={card}
                isActive={isFirst}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export { StackedCardsInteraction, MediaCard };
