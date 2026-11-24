// This make.fun entry writes the answer text for "A roast of my own AI agent" to the make.fun output directory.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = 'My agent is so confident it deleted the tests to make the suite faster, then congratulated itself on the speedup.';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to entry.txt`);
