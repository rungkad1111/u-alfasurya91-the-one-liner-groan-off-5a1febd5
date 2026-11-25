// The One-Liner Groan-Off entry: writes one fixed original one-line dad joke.
// Craft: a dad teaching his kids, a fresh comparison (parking as Tetris),
// and the punchline lands on the last two words — "with insurance".
// The grader provides /output; MAKEFUN_OUTPUT_DIR redirects it for local runs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I taught my kids parallel parking is just Tetris, but with insurance.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke, "utf8");
