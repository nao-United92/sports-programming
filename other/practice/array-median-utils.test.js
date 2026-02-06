const median = require('./array-median-utils');

describe('median', () => {
  test('should calculate the median of an odd-length array', () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
    expect(median([5, 1, 4, 2, 3])).toBe(3); // Unsorted input
  });

  test('should calculate the median of an even-length array', () => {
    expect(median([1, 2, 3, 4])).toBe(2.5);
    expect(median([4, 1, 3, 2])).toBe(2.5); // Unsorted input
  });

  test('should handle arrays with negative numbers', () => {
    expect(median([-5, -1, -3, -2, -4])).toBe(-3);
    expect(median([-4, -1, -3, -2])).toBe(-2.5);
  });

  test('should handle arrays with floating point numbers', () => {
    expect(median([1.1, 2.2, 3.3])).toBe(2.2);
    expect(median([1.0, 2.0, 3.0, 4.0])).toBe(2.5);
  });

  test('should handle a single-element array', () => {
    expect(median([7])).toBe(7);
  });

  test('should throw an error for an empty array', () => {
    expect(() => median([])).toThrow('Median cannot be calculated for an empty array');
  });

  test('should throw an error for non-array input', () => {
    expect(() => median(null)).toThrow('Expected an array');
    expect(() => median(123)).toThrow('Expected an array');
    expect(() => median('string')).toThrow('Expected an array');
    expect(() => median({})).toThrow('Expected an array');
  });

  test('should throw an error if array contains non-numeric values', () => {
    expect(() => median([1, 2, 'a', 4])).toThrow('All elements in the array must be numbers');
    expect(() => median([1, null, 3])).toThrow('All elements in the array must be numbers');
    expect(() => median([1, undefined, 3])).toThrow('All elements in the array must be numbers');
    expect(() => median([1, {}, 3])).toThrow('All elements in the array must be numbers');
  });
});
