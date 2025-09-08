const assert = require('assert');
const { tap } = require('./debug-utils.js');

const originalConsoleLog = console.log;
let capturedLog = [];
const mockConsoleLog = (...args) => {
  capturedLog.push(args);
};

try {
  console.log = mockConsoleLog;

  // Test tap without a tag
  capturedLog = [];
  const result1 = tap(123);
  assert.strictEqual(result1, 123, 'Test 1 Failed: Should return the original value');
  assert.deepStrictEqual(capturedLog[0], ['', 123], 'Test 1 Failed: Should log the value correctly');

  // Test tap with a tag
  capturedLog = [];
  const testObject = { a: 1 };
  const result2 = tap(testObject, 'my-tag');
  assert.deepStrictEqual(result2, testObject, 'Test 2 Failed: Should return the original object');
  assert.deepStrictEqual(capturedLog[0], ['my-tag:', testObject], 'Test 2 Failed: Should log the object with a tag');

  console.log = originalConsoleLog; // Restore before final log
  console.log('All debug-utils tests passed!');

} catch (error) {
  console.log = originalConsoleLog; // Restore on error
  console.error('debug-utils tests failed:', error.message);
  process.exit(1);
}
