const assert = require('assert');
const {
  differenceBy,
  intersectionBy,
  unionBy,
  symmetricDifferenceBy,
} = require('./array-set-operations-by-utils.js');

try {
  assert.deepStrictEqual(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor), [1.2]);
  assert.deepStrictEqual(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor), [2.1]);
  assert.deepStrictEqual(unionBy([2.1, 1.2], [2.3, 3.4], Math.floor), [2.1, 1.2, 3.4]);
  assert.deepStrictEqual(symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor), [1.2, 3.4]);
  console.log('All array-set-operations-by tests passed!');
} catch (e) {
  console.error('array-set-operations-by tests failed:', e.message);
  process.exit(1);
}