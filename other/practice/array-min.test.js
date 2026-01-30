// other/practice/array-min.test.js
const arrayMin = require('./array-min');

describe('arrayMin', () => {
  test('should return the minimum value from an array of positive numbers', () => {
    expect(arrayMin([1, 5, 2, 8, 3])).toBe(1);
  });

  test('should return the minimum value from an array of negative numbers', () => {
    expect(arrayMin([-1, -5, -2, -8, -3])).toBe(-8);
  });

  test('should return the minimum value from an array with mixed positive and negative numbers', () => {
    expect(arrayMin([-1, 5, -2, 8, -3])).toBe(-3);
  });

  test('should return the number itself for an array with a single number', () => {
    expect(arrayMin([7])).toBe(7);
  });

  test('should return undefined for an empty array', () => {
    expect(arrayMin([])).toBeUndefined();
  });

  test('should return undefined for an array containing non-numeric values', () => {
    expect(arrayMin([1, 2, 'a', 4])).toBeUndefined();
    expect(arrayMin([1, 2, null, 4])).toBeUndefined();
    expect(arrayMin([1, 2, undefined, 4])).toBeUndefined();
    expect(arrayMin([1, 2, {}, 4])).toBeUndefined();
  });

  test('should handle arrays with zero', () => {
    expect(arrayMin([-1, 0, 1])).toBe(-1);
    expect(arrayMin([0])).toBe(0);
  });

  test('should return undefined for non-array inputs', () => {
    expect(arrayMin(null)).toBeUndefined();
    expect(arrayMin(undefined)).toBeUndefined();
    expect(arrayMin(123)).toBeUndefined();
    expect(arrayMin('string')).toBeUndefined();
    expect(arrayMin({})).toBeUndefined();
  });
});
