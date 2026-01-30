// other/practice/array-max.test.js
const arrayMax = require('./array-max');

describe('arrayMax', () => {
  test('should return the maximum value from an array of positive numbers', () => {
    expect(arrayMax([1, 5, 2, 8, 3])).toBe(8);
  });

  test('should return the maximum value from an array of negative numbers', () => {
    expect(arrayMax([-1, -5, -2, -8, -3])).toBe(-1);
  });

  test('should return the maximum value from an array with mixed positive and negative numbers', () => {
    expect(arrayMax([-1, 5, -2, 8, -3])).toBe(8);
  });

  test('should return the number itself for an array with a single number', () => {
    expect(arrayMax([7])).toBe(7);
  });

  test('should return undefined for an empty array', () => {
    expect(arrayMax([])).toBeUndefined();
  });

  test('should return undefined for an array containing non-numeric values', () => {
    expect(arrayMax([1, 2, 'a', 4])).toBeUndefined();
    expect(arrayMax([1, 2, null, 4])).toBeUndefined();
    expect(arrayMax([1, 2, undefined, 4])).toBeUndefined();
    expect(arrayMax([1, 2, {}, 4])).toBeUndefined();
  });

  test('should handle arrays with zero', () => {
    expect(arrayMax([-1, 0, 1])).toBe(1);
    expect(arrayMax([0])).toBe(0);
  });

  test('should return undefined for non-array inputs', () => {
    expect(arrayMax(null)).toBeUndefined();
    expect(arrayMax(undefined)).toBeUndefined();
    expect(arrayMax(123)).toBeUndefined();
    expect(arrayMax('string')).toBeUndefined();
    expect(arrayMax({})).toBeUndefined();
  });
});
