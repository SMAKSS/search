import { copyFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDirectory = fileURLToPath(new URL('./dist/', import.meta.url));

await copyFile(
  join(distDirectory, 'index.d.ts'),
  join(distDirectory, 'index.d.mts')
);
await writeFile(
  join(distDirectory, 'index.d.cts'),
  [
    'import type defaultApi from "./index.d.mts";',
    'declare const api: { default: typeof defaultApi };',
    'export = api;',
    ''
  ].join('\n')
);
