// This file is for browser environment.
// You should run this file in browser.
const assert = require('assert');
const { getAttr, setAttr, removeAttr, hasAttr } = require('./dom-attributes-utils.js');

try {
  const el = document.createElement('div');

  // Test setAttr and getAttr
  setAttr(el, 'data-test', 'value1');
  assert.strictEqual(getAttr(el, 'data-test'), 'value1', 'setAttr/getAttr single attribute failed');

  setAttr(el, { 'id': 'my-id', 'aria-label': 'label' });
  assert.strictEqual(getAttr(el, 'id'), 'my-id', 'setAttr object id failed');
  assert.strictEqual(getAttr(el, 'aria-label'), 'label', 'setAttr object aria-label failed');

  // Test hasAttr
  assert.ok(hasAttr(el, 'data-test'), 'hasAttr existing attribute failed');
  assert.ok(!hasAttr(el, 'non-existent'), 'hasAttr non-existent attribute failed');

  // Test removeAttr
  removeAttr(el, 'data-test');
  assert.strictEqual(getAttr(el, 'data-test'), null, 'removeAttr failed');
  assert.ok(!hasAttr(el, 'data-test'), 'hasAttr after removeAttr failed');

  // Test edge cases (null/undefined element)
  assert.strictEqual(getAttr(null, 'id'), null, 'getAttr null element');
  setAttr(undefined, 'id', 'test'); // Should not throw error
  removeAttr(null, 'id'); // Should not throw error
  assert.strictEqual(hasAttr(undefined, 'id'), false, 'hasAttr undefined element');

  console.log('All dom-attributes-utils tests passed!');
} catch (e) {
  console.error('dom-attributes-utils tests failed:', e.message);
}
