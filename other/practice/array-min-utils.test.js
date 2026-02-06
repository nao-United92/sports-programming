const min = require('./array-min-utils');

describe('min', () => {
  test('should find the minimum value in an array of positive numbers', () => {
    expect(min([1, 5, 2, 8, 3])).toBe(1);
  });

  test('should find the minimum value in an array of negative numbers', () => {
    expect(min([-1, -5, -2, -8, -3])).toBe(-8);
  });

  test('should find the minimum value in an array with mixed positive and negative numbers', () => {
    expect(min([-10, 0, 5, -2, 100])).toBe(-10);
  });

  test('should handle an array with a single number', () => {
    expect(min([7])).toBe(7);
  });

  test('should return undefined for an empty array', () => {
    expect(min([])).toBe(undefined);
  });

  test('should handle floating point numbers', () => {
    expect(min([1.1, 2.5, 0.9, 3.2])).toBe(0.9);
  });

  test('should throw an error for non-array input', () => {
    expect(() => min(null)).toThrow('Expected an array');
    expect(() => min(123)).toThrow('Expected an array');
    expect(() => min('string')).toThrow('Expected an array');
    expect(() => min({})).toThrow('Expected an array');
  });

  test('should throw an error if array contains non-numeric values', () => {
    expect(() => min([1, 2, 'a', 4])).toThrow('All elements in the array must be numbers');
    expect(() => min([1, null, 3])).toThrow('All elements in the array must be numbers');
    expect(() => min([1, undefined, 3])).toThrow('All elements in the array must be numbers');
    expect(() => min([1, {}, 3])).toThrow('All elements in the array must be numbers');
  });
});
