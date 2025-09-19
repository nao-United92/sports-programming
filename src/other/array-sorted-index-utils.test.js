import { sortedIndex } from './array-sorted-index-utils.js';

describe('sortedIndex', () => {
  test('should return the correct index for a value in the middle', () => {
    expect(sortedIndex([10, 20, 30, 40, 50], 35)).toBe(3);
  });

  test('should return 0 for a value smaller than all elements', () => {
    expect(sortedIndex([10, 20, 30], 5)).toBe(0);
  });

  test('should return the array length for a value larger than all elements', () => {
    expect(sortedIndex([10, 20, 30], 35)).toBe(3);
  });

  test('should return the index of an existing value', () => {
    // It should return the first possible insertion point
    expect(sortedIndex([10, 20, 30, 40], 30)).toBe(2);
  });

  test('should handle duplicate values correctly', () => {
    expect(sortedIndex([10, 20, 30, 30, 40], 30)).toBe(2);
  });

  test('should return 0 for an empty array', () => {
    expect(sortedIndex([], 5)).toBe(0);
  });

  test('should work with string arrays', () => {
    expect(sortedIndex(['a', 'c', 'e'], 'b')).toBe(1);
  });
});
