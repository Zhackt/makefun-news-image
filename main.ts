// Note: entry.png is a PNG file: the picture format comes from the file's contents, not its name.
// A news-image-01 entry (Node 22, standard library only). The entry is a
// single picture, entry.png, sitting next to this file; this program copies
// it into the folder the grader reads from.
//
// Run it locally like this:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// and the copy lands at out/entry.png.

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
