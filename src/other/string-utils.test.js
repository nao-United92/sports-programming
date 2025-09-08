const assert = require('assert');
const { truncate, slugify } = require('./string-utils.js');

try {
  // truncate tests
  assert.strictEqual(truncate('hello world', 8), 'hello...', 'truncate shortens string');
  assert.strictEqual(truncate('hello', 10), 'hello', 'truncate does not shorten if not needed');
  assert.strictEqual(truncate('hello', 2), '...', 'truncate handles small num');
  assert.strictEqual(truncate('hi', 2), 'hi', 'truncate does not shorten if length is equal');


  // slugify tests
  assert.strictEqual(slugify('Hello World!'), 'hello-world', 'slugify basic conversion');
  assert.strictEqual(slugify('  leading and trailing spaces  '), 'leading-and-trailing-spaces', 'slugify handles spaces');
  assert.strictEqual(slugify('__multiple--separators__'), 'multiple-separators', 'slugify handles multiple separators');
  assert.strictEqual(slugify('special!@#$%^&*()_+=chars'), 'special-chars', 'slugify removes special characters');
  assert.strictEqual(slugify('-leading-and-trailing-hyphens-'), 'leading-and-trailing-hyphens', 'slugify removes leading/trailing hyphens');


  console.log('All string-utils tests passed!');
} catch (error) {
  console.error('string-utils tests failed:', error.message);
  process.exit(1);
}