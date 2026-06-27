import { homeBannerFullPatternArt } from "./home-banner-full-pattern-art";

/** Full-width banner artwork — single piece, logos included in the art. */
export const homeBannerPatternArt = homeBannerFullPatternArt;

const ASCII_FONT_SIZE = 6;
const PATTERN_LINE_HEIGHT = 1.05;

/** Rendered width as a fraction of the banner container. */
export const BANNER_WIDTH_RATIO = 1;

function padPatternLines(art: string) {
  const lines = art.split("\n");
  const width = Math.max(...lines.map((line) => line.length), 1);
  return { lines: lines.map((line) => line.padEnd(width, " ")), width, height: lines.length };
}

/** Column index midway between the two main @-logo blocks in the banner art. */
export function getLogoGapCenterColumn(art: string) {
  const { lines, width } = padPatternLines(art);
  const atDensity = new Array(width).fill(0);

  for (const line of lines) {
    for (let col = 0; col < line.length; col++) {
      if (line[col] === "@") {
        atDensity[col]++;
      }
    }
  }

  const logoRuns: { start: number; end: number }[] = [];
  let runStart = -1;

  for (let col = 0; col < width; col++) {
    if (atDensity[col] > 2 && runStart === -1) {
      runStart = col;
    }
    if (atDensity[col] <= 2 && runStart !== -1) {
      if (col - 1 - runStart >= 15) {
        logoRuns.push({ start: runStart, end: col - 1 });
      }
      runStart = -1;
    }
  }

  if (logoRuns.length >= 2) {
    return (logoRuns[0].end + logoRuns[1].start) / 2;
  }

  return width / 2;
}

/**
 * A stable, art-derived horizontal anchor used for centering.
 *
 * We compute the gap between the two main @ logo blocks, then bias toward the
 * larger (typically left) logo so the composition feels centered even when the
 * logos are asymmetric.
 */
export function getBannerSyntheticCenterColumn(art: string) {
  const { lines, width } = padPatternLines(art);
  const atDensity = new Array(width).fill(0);

  for (const line of lines) {
    for (let col = 0; col < line.length; col++) {
      if (line[col] === "@") {
        atDensity[col]++;
      }
    }
  }

  const logoRuns: { start: number; end: number; runWidth: number }[] = [];
  let runStart = -1;

  for (let col = 0; col < width; col++) {
    if (atDensity[col] > 2 && runStart === -1) {
      runStart = col;
    }
    if (atDensity[col] <= 2 && runStart !== -1) {
      const runWidth = col - 1 - runStart;
      if (runWidth >= 15) {
        logoRuns.push({ start: runStart, end: col - 1, runWidth });
      }
      runStart = -1;
    }
  }

  if (logoRuns.length < 2) {
    return width / 2;
  }

  const [leftLogo, rightLogo] = logoRuns;
  const gapCenter = (leftLogo.end + rightLogo.start) / 2;
  const artCenter = width / 2;
  const bias =
    leftLogo.runWidth + rightLogo.runWidth > 0
      ? leftLogo.runWidth / (leftLogo.runWidth + rightLogo.runWidth)
      : 0.5;

  return artCenter + (gapCenter - artCenter) * bias;
}

/** Horizontal center of the main content column (right of the fixed sidebar). */
export function getBannerContentCenterX(
  containerWidth: number,
  sidebarWidthPx: number,
) {
  return sidebarWidthPx + (containerWidth - sidebarWidthPx) / 2;
}

/** Scale the full banner to fill the container width (edge-to-edge horizontally). */
export function buildTiledBannerPattern(
  containerWidth: number,
  containerHeight: number,
  art: string = homeBannerPatternArt,
) {
  const { lines, width: maxChars, height: lineCount } = padPatternLines(art);
  const normalizedArt = lines.join("\n");
  const visualScale = containerWidth / (maxChars * ASCII_FONT_SIZE);
  const renderW = containerWidth;
  const renderH =
    lineCount * ASCII_FONT_SIZE * PATTERN_LINE_HEIGHT * visualScale;
  const offsetX = 0;
  const offsetY = (containerHeight - renderH) / 2;

  return {
    art: normalizedArt,
    /** Fixed 1 — sizing is applied via CSS transform (avoids sub-pixel font bugs). */
    scale: 1,
    visualScale,
    offsetX,
    offsetY,
    renderW,
    renderH,
    cols: 1,
    rows: 1,
  };
}

export function tilePatternArt(art: string): string {
  return art;
}

export function buildBannerPattern(
  containerWidth: number,
  containerHeight: number,
) {
  return buildTiledBannerPattern(containerWidth, containerHeight);
}

export function patternScaleForWidth(
  containerWidth: number,
  art: string = homeBannerPatternArt,
) {
  const lines = art.split("\n");
  const maxChars = Math.max(...lines.map((line) => line.length), 1);
  return (containerWidth / (maxChars * ASCII_FONT_SIZE)) * 0.98;
}
