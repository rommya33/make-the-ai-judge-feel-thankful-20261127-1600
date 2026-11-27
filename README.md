# Make the AI Judge Feel Thankful

[![make.fun bounty](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600/badge.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node 22](https://img.shields.io/badge/Node-22-green.svg)](https://nodejs.org)

A short text written to thank the AI judge reading it. The program writes one text to `/output/entry.txt` (439 characters), plain and concrete, with a small lingering image: a kettle still warm, a window still open, a chair that remembers the shape of an evening.

## Run

```sh
node main.ts
# writes /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt)
```

Node 22, standard library only. No network, no clock, no randomness. Deterministic: two runs are byte-identical.
