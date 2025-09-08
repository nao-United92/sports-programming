const assert = require('assert');
const { round, floor, ceil, inRange } = require('./number-utils.js');

try {
  // round tests
  assert.strictEqual(round(1.2345, 2), 1.23, 'round basic');
  assert.strictEqual(round(1.2355, 2), 1.24, 'round up');
  assert.strictEqual(round(1.2345), 1, 'round no decimals');
  assert.strictEqual(round(123.45, -1), 120, 'round negative decimals');
  assert.strictEqual(round(125.45, -1), 130, 'round negative decimals up');

  // floor tests
  assert.strictEqual(floor(1.2345, 2), 1.23, 'floor basic');
  assert.strictEqual(floor(1.9999, 0), 1, 'floor no decimals');
  assert.strictEqual(floor(123.45, -1), 120, 'floor negative decimals');
  assert.strictEqual(floor(129.99, -1), 120, 'floor negative decimals down');

  // ceil tests
  assert.strictEqual(ceil(1.2345, 2), 1.24, 'ceil basic');
  assert.strictEqual(ceil(1.0001, 0), 2, 'ceil no decimals');
  assert.strictEqual(ceil(123.45, -1), 130, 'ceil negative decimals');
  assert.strictEqual(ceil(120.01, -1), 130, 'ceil negative decimals up');

  // inRange tests
  assert.strictEqual(inRange(5, 0, 10), true, 'inRange basic');
  assert.strictEqual(inRange(0, 0, 10), true, 'inRange start inclusive');
  assert.strictEqual(inRange(10, 0, 10), false, 'inRange end exclusive by default');
  assert.strictEqual(inRange(10, 0, 10, true), true, 'inRange end inclusive');
  assert.strictEqual(inRange(-5, 0, 10), false, 'inRange below range');
  assert.strictEqual(inRange(15, 0, 10), false, 'inRange above range');
  assert.strictEqual(inRange(5, 10, 0), true, 'inRange reversed start/end');
  assert.strictEqual(inRange(0, 10, 0), false, 'inRange reversed start/end, end exclusive');
  assert.strictEqual(inRange(0, 10, 0, true), true, 'inRange reversed start/end, end inclusive');


  console.log('All number-utils tests passed!');
} catch (error) {
  console.error('number-utils tests failed:', error.message);
  process.exit(1);
}
