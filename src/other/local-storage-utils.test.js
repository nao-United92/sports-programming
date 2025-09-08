// This file is for browser environment.
// You should run this file in browser.
const assert = require('assert');
const {
  setLocalStorageItem,
  getLocalStorageItem,
  removeLocalStorageItem,
} = require('./local-storage-utils.js');

try {
  const testKey = 'my-test-key';
  const testObject = { a: 1, b: 'hello' };
  const testString = 'a simple string';
  const testNumber = 123;

  // Clear item before test
  removeLocalStorageItem(testKey);

  // Test with an object
  setLocalStorageItem(testKey, testObject);
  assert.deepStrictEqual(getLocalStorageItem(testKey), testObject, 'Should store and retrieve an object');

  // Test with a string
  setLocalStorageItem(testKey, testString);
  assert.strictEqual(getLocalStorageItem(testKey), testString, 'Should store and retrieve a string');

  // Test with a number
  setLocalStorageItem(testKey, testNumber);
  assert.strictEqual(getLocalStorageItem(testKey), testNumber, 'Should store and retrieve a number');

  // Test removeItem
  removeLocalStorageItem(testKey);
  assert.strictEqual(getLocalStorageItem(testKey), null, 'Should be null after removal');

  console.log('All local-storage-utils tests passed!');
} catch (e) {
  console.error('local-storage-utils tests failed:', e.message);
}
