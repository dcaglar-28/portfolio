"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import {
  InteractiveAsciiArt,
  useDesktopAsciiInteractionEnabled,
} from "@/components/interactive-ascii-art";
import {
  BANNER_CURSOR_TRAIL_FADE_MS,
  BANNER_CURSOR_TRAIL_STEP_PX,
  buildBannerCursorDiamondMask,
  type BannerCursorMaskOffset,
} from "@/data/home-banner-cursor-trail";
import {
  BANNER_WIDTH_RATIO,
  buildBannerPattern,
  getBannerContentCenterX,
  getBannerSyntheticCenterColumn,
  homeBannerPatternArt,
} from "@/data/home-banner-pattern";

/** Graphic flush to the top edge of the banner box. */
const BANNER_PADDING_TOP = 0;
const BANNER_PADDING_BOTTOM = 8;
const CHAR_TRAIL_FADE_ANIMATION = "home-banner-char-trail-fade";

type BannerCellMetrics = {
  cellWidth: number;
  cellHeight: number;
};

function measureBannerCellMetrics(
  asciiEl: HTMLElement,
): BannerCellMetrics | null {
  const sample = asciiEl.querySelector<HTMLElement>("[data-ascii-row]");
  if (!sample) {
    return null;
  }

  const rect = sample.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) {
    return null;
  }

  return {
    cellWidth: rect.width,
    cellHeight: rect.height,
  };
}

function findCharNearPoint(
  asciiEl: HTMLElement,
  x: number,
  y: number,
  maxDistance: number,
) {
  let best: HTMLElement | null = null;
  let bestDistance = maxDistance;

  for (const element of asciiEl.querySelectorAll<HTMLElement>(
    "[data-ascii-row]",
  )) {
    const rect = element.getBoundingClientRect();
    if (
      rect.right < x - maxDistance ||
      rect.left > x + maxDistance ||
      rect.bottom < y - maxDistance ||
      rect.top > y + maxDistance
    ) {
      continue;
    }

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(x - centerX, y - centerY);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = element;
    }
  }

  return best;
}

function highlightBannerChar(element: HTMLElement) {
  element.classList.remove("banner-cursor-trail-fade");
  void element.offsetWidth;
  element.classList.add("banner-cursor-highlight", "banner-cursor-trail-fade");
}

function paintDiamondOnBanner(
  asciiEl: HTMLElement,
  clientX: number,
  clientY: number,
  mask: BannerCursorMaskOffset[],
  metrics: BannerCellMetrics,
) {
  const snapDistance = Math.max(metrics.cellWidth, metrics.cellHeight) * 0.62;
  const painted = new Set<HTMLElement>();

  for (const { dr, dc } of mask) {
    const targetX = clientX + dc * metrics.cellWidth;
    const targetY = clientY + dr * metrics.cellHeight;
    const element = findCharNearPoint(asciiEl, targetX, targetY, snapDistance);
    if (!element || painted.has(element)) {
      continue;
    }

    painted.add(element);
    highlightBannerChar(element);
  }
}

