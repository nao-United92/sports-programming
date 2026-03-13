const movingAverage = require('./array-moving-average');

describe('movingAverage', () => {
  test('calculates moving average correctly', () => {
    expect(movingAverage([1, 2, 3, 4, 5], 3)).toEqual([2, 3, 4]);
  });

  test('returns empty for window size larger than array', () => {
    expect(movingAverage([1, 2], 3)).toEqual([]);
  });

  test('returns single value when window size equals array length', () => {
    expect(movingAverage([10, 20, 30], 3)).toEqual([20]);
  });

  test('handles window size of 1', () => {
    expect(movingAverage([1, 2, 3], 1)).toEqual([1, 2, 3]);
  });
});
