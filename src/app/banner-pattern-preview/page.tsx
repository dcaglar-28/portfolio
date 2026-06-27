"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import "./banner-pattern-preview.css";
import {
  InteractiveAsciiArt,
  ASCII_FONT_SIZE,
} from "@/components/interactive-ascii-art";
import { buildTiledBannerPattern } from "@/data/home-banner-pattern";

export default function BannerPatternPreviewPage() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.45);
  const [patternArt, setPatternArt] = useState("");
  const [grid, setGrid] = useState({ cols: 1, rows: 1 });

  useLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const update = () => {
      const { width, height } = frame.getBoundingClientRect();
      const tiled = buildTiledBannerPattern(width, height);
      setScale(tiled.scale);
      setPatternArt(tiled.art);
      setGrid({ cols: tiled.cols, rows: tiled.rows });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="banner-pattern-preview">
      <div className="banner-pattern-preview__toolbar">
        <p className="banner-pattern-preview__label">
          Tiled banner pattern — {grid.cols}×{grid.rows} tiles · scale{" "}
          {scale.toFixed(2)} ({ASCII_FONT_SIZE}px base)
        </p>
        <Link href="/home" className="banner-pattern-preview__back">
          ← Back to home
        </Link>
      </div>

      <div className="banner-pattern-preview__stage">
        <div ref={frameRef} className="banner-pattern-preview__frame" aria-hidden>
          {patternArt ? (
            <InteractiveAsciiArt
              art={patternArt}
              scale={scale}
              interactionMode="highlight"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
