const assert = require('assert');
const { pick, omit, isEmpty } = require('./object-utils.js');

try {
  const obj = { a: 1, b: '2', c: 3 };

  // pick tests
  assert.deepStrictEqual(pick(obj, 'a', 'c'), { a: 1, c: 3 }, 'pick should select properties');
  assert.deepStrictEqual(pick(obj, 'a', 'd'), { a: 1 }, 'pick should ignore non-existent properties');
  assert.deepStrictEqual(pick(obj), {}, 'pick should return an empty object if no keys are provided');
  assert.deepStrictEqual(pick(null, 'a'), {}, 'pick should handle null input');

  // omit tests
  assert.deepStrictEqual(omit(obj, 'a', 'c'), { b: '2' }, 'omit should remove properties');
  assert.deepStrictEqual(omit(obj, 'd'), { a: 1, b: '2', c: 3 }, 'omit should not change object if key does not exist');
  assert.deepStrictEqual(omit(obj), { a: 1, b: '2', c: 3 }, 'omit should return a copy if no keys are provided');
  assert.deepStrictEqual(omit(null, 'a'), {}, 'omit should handle null input');

  // isEmpty tests
  assert.strictEqual(isEmpty({}), true, 'isEmpty should return true for an empty object');
  assert.strictEqual(isEmpty({ a: 1 }), false, 'isEmpty should return false for a non-empty object');
  assert.strictEqual(isEmpty(null), true, 'isEmpty should return true for null');
  assert.strictEqual(isEmpty(undefined), true, 'isEmpty should return true for undefined');
  assert.strictEqual(isEmpty([]), false, 'isEmpty should return false for an empty array');
  assert.strictEqual(isEmpty(''), false, 'isEmpty should return false for an empty string');
  assert.strictEqual(isEmpty(new Date()), false, 'isEmpty should return false for a Date object');


  console.log('All object-utils tests passed!');
} catch (error) {
  console.error('object-utils tests failed:', error.message);
  process.exit(1);
}