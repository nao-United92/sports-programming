import sortedIndex from './sorted-index-utils.js';

describe('sortedIndex', () => {
  test('should return the correct index for a value in a sorted array', () => {
    expect(sortedIndex([10, 20, 30, 40, 50], 30)).toBe(2);
  });

  test('should return the insertion point for a value not in the array', () => {
    expect(sortedIndex([10, 20, 30, 40, 50], 35)).toBe(3);
  });

  test('should return 0 for a value smaller than all elements', () => {
    expect(sortedIndex([10, 20, 30], 5)).toBe(0);
  });

  test('should return the array length for a value larger than all elements', () => {
    expect(sortedIndex([10, 20, 30], 35)).toBe(3);
  });

  test('should handle duplicate values correctly, returning the first possible index', () => {
    expect(sortedIndex([10, 20, 30, 30, 40], 30)).toBe(2);
  });

  test('should return 0 for an empty array', () => {
    expect(sortedIndex([], 5)).toBe(0);
  });

  test('should handle string arrays', () => {
    expect(sortedIndex(['a', 'c', 'e'], 'b')).toBe(1);
    expect(sortedIndex(['a', 'c', 'e'], 'f')).toBe(3);
  });

  test('should handle a null or undefined array', () => {
    expect(sortedIndex(null, 5)).toBe(0);
    expect(sortedIndex(undefined, 5)).toBe(0);
  });
});
