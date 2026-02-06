const sum = require('./array-sum-utils');

describe('sum', () => {
  test('should calculate the sum of positive numbers', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });

  test('should calculate the sum of negative numbers', () => {
    expect(sum([-1, -2, -3])).toBe(-6);
  });

  test('should calculate the sum of mixed positive and negative numbers', () => {
    expect(sum([-1, 0, 1, 5])).toBe(5);
  });

  test('should return 0 for an empty array', () => {
    expect(sum([])).toBe(0);
  });

  test('should handle a single-element array', () => {
    expect(sum([100])).toBe(100);
  });

  test('should handle floating point numbers', () => {
    expect(sum([1.1, 2.2, 3.3])).toBeCloseTo(6.6);
  });

  test('should throw an error for non-array input', () => {
    expect(() => sum(null)).toThrow('Expected an array');
    expect(() => sum(123)).toThrow('Expected an array');
    expect(() => sum('string')).toThrow('Expected an array');
    expect(() => sum({})).toThrow('Expected an array');
  });

  test('should throw an error if array contains non-numeric values', () => {
    expect(() => sum([1, 2, 'a', 4])).toThrow('All elements in the array must be numbers');
    expect(() => sum([1, null, 3])).toThrow('All elements in the array must be numbers');
    expect(() => sum([1, undefined, 3])).toThrow('All elements in the array must be numbers');
    expect(() => sum([1, {}, 3])).toThrow('All elements in the array must be numbers');
  });
});
