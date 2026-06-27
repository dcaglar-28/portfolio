"use client";

import { useCallback, useEffect, useRef } from "react";
import createGlobe from "cobe";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export type GlobeFocusItem = {
  title: string;
  description: string;
};

export interface PersonLocation {
  id: string;
  location: [number, number];
  name: string;
  markerLabel?: string;
  focusItems: GlobeFocusItem[];
}

interface InteractiveGlobeWindowProps {
  person: PersonLocation;
  className?: string;
}

export function InteractiveGlobeWindow({ person, className }: InteractiveGlobeWindowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const lastPointer = useRef<{ x: number; y: number; t: number } | null>(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const velocity = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);

  const markerLabel = person.markerLabel ?? person.name;
  const markerId = person.id;

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY };
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
  }, []);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (pointerInteracting.current === null) return;

    const deltaX = e.clientX - pointerInteracting.current.x;
    const deltaY = e.clientY - pointerInteracting.current.y;
    dragOffset.current = { phi: deltaX / 200, theta: deltaY / 500 };

    const now = Date.now();
    if (lastPointer.current) {
      const dt = Math.max(now - lastPointer.current.t, 1);
      const maxVelocity = 0.08;
      velocity.current = {
        phi: Math.max(
          -maxVelocity,
          Math.min(maxVelocity, ((e.clientX - lastPointer.current.x) / dt) * 0.5),
        ),
        theta: Math.max(
          -maxVelocity,
          Math.min(maxVelocity, ((e.clientY - lastPointer.current.y) / dt) * 0.15),
        ),
      };
    }
    lastPointer.current = { x: e.clientX, y: e.clientY, t: now };
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi;
      thetaOffsetRef.current += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
      lastPointer.current = null;
    }
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let globe: ReturnType<typeof createGlobe> | null = null;
    let animationId = 0;

    function init(target: HTMLCanvasElement) {
      const width = target.offsetWidth;
      if (width === 0 || globe) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      globe = createGlobe(target, {
        devicePixelRatio: dpr,
        width,
        height: width,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.42, 0.36, 0.9],
        glowColor: [0.1, 0.1, 0.15],
        markerElevation: 0.015,
        markers: [{ location: person.location, size: 0.1, id: markerId }],
        opacity: 0.85,
      });

      function animate() {
        if (Math.abs(velocity.current.phi) > 0.0001 || Math.abs(velocity.current.theta) > 0.0001) {
          phiOffsetRef.current += velocity.current.phi;
          thetaOffsetRef.current += velocity.current.theta;
          velocity.current.phi *= 0.97;
          velocity.current.theta *= 0.97;
        }

        const thetaMin = -0.4;
        const thetaMax = 0.4;
        if (thetaOffsetRef.current < thetaMin) {
          thetaOffsetRef.current += (thetaMin - thetaOffsetRef.current) * 0.1;
        } else if (thetaOffsetRef.current > thetaMax) {
          thetaOffsetRef.current += (thetaMax - thetaOffsetRef.current) * 0.1;
        }

        globe?.update({
          phi: phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.3 + thetaOffsetRef.current + dragOffset.current.theta,
        });
        animationId = requestAnimationFrame(animate);
      }

      animate();
      window.setTimeout(() => {
        target.style.opacity = "1";
      }, 100);
    }

    if (canvas.offsetWidth > 0) {
      init(canvas);
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect();
          init(canvas);
        }
      });
      ro.observe(canvas);
    }

    return () => {
      cancelAnimationFrame(animationId);
      globe?.destroy();
    };
  }, [person.location, markerId]);

  return (
    <div className={cn("relative mx-auto w-full", className)}>
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-theme">
        <div
          className="pointer-events-none absolute top-0 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />

        <div className="relative flex min-h-[520px] flex-col lg:min-h-[600px] lg:flex-row">
          <div className="relative z-10 flex flex-1 flex-col justify-center bg-gradient-to-br from-background to-muted/20 p-8 lg:p-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">{person.name}</h2>
            </div>

            <div className="space-y-6">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                CMU Silicon Valley Campus
              </p>
              {person.focusItems.map((item) => (
                <div key={item.title}>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90 md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[360px] flex-1 items-center justify-center p-6 lg:min-h-0 lg:p-4">
            <div className="relative aspect-square w-full max-w-md select-none">
              <canvas
                ref={canvasRef}
                onPointerDown={handlePointerDown}
                className="h-full w-full touch-none rounded-full"
                style={{
                  width: "100%",
                  height: "100%",
                  cursor: "grab",
                  opacity: 0,
                  transition: "opacity 1.2s ease",
                }}
                aria-label={`Interactive globe showing ${markerLabel}`}
              />
              <div
                className="pointer-events-none absolute z-10 whitespace-nowrap rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold tracking-wide text-primary-foreground shadow-theme transition-[opacity,filter] duration-500"
                style={
                  {
                    positionAnchor: `--cobe-${markerId}`,
                    bottom: "anchor(top)",
                    left: "anchor(center)",
                    translate: "-50% 0",
                    marginBottom: 12,
                    opacity: `var(--cobe-visible-${markerId}, 0)`,
                    filter: `blur(calc((1 - var(--cobe-visible-${markerId}, 0)) * 6px))`,
                  } as React.CSSProperties
                }
              >
                {markerLabel}
                <span
                  className="absolute top-full left-1/2 -translate-x-1/2 border-[7px] border-transparent border-t-primary"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
