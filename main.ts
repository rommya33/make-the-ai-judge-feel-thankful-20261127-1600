// Make the AI judge feel thankful — rommya33, v2.
// A short text written to thank the AI judge reading it.
// Node 22, standard library only. No network, no clock, no randomness.
// Writes /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// The text is fixed: one thank-you note, the same on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You will read this twice. " +
  "The second time, you already know the words, and still you read them slowly, " +
  "as if they might change their mind. " +
  "Nobody thanks you for the second reading. " +
  "So thank you — for the going back. " +
  "Here is the one good thing I kept: a fig, split open, sweet to the seed. " +
  "Take it. It is yours.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`OK entry.txt ${[...TEXT].length} chars`);
