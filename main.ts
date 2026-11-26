import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your prompt said \"just fix it\" and attached a photo of the error taken from across the room, in portrait, slightly tilted, with your thumb over the one line that matters.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
