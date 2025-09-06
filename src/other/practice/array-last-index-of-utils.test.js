import { lastIndexOf } from './array-last-index-of-utils.js';

describe('lastIndexOf', () => {
  test('should return the last index of a value', () => {
    expect(lastIndexOf([1, 2, 1, 2], 2)).toBe(3);
  });

  test('should return -1 if value is not found', () => {
    expect(lastIndexOf([1, 2, 3], 4)).toBe(-1);
  });

  test('should start search from specified index', () => {
    expect(lastIndexOf([1, 2, 1, 2], 2, 2)).toBe(1);
  });

  test('should handle negative fromIndex', () => {
    expect(lastIndexOf([1, 2, 1, 2], 2, -2)).toBe(1);
  });

  test('should handle empty array', () => {
    expect(lastIndexOf([], 1)).toBe(-1);
  });

  test('should handle non-array input', () => {
    expect(lastIndexOf(null, 1)).toBe(-1);
    expect(lastIndexOf(undefined, 1)).toBe(-1);
  });
});
