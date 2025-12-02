const { isSorted } = require('./array-is-sorted-utils');

describe('isSorted', () => {
  test('should return true for an ascending sorted array', () => {
    expect(isSorted([1, 2, 3, 4, 5])).toBe(true);
  });

  test('should return false for an unsorted array (default asc)', () => {
    expect(isSorted([1, 3, 2, 4, 5])).toBe(false);
  });

  test('should return true for a descending sorted array with desc direction', () => {
    expect(isSorted([5, 4, 3, 2, 1], 'desc')).toBe(true);
  });

  test('should return false for an ascending sorted array with desc direction', () => {
    expect(isSorted([1, 2, 3, 4, 5], 'desc')).toBe(false);
  });

  test('should return true for an array with duplicate values', () => {
    expect(isSorted([1, 2, 2, 3, 4])).toBe(true);
    expect(isSorted([4, 3, 3, 2, 1], 'desc')).toBe(true);
  });

  test('should return true for an empty array or single-element array', () => {
    expect(isSorted([])).toBe(true);
    expect(isSorted([1])).toBe(true);
  });

  test('should handle string arrays', () => {
    expect(isSorted(['a', 'b', 'c'])).toBe(true);
    expect(isSorted(['c', 'b', 'a'], 'desc')).toBe(true);
    expect(isSorted(['a', 'c', 'b'])).toBe(false);
  });

  test('should return false for invalid input', () => {
    expect(isSorted(null)).toBe(false);
    expect(isSorted({})).toBe(false);
  });
});
