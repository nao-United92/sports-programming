// This file is for browser environment.
// You should run this file in browser.
const assert = require('assert');
const { getCookie, setCookie, deleteCookie, getCookies } = require('./cookie-utils.js');

try {
  // Clear existing cookies for a clean test environment
  Object.keys(getCookies()).forEach(name => {
      if(name) deleteCookie(name);
  });

  // Test setCookie and getCookie
  setCookie('test1', 'value1', { path: '/' });
  assert.strictEqual(getCookie('test1'), 'value1', 'setCookie/getCookie failed');

  // Test setCookie with options
  setCookie('test2', 'value2', { days: 1, path: '/' });
  assert.strictEqual(getCookie('test2'), 'value2', 'setCookie with options failed');

  // Test getCookies
  const cookies = getCookies();
  // Note: Depending on the test environment, there might be other cookies.
  // We only check for the ones we set.
  assert.strictEqual(cookies.test1, 'value1', 'getCookies failed for test1');
  assert.strictEqual(cookies.test2, 'value2', 'getCookies failed for test2');

  // Test deleteCookie
  deleteCookie('test1');
  assert.strictEqual(getCookie('test1'), undefined, 'deleteCookie failed');
  assert.strictEqual(getCookie('test2'), 'value2', 'deleteCookie should not affect other cookies');

  // Clean up
  deleteCookie('test2');

  console.log('All cookie-utils tests passed!');
} catch (e) {
  console.error('cookie-utils tests failed:', e.message);
}
