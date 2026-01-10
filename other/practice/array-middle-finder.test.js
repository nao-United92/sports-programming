const { median } = require('./array-middle-finder.js');

describe('median', () => {
  test('should return the median of an odd-length array', () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
    expect(median([5, 1, 4, 2, 3])).toBe(3);
  });

  test('should return the median of an even-length array', () => {
    expect(median([1, 2, 3, 4])).toBe(2.5);
    expect(median([4, 1, 3, 2])).toBe(2.5);
  });

  test('should return the correct median for arrays with duplicate values', () => {
    expect(median([1, 2, 2, 3, 4])).toBe(2);
    expect(median([1, 2, 2, 3])).toBe(2);
  });

  test('should return the only element for a single-element array', () => {
    expect(median([42])).toBe(42);
  });

  test('should return undefined for an empty array', () => {
    expect(median([])).toBeUndefined();
  });

  test('should handle arrays with negative numbers', () => {
    expect(median([-1, -2, -3])).toBe(-2);
    expect(median([-1, 0, 1])).toBe(0);
    expect(median([-5, -2, 1, 4])).toBe(-0.5);
  });

  test('should handle arrays with floating-point numbers', () => {
    expect(median([1.1, 2.2, 3.3])).toBe(2.2);
    expect(median([1.0, 2.0, 3.0, 4.0])).toBe(2.5);
  });

  test('should throw an error if the argument is not an array', () => {
    expect(() => median(null)).toThrow('Expected an array for the first argument.');
    expect(() => median(undefined)).toThrow('Expected an array for the first argument.');
    expect(() => median(123)).toThrow('Expected an array for the first argument.');
    expect(() => median('string')).toThrow('Expected an array for the first argument.');
    expect(() => median({})).toThrow('Expected an array for the first argument.');
  });

  test('should throw an error if the array contains non-numeric values', () => {
    expect(() => median([1, 2, 'a'])).toThrow('All elements in the array must be numbers.');
    expect(() => median([1, null, 3])).toThrow('All elements in the array must be numbers.');
    expect(() => median([1, undefined, 3])).toThrow('All elements in the array must be numbers.');
  });
});
