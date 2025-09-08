const assert = require('assert');
const { paramsToObject, objectToParams } = require('./url-utils.js');

try {
  // paramsToObject tests
  const url1 = 'https://example.com?a=1&b=2';
  assert.deepStrictEqual(paramsToObject(url1), { a: '1', b: '2' }, 'paramsToObject should handle simple cases');

  const url2 = 'https://example.com?a=1&a=2&b=hello';
  assert.deepStrictEqual(paramsToObject(url2), { a: ['1', '2'], b: 'hello' }, 'paramsToObject should handle array values');

  const url3 = 'https://example.com';
  assert.deepStrictEqual(paramsToObject(url3), {}, 'paramsToObject should handle no params');

  // objectToParams tests
  const obj1 = { a: 1, b: 'hello' };
  assert.strictEqual(objectToParams(obj1), 'a=1&b=hello', 'objectToParams should handle simple objects');

  const obj2 = { a: [1, 2], b: 'world' };
  assert.strictEqual(objectToParams(obj2), 'a=1&a=2&b=world', 'objectToParams should handle array values');

  const obj3 = { a: null, b: undefined, c: 'test' };
  assert.strictEqual(objectToParams(obj3), 'c=test', 'objectToParams should ignore null and undefined');

  const obj4 = {};
  assert.strictEqual(objectToParams(obj4), '', 'objectToParams should handle empty object');

  console.log('All url-utils tests passed!');
} catch (error) {
  console.error('url-utils tests failed:', error.message);
  process.exit(1);
}