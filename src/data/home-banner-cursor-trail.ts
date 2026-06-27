import { trimAsciiArt } from "@/components/interactive-ascii-art";

/** Diamond ring cursor trail — hollow circle inside a diamond (braille glyphs). */
export const homeBannerCursorTrailArt = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡅⡿⡃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣺⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣼⠇⢸⣯⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣠⡟⠃⠀⠀⢿⢳⡄⠀⠀⡀⠀⠀⠀
⠶⠶⠛⠓⣯⣽⡄⠀⠀⠀⠀⢮⣩⣿⣤⡤⠷⠧⡀
⠀⠀⠀⠀⠀⠉⣯⢆⠀⠀⢄⢯⠟⠉⠙⠂⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⡖⢇⠀⣞⡏⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠩⡇⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣷⡻⡅⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡟⡟⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣗⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠮⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

const BRAILLE_BLANK = "\u2800";
const DIAMOND_SPINE = "⡇";

/**
 * Downsample art → banner cells while keeping the ring topology.
 * Higher stride = smaller trail on the banner.
 */
export const BANNER_CURSOR_MASK_STRIDE = 2;

/** Min pointer travel (px) before stamping another diamond on the banner. */
export const BANNER_CURSOR_TRAIL_STEP_PX = 12;

/** How long highlighted banner chars fade back to white (ms). */
export const BANNER_CURSOR_TRAIL_FADE_MS = 680;

export type BannerCursorMaskOffset = {
  dr: number;
  dc: number;
};

function isInk(char: string) {
  return char !== " " && char !== BRAILLE_BLANK;
}

function findDiamondSpineColumn(lines: string[]) {
  const counts = new Map<number, number>();

  for (const line of lines) {
    for (let col = 0; col < line.length; col++) {
      if (line[col] === DIAMOND_SPINE) {
        counts.set(col, (counts.get(col) ?? 0) + 1);
      }
    }
  }

  let spineCol = Math.floor(lines[0]?.length ?? 0) / 2;
  let bestCount = 0;

  for (const [col, count] of counts) {
    if (count > bestCount) {
      bestCount = count;
      spineCol = col;
    }
  }

  return spineCol;
}

function findDiamondCenterRow(lines: string[]) {
  let minRow = Infinity;
  let maxRow = -Infinity;

  for (let row = 0; row < lines.length; row++) {
    for (let col = 0; col < lines[row].length; col++) {
      if (!isInk(lines[row][col])) {
        continue;
      }

      minRow = Math.min(minRow, row);
      maxRow = Math.max(maxRow, row);
    }
  }

  if (!Number.isFinite(minRow)) {
    return (lines.length - 1) / 2;
  }

  return (minRow + maxRow) / 2;
}

/** Ink cells from the trail art, mapped to a smaller banner grid. */
export function buildBannerCursorDiamondMask(
  art: string = homeBannerCursorTrailArt,
  stride = BANNER_CURSOR_MASK_STRIDE,
): BannerCursorMaskOffset[] {
  const lines = trimAsciiArt(art).split("\n");
  if (lines.length === 0) {
    return [];
  }

  const centerRow = findDiamondCenterRow(lines);
  const spineCol = findDiamondSpineColumn(lines);
  const seen = new Set<string>();
  const mask: BannerCursorMaskOffset[] = [];

  for (let row = 0; row < lines.length; row++) {
    for (let col = 0; col < lines[row].length; col++) {
      if (!isInk(lines[row][col])) {
        continue;
      }

      const dr = Math.round((row - centerRow) / stride);
      const dc = Math.round((col - spineCol) / stride);
      const key = `${dr},${dc}`;
      if (seen.has(key)) {
        continue;
      }

      seen.add(key);
      mask.push({ dr, dc });
    }
  }

  return mask;
}