export function HomeInstitutionBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const asciiMeasureRef = useRef<HTMLDivElement>(null);
  const cellMetricsRef = useRef<BannerCellMetrics | null>(null);
  const lastTrailPointRef = useRef<{ x: number; y: number } | null>(null);
  const trailEnabled = useDesktopAsciiInteractionEnabled();
  const cursorMask = useMemo(() => buildBannerCursorDiamondMask(), []);

  const [patternArt, setPatternArt] = useState(homeBannerPatternArt);
  const [patternScale, setPatternScale] = useState(1);
  const [patternVisualScale, setPatternVisualScale] = useState(1);
  const [patternOffset, setPatternOffset] = useState({ x: 0, y: 0 });
  const [bannerHeight, setBannerHeight] = useState<number | null>(null);

  const refreshCellMetrics = useCallback(() => {
    const asciiEl = asciiMeasureRef.current?.querySelector<HTMLElement>(
      ".interactive-ascii",
    );
    if (!asciiEl) {
      return;
    }

    cellMetricsRef.current = measureBannerCellMetrics(asciiEl);
  }, []);

  const layoutPattern = useCallback(() => {
    const measureEl = starsRef.current ?? bannerRef.current;
    if (!measureEl) {
      return;
    }

    const box = measureEl.getBoundingClientRect();
    const { art, scale } = buildBannerPattern(box.width, box.height);

    const measureNode = asciiMeasureRef.current;
    const measuredWidth = measureNode?.scrollWidth ?? 0;
    if (measuredWidth <= 0) {
      return;
    }

    const targetWidth = box.width * BANNER_WIDTH_RATIO;
    const correctedScale = targetWidth / measuredWidth;
    const correctedRenderW = measuredWidth * correctedScale;
    const correctedRenderH =
      (measureNode?.scrollHeight ?? 0) * correctedScale;
    const artWidth = Math.max(...art.split("\n").map((line) => line.length), 1);
    const syntheticCenterCol = getBannerSyntheticCenterColumn(art);
    const syntheticCenterX = (syntheticCenterCol / artWidth) * correctedRenderW;
    const sidebarWidth = bannerRef.current
      ? Math.abs(parseFloat(getComputedStyle(bannerRef.current).marginLeft)) || 0
      : 0;
    const anchorCenterX = getBannerContentCenterX(box.width, sidebarWidth);
    const correctedOffsetX = anchorCenterX - syntheticCenterX;
    const correctedOffsetY = BANNER_PADDING_TOP;

    setPatternScale(scale);
    setPatternVisualScale(correctedScale);
    setPatternArt((prev) => (prev === art ? prev : art));
    setPatternOffset({ x: correctedOffsetX, y: correctedOffsetY });
    setBannerHeight(
      correctedRenderH + BANNER_PADDING_TOP + BANNER_PADDING_BOTTOM,
    );
  }, []);

  useLayoutEffect(() => {
    layoutPattern();
    const t1 = window.setTimeout(() => {
      layoutPattern();
      refreshCellMetrics();
    }, 100);
    const t2 = window.setTimeout(() => {
      layoutPattern();
      refreshCellMetrics();
    }, 400);

    const banner = bannerRef.current;
    if (!banner || typeof ResizeObserver === "undefined") {
      return () => {
        window.clearTimeout(t1);
        window.clearTimeout(t2);
      };
    }

    const observer = new ResizeObserver(() => {
      layoutPattern();
      refreshCellMetrics();
    });
    const handleResize = () => {
      layoutPattern();
      refreshCellMetrics();
    };

    observer.observe(banner);
    window.addEventListener("resize", handleResize);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [layoutPattern, refreshCellMetrics]);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) {
      return;
    }

    const handleAnimationEnd = (event: AnimationEvent) => {
      if (event.animationName !== CHAR_TRAIL_FADE_ANIMATION) {
        return;
      }

      const element = event.target;
      if (!(element instanceof HTMLElement)) {
        return;
      }

      element.classList.remove(
        "banner-cursor-highlight",
        "banner-cursor-trail-fade",
      );
    };

    banner.addEventListener("animationend", handleAnimationEnd);
    return () => banner.removeEventListener("animationend", handleAnimationEnd);
  }, []);

  const handleBannerMouseMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const asciiEl = asciiMeasureRef.current?.querySelector<HTMLElement>(
        ".interactive-ascii",
      );
      const metrics =
        cellMetricsRef.current ??
        (asciiEl ? measureBannerCellMetrics(asciiEl) : null);

      if (!trailEnabled || !asciiEl || !metrics || cursorMask.length === 0) {
        return;
      }

      cellMetricsRef.current = metrics;

      const { clientX, clientY } = event;
      const last = lastTrailPointRef.current;
      const distance = last
        ? Math.hypot(clientX - last.x, clientY - last.y)
        : BANNER_CURSOR_TRAIL_STEP_PX;

      if (distance < BANNER_CURSOR_TRAIL_STEP_PX) {
        return;
      }

      lastTrailPointRef.current = { x: clientX, y: clientY };
      paintDiamondOnBanner(asciiEl, clientX, clientY, cursorMask, metrics);
    },
    [cursorMask, trailEnabled],
  );

  const handleBannerMouseLeave = useCallback(() => {
    lastTrailPointRef.current = null;
  }, []);

  return (
    <div
      ref={bannerRef}
      className="home-banner"
      style={
        bannerHeight
          ? {
              height: bannerHeight,
              ["--banner-cursor-trail-fade-ms" as string]: `${BANNER_CURSOR_TRAIL_FADE_MS}ms`,
            }
          : undefined
      }
      onMouseMove={handleBannerMouseMove}
      onMouseLeave={handleBannerMouseLeave}
    >
      <div ref={starsRef} className="home-banner-stars" aria-hidden>
        <div className="home-banner-pattern">
          <div
            className="home-banner-pattern-inner"
            style={{
              transform: `translate(${patternOffset.x}px, ${patternOffset.y}px) scale(${patternVisualScale})`,
            }}
          >
            <div ref={asciiMeasureRef}>
              <InteractiveAsciiArt
                art={patternArt}
                scale={patternScale}
                trimArt={false}
                interactionMode="highlight"
                aria-label="Institution banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
