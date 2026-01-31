const arrayAverage = require('./array-average-number');

describe('arrayAverage', () => {
  test('should return the average of an array of numbers', () => {
    expect(arrayAverage([1, 2, 3, 4, 5])).toBe(3);
  });

  test('should return 0 for an empty array', () => {
    expect(arrayAverage([])).toBe(0);
  });

  test('should handle negative numbers', () => {
    expect(arrayAverage([-1, -2, -3, -4, -5])).toBe(-3);
  });

  test('should handle mixed positive and negative numbers', () => {
    expect(arrayAverage([-1, 1, -2, 2])).toBe(0);
  });

  test('should handle non-array inputs gracefully', () => {
    expect(arrayAverage('not an array')).toBe(0);
    expect(arrayAverage(null)).toBe(0);
    expect(arrayAverage(undefined)).toBe(0);
  });
});
