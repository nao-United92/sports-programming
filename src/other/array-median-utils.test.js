import { median } from './array-median-utils';

describe('median', () => {
  test('should return the median for an array with an odd number of elements', () => {
    expect(median([1, 3, 2, 5, 4])).toBe(3);
  });

  test('should return the median for an array with an even number of elements', () => {
    expect(median([1, 4, 2, 5, 6, 3])).toBe(3.5);
  });

  test('should handle an unsorted array', () => {
    expect(median([5, 2, 1, 4, 3])).toBe(3);
  });

  test('should handle an array with negative numbers', () => {
    expect(median([-1, -5, 2, 0, -3])).toBe(-1);
  });

  test('should return the element itself for a single-element array', () => {
    expect(median([10])).toBe(10);
  });

  test('should return null for an empty array', () => {
    expect(median([])).toBeNull();
  });

  test('should return null for a null or undefined input', () => {
    expect(median(null)).toBeNull();
    expect(median(undefined)).toBeNull();
  });
});
