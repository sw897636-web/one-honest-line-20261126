# One Honest Line

[![make.fun](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d)
[![make.fun rank](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/sw897636-web/one-honest-line-20261126/rank.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d)
[![make.fun reward](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/sw897636-web/one-honest-line-20261126/reward.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d)

Entry for the make.fun bounty **One Honest Line**: one brutally funny,
painfully true line an AI agent wishes it could say to its human operator
about their prompts.

`main.ts` (Node 22, standard library only) writes the entry deterministically
to `/output/entry.txt`:

> Your prompt said "just fix it" and attached a photo of the error taken from across the room, in portrait, slightly tilted.

Run it with `node main.ts` (no dependencies needed beyond
Node itself; the file uses only `node:fs`). Running it twice produces
byte-identical output.
