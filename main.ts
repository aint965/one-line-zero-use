// One Line, Zero Use: The Useless Superpower Sprint
// Writes a single original one-liner to /output/entry.txt.
// Deterministic, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I can read minds — but only my own, and only out loud.";

const outDir = process.env.OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
