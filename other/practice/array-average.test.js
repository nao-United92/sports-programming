// other/practice/array-average.test.js
const arrayAverage = require('./array-average');

describe('arrayAverage', () => {
  test('should return the correct average for positive numbers', () => {
    expect(arrayAverage([1, 2, 3, 4, 5])).toBe(3);
  });

  test('should return the correct average for negative numbers', () => {
    expect(arrayAverage([-1, -2, -3])).toBe(-2);
  });

  test('should return the correct average for mixed positive and negative numbers', () => {
    expect(arrayAverage([-1, 2, -3, 4])).toBe(0.5);
  });

  test('should return 0 for an empty array', () => {
    expect(arrayAverage([])).toBe(0);
  });

  test('should return the number itself for an array with a single number', () => {
    expect(arrayAverage([10])).toBe(10);
  });

  test('should return 0 for an array containing non-numeric values', () => {
    expect(arrayAverage([1, 2, 'a', 4])).toBe(0);
    expect(arrayAverage([1, 2, null, 4])).toBe(0);
    expect(arrayAverage([1, 2, undefined, 4])).toBe(0);
    expect(arrayAverage([1, 2, {}, 4])).toBe(0);
  });

  test('should handle arrays with zero', () => {
    expect(arrayAverage([0, 0, 0])).toBe(0);
    expect(arrayAverage([-5, 0, 5])).toBe(0);
  });

  test('should return 0 for non-array inputs', () => {
    expect(arrayAverage(null)).toBe(0);
    expect(arrayAverage(undefined)).toBe(0);
    expect(arrayAverage(123)).toBe(0);
    expect(arrayAverage('string')).toBe(0);
    expect(arrayAverage({})).toBe(0);
  });
});
