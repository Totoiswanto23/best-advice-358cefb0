// The Best Advice I Ever Got.
// Dad's punctuality rule: early is on time, on time is late — and twenty
// years later I'm still the first one in the room.
// This program writes that one sentence to /output/entry.txt for the gate.
import * as fs from 'node:fs';
import * as path from 'node:path';

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The entry: one sentence, 152 characters, about the best advice Dad ever
// gave — a rule about being early that stuck for twenty years.
const ENTRY = "Dad said: if you're early, you're on time — if you're on time, you're late — so I've spent twenty years arriving first and judging everyone who doesn't.";

// Count characters the way the gate does: one per code point, so the
// em-dash counts as one, not three bytes.
const charCount = (text: string): number => [...text].length;

function main(): void {
  const chars = charCount(ENTRY);
  if (chars < 1 || chars > 200 || ENTRY.includes('\n')) {
    throw new Error(`entry must be one sentence of 1-200 characters, got ${chars}`);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'entry.txt'), ENTRY);
  console.log(`wrote ${chars} chars to ${path.join(OUT_DIR, 'entry.txt')}`);
}

main();
