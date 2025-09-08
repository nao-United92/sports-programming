const assert = require('assert');
const { randomInteger, randomString } = require('./random-utils.js');

try {
  // Test randomInteger
  const min = 5;
  const max = 10;
  for (let i = 0; i < 100; i++) {
    const num = randomInteger(min, max);
    assert.ok(num >= min && num <= max, 'randomInteger should be within the range');
    assert.strictEqual(Number.isInteger(num), true, 'randomInteger should produce an integer');
  }

  // Test randomString
  const length = 12;
  const str = randomString(length);
  assert.strictEqual(typeof str, 'string', 'randomString should produce a string');
  assert.strictEqual(str.length, length, 'randomString should have the correct length');
  assert.ok(/^[A-Za-z0-9]+$/.test(str), 'randomString should contain only default alphanumeric characters');

  // Test randomString with custom characters
  const customChars = 'abc';
  const customStr = randomString(5, customChars);
  assert.strictEqual(customStr.length, 5, 'randomString with custom chars should have correct length');
  assert.ok(/^[abc]+$/.test(customStr), 'randomString should only use custom characters');


  console.log('All random-utils tests passed!');
} catch (error) {
  console.error('random-utils tests failed:', error.message);
  process.exit(1);
}