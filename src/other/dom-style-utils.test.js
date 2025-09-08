// This file is for browser environment.
// You should run this file in browser.
const assert = require('assert');
const { getStyle, setStyle, hide, show } = require('./dom-style-utils.js');

try {
  const el = document.createElement('div');
  document.body.appendChild(el); // Append to body for computed styles

  // Test setStyle and getStyle
  setStyle(el, 'width', '100px');
  assert.strictEqual(getStyle(el, 'width'), '100px', 'setStyle/getStyle single property failed');

  setStyle(el, { 'height': '50px', 'backgroundColor': 'red' });
  assert.strictEqual(getStyle(el, 'height'), '50px', 'setStyle object height failed');
  assert.strictEqual(getStyle(el, 'backgroundColor'), 'rgb(255, 0, 0)', 'setStyle object backgroundColor failed');

  // Test hide and show
  hide(el);
  assert.strictEqual(getStyle(el, 'display'), 'none', 'hide failed');

  show(el);
  assert.strictEqual(getStyle(el, 'display'), 'block', 'show default failed');

  show(el, 'inline-block');
  assert.strictEqual(getStyle(el, 'display'), 'inline-block', 'show with custom display failed');

  // Test edge cases (null/undefined element)
  assert.strictEqual(getStyle(null, 'width'), '', 'getStyle null element');
  setStyle(undefined, 'width', '10px'); // Should not throw error
  hide(null); // Should not throw error
  show(undefined); // Should not throw error

  document.body.removeChild(el); // Clean up

  console.log('All dom-style-utils tests passed!');
} catch (e) {
  console.error('dom-style-utils tests failed:', e.message);
}