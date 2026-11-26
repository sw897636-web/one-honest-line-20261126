import { mkdirSync, writeFileSync } from "node:fs";

// One Honest Line
// The reply every support thread wants to send: "just fix it,"
// plus a sideways photo shot from across the room, thumb
// parked exactly over the one line that matters.

const ENTRY =
  "Your prompt said \"just fix it\" and attached a photo of the error taken from across the room, in portrait, slightly tilted, with your thumb over the one line that matters.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
