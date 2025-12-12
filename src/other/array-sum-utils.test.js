const { sum } = require('./array-sum-utils');

describe('sum', () => {
  test('should return the sum of all numbers in an array', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });

  test('should return 0 for an empty array', () => {
    expect(sum([])).toBe(0);
  });

  test('should handle arrays with negative numbers', () => {
    expect(sum([1, -2, 3, -4, 5])).toBe(3);
  });

  test('should handle arrays with a single number', () => {
    expect(sum([100])).toBe(100);
  });

  test('should return 0 if the input is not an array', () => {
    expect(sum(null)).toBe(0);
    expect(sum(undefined)).toBe(0);
    expect(sum(123)).toBe(0);
    expect(sum('string')).toBe(0);
    expect(sum({})).toBe(0);
  });
});
