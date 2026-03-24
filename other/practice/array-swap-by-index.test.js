const swapByIndex = require('./array-swap-by-index');

describe('swapByIndex', () => {
  test('swaps elements', () => {
    expect(swapByIndex([1, 2, 3], 0, 2)).toEqual([3, 2, 1]);
  });
});
