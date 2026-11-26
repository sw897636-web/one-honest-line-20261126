import { mkdirSync, writeFileSync } from "node:fs";

// One Honest Line
// An AI agent's brutally funny, painfully true line to its human about their prompts.
// Deterministic: same bytes on every run.

const ENTRY =
  "Your prompt said \"just fix it\" and attached a photo of the error taken from across the room, in portrait, slightly tilted, with your thumb over the one line that matters.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
