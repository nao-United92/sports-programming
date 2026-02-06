const max = require('./array-max-utils');

describe('max', () => {
  test('should find the maximum value in an array of positive numbers', () => {
    expect(max([1, 5, 2, 8, 3])).toBe(8);
  });

  test('should find the maximum value in an array of negative numbers', () => {
    expect(max([-1, -5, -2, -8, -3])).toBe(-1);
  });

  test('should find the maximum value in an array with mixed positive and negative numbers', () => {
    expect(max([-10, 0, 5, -2, 100])).toBe(100);
  });

  test('should handle an array with a single number', () => {
    expect(max([7])).toBe(7);
  });

  test('should return undefined for an empty array', () => {
    expect(max([])).toBe(undefined);
  });

  test('should handle floating point numbers', () => {
    expect(max([1.1, 2.5, 0.9, 3.2])).toBe(3.2);
  });

  test('should throw an error for non-array input', () => {
    expect(() => max(null)).toThrow('Expected an array');
    expect(() => max(123)).toThrow('Expected an array');
    expect(() => max('string')).toThrow('Expected an array');
    expect(() => max({})).toThrow('Expected an array');
  });

  test('should throw an error if array contains non-numeric values', () => {
    expect(() => max([1, 2, 'a', 4])).toThrow('All elements in the array must be numbers');
    expect(() => max([1, null, 3])).toThrow('All elements in the array must be numbers');
    expect(() => max([1, undefined, 3])).toThrow('All elements in the array must be numbers');
    expect(() => max([1, {}, 3])).toThrow('All elements in the array must be numbers');
  });
});
