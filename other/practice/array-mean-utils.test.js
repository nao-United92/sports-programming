const mean = require('./array-mean-utils');

describe('mean', () => {
  test('should calculate the mean of an array of positive numbers', () => {
    expect(mean([1, 2, 3, 4, 5])).toBe(3);
  });

  test('should calculate the mean of an array of negative numbers', () => {
    expect(mean([-1, -2, -3, -4, -5])).toBe(-3);
  });

  test('should calculate the mean of an array with mixed positive and negative numbers', () => {
    expect(mean([-1, 0, 1])).toBe(0);
    expect(mean([10, -5, 5, 0])).toBe(2.5);
  });

  test('should handle an array with a single number', () => {
    expect(mean([7])).toBe(7);
  });

  test('should return 0 for an empty array', () => {
    expect(mean([])).toBe(0);
  });

  test('should handle floating point numbers', () => {
    expect(mean([1.5, 2.5, 3.5])).toBe(2.5);
    expect(mean([0.1, 0.2, 0.3])).toBeCloseTo(0.2); // Use toBeCloseTo for floating point comparisons
  });

  test('should throw an error for non-array input', () => {
    expect(() => mean(null)).toThrow('Expected an array');
    expect(() => mean(123)).toThrow('Expected an array');
    expect(() => mean('string')).toThrow('Expected an array');
    expect(() => mean({})).toThrow('Expected an array');
  });

  test('should throw an error if array contains non-numeric values', () => {
    expect(() => mean([1, 2, 'a', 4])).toThrow('All elements in the array must be numbers');
    expect(() => mean([1, null, 3])).toThrow('All elements in the array must be numbers');
    expect(() => mean([1, undefined, 3])).toThrow('All elements in the array must be numbers');
    expect(() => mean([1, {}, 3])).toThrow('All elements in the array must be numbers');
  });
});
