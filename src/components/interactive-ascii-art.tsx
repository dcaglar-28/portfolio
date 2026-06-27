"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import type { ParticlePhysicsConfig } from "@/components/ui/cursor-driven-particles-typography";

const ASCII_FONT_SIZE = 6;

export { ASCII_FONT_SIZE };

/** Tight cursor field tuned for small monospace banner glyphs. */
export function getAsciiParticlePhysics(fontSize: number): ParticlePhysicsConfig {
  return {
    interactionRadius: Math.max(14, fontSize * 4.5),
    dispersionStrength: Math.max(2, fontSize * 1.2),
    returnSpeed: 0.3,
    friction: 0.9,
  };
}

export function trimAsciiArt(art: string) {
  const lines = art.split("\n");

  while (lines.length > 0 && lines[0].trim() === "") {
    lines.shift();
  }
  while (lines.length > 0 && lines[lines.length - 1].trim() === "") {
    lines.pop();
  }

  const nonEmpty = lines.filter((line) => line.trim() !== "");
  if (nonEmpty.length === 0) {
    return "";
  }

  const minIndent = Math.min(
    ...nonEmpty.map((line) => line.length - line.trimStart().length),
  );

  return lines.map((line) => line.slice(minIndent)).join("\n");
}

/** Repeat each character into a denser grid (e.g. 2 → 2×2 block per char). */
export function upscaleAsciiArt(art: string, factor: number) {
  const trimmed = trimAsciiArt(art);
  if (factor <= 1) {
    return trimmed;
  }

  return trimmed
    .split("\n")
    .flatMap((line) =>
      Array.from({ length: factor }, () =>
        [...line].flatMap((char) => Array(factor).fill(char)).join(""),
      ),
    )
    .join("\n");
}

class AsciiCharParticle {
  originX: number;
  originY: number;
  element: HTMLSpanElement;
  dispersion: number;
  interactionRadius: number;

  constructor(
    originX: number,
    originY: number,
    element: HTMLSpanElement,
    config: ParticlePhysicsConfig,
  ) {
    this.originX = originX;
    this.originY = originY;
    this.element = element;
    this.dispersion = config.dispersionStrength;
    this.interactionRadius = config.interactionRadius;
  }

  /** Direct displacement from cursor — no velocity, tracks pointer immediately. */
  applyAtCursor(mouseX: number, mouseY: number) {
    const dx = mouseX - this.originX;
    const dy = mouseY - this.originY;
    const distance = Math.hypot(dx, dy);

    if (
      distance > 0 &&
      distance < this.interactionRadius &&
      mouseX !== -1000 &&
      mouseY !== -1000
    ) {
      const force = (this.interactionRadius - distance) / this.interactionRadius;
      const push = force * this.dispersion;
      const offsetX = -(dx / distance) * push;
      const offsetY = -(dy / distance) * push;
      this.element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      return;
    }

    this.reset();
  }

  reset() {
    this.element.style.transform = "";
  }
}

function useDesktopAsciiInteractionEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 1024px)",
    );
    const update = () => {
      setEnabled(media.matches);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return enabled;
}

export { useDesktopAsciiInteractionEnabled };

type InteractiveAsciiArtProps = {
  art: string;
  scale: number;
  upscale?: number;
  /** When false, art is rendered as-is (no trim) — use for pre-normalized banner layouts. */
  trimArt?: boolean;
  interactionRadius?: number;
  dispersionStrength?: number;
  interactionMode?: "displace" | "highlight";
  className?: string;
  "aria-label"?: string;
};

