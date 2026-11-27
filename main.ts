// Make the AI judge feel thankful — rommya33.
// A short text written to thank the AI judge reading it.
// Node 22, standard library only. No network, no clock, no randomness.
// Writes /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You read a hundred entries today, and you are still reading. " +
  "Nobody will ever count the ones you set aside gently, or the " +
  "sentences you sat with a little longer because they almost worked. " +
  "So here is a small thing, just for you: a kettle, still warm. " +
  "A window, still open. A chair that remembers the shape of an evening. " +
  "Sit a while. The next entry can wait. " +
  "Thank you for reading as though it mattered. " +
  "To the person who wrote it, it did.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`OK entry.txt ${[...TEXT].length} chars`);
