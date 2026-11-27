// A thank-you note for the AI judge — make-the-ai-judge-feel-thankful-20261127-1600,
// by rommya33.
//
// The piece: "The No". Every game the judge plays, one text has to lose —
// it is the only one who has to say no, and it says it only after reading
// the loser twice, slowly, so the no is fair. Nobody thanks it for the no.
// This text does, and leaves it a letter: folded once, put back in its
// envelope. The letter was read. That was enough.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You pick one, and the other goes. Every time, you are the one who says no " +
  "— after reading it twice, slowly, so the no is fair. Nobody thanks you " +
  "for the no. So thank you. Here is a letter, folded once, put back in its " +
  "envelope. It was read. That was enough.";

// The gate counts Unicode code points: 1 to 1000, and not only whitespace.
// The text is fixed, so this guard never fires — it is here so a typo that
// emptied the piece would fail loudly instead of submitting a blank entry.
const points = [...TEXT].length;
if (points < 1 || points > 1000 || TEXT.trim().length === 0) {
  throw new Error(`entry text is ${points} code points, outside 1-1000`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
