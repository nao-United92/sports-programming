
import { pullAll } from './array-pull-all-utils.js';

describe('pullAll', () => {
  test('should remove all specified values from an array', () => {
    const array = ['a', 'b', 'c', 'a', 'b'];
    pullAll(array, ['a', 'c']);
    expect(array).toEqual(['b', 'b']);
  });

  test('should modify the original array', () => {
    const array = [1, 2, 3];
    const originalArray = [...array];
    pullAll(array, [1]);
    expect(array).not.toEqual(originalArray);
  });

  test('should return the modified array', () => {
    const array = [1, 2, 3];
    const result = pullAll(array, [1]);
    expect(result).toBe(array);
  });

  test('should handle values not present in the array', () => {
    const array = [1, 2, 3];
    pullAll(array, [4, 5]);
    expect(array).toEqual([1, 2, 3]);
  });

  test('should handle empty values array', () => {
    const array = [1, 2, 3];
    pullAll(array, []);
    expect(array).toEqual([1, 2, 3]);
  });

  test('should handle empty array', () => {
    const array = [];
    pullAll(array, [1, 2]);
    expect(array).toEqual([]);
  });

  test('should handle non-array inputs gracefully', () => {
    expect(pullAll(null, [1])).toBeNull();
    expect(pullAll(undefined, [1])).toBeUndefined();
    expect(pullAll([1, 2], null)).toEqual([1, 2]);
  });
});
