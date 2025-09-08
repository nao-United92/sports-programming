const assert = require('assert');
const { curry } = require('./curry-utils.js');

try {
  const sum = (a, b, c) => a + b + c;
  const curriedSum = curry(sum);
  const _ = curriedSum.placeholder; // Access placeholder from the curried function

  // Basic currying
  assert.strictEqual(curriedSum(1)(2)(3), 6, 'should work with basic currying');
  assert.strictEqual(curriedSum(1, 2)(3), 6, 'should work with partial application');
  assert.strictEqual(curriedSum(1, 2, 3), 6, 'should work when all args are provided');

  // Placeholder tests
  assert.strictEqual(curriedSum(_, 2, 3)(1), 6, 'should handle placeholder in the first argument');
  assert.strictEqual(curriedSum(1, _, 3)(2), 6, 'should handle placeholder in the middle argument');
  assert.strictEqual(curriedSum(1, 2, _)(3), 6, 'should handle placeholder in the last argument');
  assert.strictEqual(curriedSum(1, _, _)(2)(3), 6, 'should handle multiple placeholders');
  assert.strictEqual(curriedSum(_, 2, _)(1, 3), 6, 'should handle multiple placeholders with multiple new args');
  assert.strictEqual(curriedSum(_, _, 3)(1)(2), 6, 'should handle multiple placeholders sequentially');
  assert.strictEqual(curriedSum(1)(_, 3)(2), 6, 'should work with chained placeholders');

  console.log('All curry-utils tests passed!');
} catch (e) {
  console.error('curry-utils tests failed:', e.message);
  process.exit(1);
}