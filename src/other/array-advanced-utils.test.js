
import { uniqueArray, flattenArray, chunkArray, shuffleArray } from './array-advanced-utils';

describe('uniqueArray', () => {
  test('should return an array with unique elements', () => {
    expect(uniqueArray([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(uniqueArray(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
    expect(uniqueArray([])).toEqual([]);
    expect(uniqueArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should handle arrays with mixed types', () => {
    expect(uniqueArray([1, '1', 2, 1])).toEqual([1, '1', 2]);
  });

  test('should return empty array for non-array input', () => {
    expect(uniqueArray(null)).toEqual([]);
    expect(uniqueArray(undefined)).toEqual([]);
    expect(uniqueArray('string')).toEqual([]);
  });
});

describe('flattenArray', () => {
  test('should flatten a nested array', () => {
    expect(flattenArray([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
    expect(flattenArray([1, [2, [3, 4]], 5])).toEqual([1, 2, 3, 4, 5]);
    expect(flattenArray([])).toEqual([]);
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should return empty array for non-array input', () => {
    expect(flattenArray(null)).toEqual([]);
    expect(flattenArray(undefined)).toEqual([]);
    expect(flattenArray('string')).toEqual([]);
  });
});

describe('chunkArray', () => {
  test('should chunk an array into specified size', () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunkArray([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
    expect(chunkArray([], 2)).toEqual([]);
    expect(chunkArray([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  test('should return empty array for invalid size', () => {
    expect(chunkArray([1, 2, 3], 0)).toEqual([]);
    expect(chunkArray([1, 2, 3], -1)).toEqual([]);
  });

  test('should return empty array for non-array input', () => {
    expect(chunkArray(null, 2)).toEqual([]);
    expect(chunkArray(undefined, 2)).toEqual([]);
    expect(chunkArray('string', 2)).toEqual([]);
  });
});

describe('shuffleArray', () => {
  test('should shuffle the array in place', () => {
    const arr = [1, 2, 3, 4, 5];
    const originalArr = [...arr];
    shuffleArray(arr);
    // Check if the array length remains the same
    expect(arr.length).toBe(originalArr.length);
    // Check if all original elements are still present
    originalArr.forEach(element => {
      expect(arr).toContain(element);
    });
    // It's highly unlikely (but possible) that the shuffled array is identical to the original
    // So we don't expect it to be different, but rather check for element presence and length
  });

  test('should return empty array for non-array input', () => {
    expect(shuffleArray(null)).toEqual([]);
    expect(shuffleArray(undefined)).toEqual([]);
    expect(shuffleArray('string')).toEqual([]);
  });

  test('should handle empty array', () => {
    const arr = [];
    shuffleArray(arr);
    expect(arr).toEqual([]);
  });
});
