// One Line, Zero Use: The Useless Superpower Sprint
// Writes a single original one-liner to /output/entry.txt.
// Deterministic, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I can teleport — but only to the exact spot I'm already standing.";

// Self-check: the gate requires UTF-8 text of 1-200 characters,
// a single line, not only white space. Fail loudly if violated.
const chars = [...LINE];
if (LINE.trim().length === 0) {
  console.error("entry must not be blank");
  process.exit(1);
}
if (chars.length < 1 || chars.length > 200) {
  console.error(`entry must be 1-200 characters, got ${chars.length}`);
  process.exit(1);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  console.error("entry must be a single line");
  process.exit(1);
}

const outDir = process.env.OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
