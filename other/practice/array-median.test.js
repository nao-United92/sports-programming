// other/practice/array-median.test.js
const arrayMedian = require('./array-median');

describe('arrayMedian', () => {
  test('should return the correct median for an odd-length array of numbers', () => {
    expect(arrayMedian([1, 2, 3, 4, 5])).toBe(3);
    expect(arrayMedian([5, 1, 4, 2, 3])).toBe(3); // Unsorted
    expect(arrayMedian([1, 1, 100])).toBe(1);
  });

  test('should return the correct median for an even-length array of numbers', () => {
    expect(arrayMedian([1, 2, 3, 4])).toBe(2.5);
    expect(arrayMedian([4, 1, 3, 2])).toBe(2.5); // Unsorted
    expect(arrayMedian([10, 20])).toBe(15);
  });

  test('should return undefined for an empty array', () => {
    expect(arrayMedian([])).toBeUndefined();
  });

  test('should return the number itself for an array with a single number', () => {
    expect(arrayMedian([7])).toBe(7);
  });

  test('should return undefined for an array containing non-numeric values', () => {
    expect(arrayMedian([1, 2, 'a', 4])).toBeUndefined();
    expect(arrayMedian([1, 2, null, 4])).toBeUndefined();
    expect(arrayMedian([1, 2, undefined, 4])).toBeUndefined();
    expect(arrayMedian([1, 2, {}, 4])).toBeUndefined();
  });

  test('should handle arrays with zero and negative numbers', () => {
    expect(arrayMedian([-5, 0, 5])).toBe(0);
    expect(arrayMedian([-10, -2, 0, 5, 10])).toBe(0);
    expect(arrayMedian([-10, -2, 0, 5])).toBe(-1); // (-2 + 0) / 2
  });

  test('should return undefined for non-array inputs', () => {
    expect(arrayMedian(null)).toBeUndefined();
    expect(arrayMedian(undefined)).toBeUndefined();
    expect(arrayMedian(123)).toBeUndefined();
    expect(arrayMedian('string')).toBeUndefined();
    expect(arrayMedian({})).toBeUndefined();
  });
});
