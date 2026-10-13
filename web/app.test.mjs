import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { analyze } from './bridge.js';

test('page renders real MoonBit reports and keeps valid results on bad input', async () => {
  const nodes = new Map();
  const saved = new Map();
  const document = { getElementById(id) {
    if (!nodes.has(id)) nodes.set(id, { value: id === 'budget' ? '15' : '', textContent: '', innerHTML: '', handlers: {}, addEventListener(name, fn) { this.handlers[name] = fn; } });
    return nodes.get(id);
  }};
  const source = (await readFile(new URL('./app.js', import.meta.url), 'utf8')).replace(/^import[^\n]+\n/, '');
  vm.runInNewContext(source, { document, analyze, localStorage: { getItem: key => saved.get(key) ?? null, setItem: (key, value) => saved.set(key, value) }, Date });
  assert.match(nodes.get('mastery').innerHTML, /syntax/);
  assert.match(nodes.get('session').innerHTML, /Some/);
  assert.match(nodes.get('status').textContent, /已完成/);
  assert.ok(saved.get('moonmentor.attempts'));
  nodes.get('attempts').value = 'invalid';
  nodes.get('analyze').handlers.click();
  assert.match(nodes.get('status').textContent, /输入错误/);
  assert.match(nodes.get('session').innerHTML, /Some/);
});

test('bridge rejects unknown knowledge points with parseable JSON', () => {
  const result = JSON.parse(analyze('a|A|1||a', 'unknown|1|0|1', 'exercise|e|E|a|1|3|a|hint', 15, 'json'));
  assert.match(result.error, /unknown/);
});
