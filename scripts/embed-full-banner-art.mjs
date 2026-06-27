import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const dir = dirname(fileURLToPath(import.meta.url));

function trimAsciiArt(art) {
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
  return lines.map((line) => line.slice(minIndent).trimEnd()).join("\n");
}

const art = trimAsciiArt(
  readFileSync(join(dir, "full-banner-art.txt"), "utf8").replace(/\r\n/g, "\n"),
);
const out = `export const homeBannerFullPatternArt = ${JSON.stringify(art)};\n`;
writeFileSync(join(dir, "../src/data/home-banner-full-pattern-art.ts"), out);
