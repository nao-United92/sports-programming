
const swapElements = require('./array-swap-elements');

test('swaps elements at indices', () => {
  expect(swapElements([1, 2, 3], 0, 2)).toEqual([3, 2, 1]);
});
