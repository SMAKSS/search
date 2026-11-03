import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { test } from 'node:test';

const packageName = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8')
).name;
const require = createRequire(import.meta.url);

test('preserves the CommonJS default export shape', () => {
  const api = require(packageName);
  assert.equal(typeof api.default, 'function');
});

test('exposes a default ESM export', async () => {
  const api = await import(packageName);
  assert.equal(typeof api.default, 'function');
});