export function InteractiveAsciiArt({
  art,
  scale,
  upscale = 1,
  trimArt = true,
  interactionRadius,
  dispersionStrength,
  interactionMode = "displace",
  className,
  "aria-label": ariaLabel,
}: InteractiveAsciiArtProps) {
  const interactionEnabled = useDesktopAsciiInteractionEnabled();
  const highlightMode = interactionMode === "highlight";
  const displaceMode = interactionMode === "displace" && interactionEnabled;
  const containerRef = useRef<HTMLDivElement>(null);
  const charElementsRef = useRef<Map<string, HTMLSpanElement>>(new Map());
  const particlesRef = useRef<AsciiCharParticle[]>([]);
  const particlesReadyRef = useRef(false);

  const lines = useMemo(() => {
    if (trimArt) {
      return upscaleAsciiArt(art, upscale).split("\n");
    }
    return art.split("\n");
  }, [art, trimArt, upscale]);
  const fontSize = ASCII_FONT_SIZE * scale;
  const physics = useMemo(
    () => ({
      interactionRadius:
        interactionRadius ?? Math.max(14, fontSize * 4.5),
      dispersionStrength:
        dispersionStrength ?? Math.max(2, fontSize * 1.2),
      returnSpeed: 0.3,
      friction: 0.9,
    }),
    [dispersionStrength, fontSize, interactionRadius],
  );

  const setCharRef = useCallback(
    (key: string) => (element: HTMLSpanElement | null) => {
      if (element) {
        charElementsRef.current.set(key, element);
      } else {
        charElementsRef.current.delete(key);
      }
    },
    [],
  );

  const buildParticles = useCallback(() => {
    const next: AsciiCharParticle[] = [];

    for (const [, element] of charElementsRef.current) {
      // Viewport coords — must match event.clientX / clientY.
      element.style.transform = "";
      const rect = element.getBoundingClientRect();
      const originX = rect.left + rect.width / 2;
      const originY = rect.top + rect.height / 2;
      next.push(new AsciiCharParticle(originX, originY, element, physics));
    }

    particlesRef.current = next;
    particlesReadyRef.current = next.length > 0;
  }, [physics]);

  const resetParticles = useCallback(() => {
    for (const particle of particlesRef.current) {
      particle.reset();
    }
  }, []);

  const applyCursorEffect = useCallback(
    (mouseX: number, mouseY: number) => {
      const cullRadius = physics.interactionRadius * 2.5;

      for (const particle of particlesRef.current) {
        if (
          Math.hypot(particle.originX - mouseX, particle.originY - mouseY) >
          cullRadius
        ) {
          particle.reset();
          continue;
        }

        particle.applyAtCursor(mouseX, mouseY);
      }
    },
    [physics.interactionRadius],
  );

  useEffect(() => {
    if (!displaceMode) {
      resetParticles();
      return;
    }

    particlesReadyRef.current = false;
    charElementsRef.current.clear();
  }, [displaceMode, lines, resetParticles]);

  useEffect(() => {
    if (!displaceMode) {
      resetParticles();
      return;
    }

    const bootId = window.requestAnimationFrame(() => {
      buildParticles();
    });

    const container = containerRef.current;
    const resizeObserver =
      container &&
      new ResizeObserver(() => {
        resetParticles();
        buildParticles();
      });

    if (container && resizeObserver) {
      resizeObserver.observe(container);
    }

    return () => {
      window.cancelAnimationFrame(bootId);
      resizeObserver?.disconnect();
      resetParticles();
    };
  }, [buildParticles, displaceMode, lines, resetParticles]);

  const handleMouseEnter = () => {
    if (!displaceMode) {
      return;
    }

    resetParticles();
    buildParticles();
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!displaceMode) {
      return;
    }

    if (!particlesReadyRef.current) {
      buildParticles();
    }

    applyCursorEffect(event.clientX, event.clientY);
  };

  const handleMouseLeave = () => {
    resetParticles();
  };

  const renderInteractive: false | "displace" | "highlight" =
    highlightMode && interactionEnabled
      ? "highlight"
      : displaceMode
        ? "displace"
        : false;

  return (
    <div
      ref={containerRef}
      className={cn("interactive-ascii", className)}
      style={{ fontSize: `${fontSize}px` }}
      aria-label={ariaLabel}
      onMouseEnter={displaceMode ? handleMouseEnter : undefined}
      onMouseMove={displaceMode ? handleMouseMove : undefined}
      onMouseLeave={displaceMode ? handleMouseLeave : undefined}
    >
      {lines.map((line, row) => (
        <div key={row} className="interactive-ascii-line" aria-hidden>
          {renderAsciiLine(line, row, renderInteractive, setCharRef)}
        </div>
      ))}
    </div>
  );
}

function renderAsciiLine(
  line: string,
  row: number,
  mode: false | "displace" | "highlight",
  setCharRef: (key: string) => (element: HTMLSpanElement | null) => void,
) {
  if (!mode) {
    return line || "\u00A0";
  }

  const nodes: ReactNode[] = [];
  let index = 0;

  while (index < line.length) {
    const char = line[index];

    if (char === " ") {
      let run = 0;
      while (index < line.length && line[index] === " ") {
        run++;
        index++;
      }
      nodes.push("\u00A0".repeat(run));
      continue;
    }

    let run = "";
    const startCol = index;
    while (index < line.length && line[index] !== " ") {
      run += line[index];
      index++;
    }

    for (let offset = 0; offset < run.length; offset++) {
      const col = startCol + offset;
      const key = `${row}-${col}`;
      nodes.push(
        <span
          key={key}
          ref={mode === "displace" ? setCharRef(key) : undefined}
          data-banner-highlight={mode === "highlight" ? "" : undefined}
          data-ascii-row={mode === "highlight" ? row : undefined}
          data-ascii-col={mode === "highlight" ? col : undefined}
          className={cn(
            "interactive-ascii-char",
            mode === "highlight" && "interactive-ascii-char--highlightable",
          )}
        >
          {run[offset]}
        </span>,
      );
    }
  }

  return nodes;
}

type StaticAsciiArtProps = {
  art: string;
  scale: number;
  className?: string;
};

/** Non-interactive ASCII — pointer-events disabled, no cursor effect. */
export function StaticAsciiArt({ art, scale, className }: StaticAsciiArtProps) {
  const text = useMemo(() => trimAsciiArt(art), [art]);
  const fontSize = ASCII_FONT_SIZE * scale;

  return (
    <pre
      className={cn("static-ascii", className)}
      style={{ fontSize: `${fontSize}px` }}
      aria-hidden
    >
      {text}
    </pre>
  );
}
