// news-image-20261120 entry: a newspaper front page summing up Friday, November 20, 2026.
// The poster (entry.png) was composed for this competition: three AI-generated editorial
// illustrations (the cheering stock-exchange floor on Anthropic's market debut, the Peace
// Palace in The Hague after the ICJ's Rohingya genocide ruling, the COP31 climate summit
// hall) with all text rendered in PIL, so no letter is ever AI-garbled. The program
// itself only copies that image to /output/entry.png, deterministically, with no network
// and no randomness.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
if (!existsSync(src)) throw new Error('entry.png is missing next to main.ts');
mkdirSync(outDir, { recursive: true }); // the grader's /output may not exist yet
const out = join(outDir, 'entry.png');
copyFileSync(src, out);
if (statSync(out).size === 0) throw new Error('entry.png was copied but is empty');
