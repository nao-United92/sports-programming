// This file is for browser environment.
// You should run this file in browser.
const assert = require('assert');
const { hasClass, addClass, removeClass, toggleClass } = require('./css-utils.js');

try {
  const el = document.createElement('div');
  
  // Test addClass and hasClass
  addClass(el, 'test-class');
  assert.ok(hasClass(el, 'test-class'), 'addClass/hasClass failed');

  // Test removeClass
  removeClass(el, 'test-class');
  assert.ok(!hasClass(el, 'test-class'), 'removeClass failed');

  // Test toggleClass
  toggleClass(el, 'toggle-class');
  assert.ok(hasClass(el, 'toggle-class'), 'toggleClass (add) failed');
  toggleClass(el, 'toggle-class');
  assert.ok(!hasClass(el, 'toggle-class'), 'toggleClass (remove) failed');

  console.log('All css-utils tests passed!');
} catch (e) {
  console.error('css-utils tests failed:', e.message);
}
