import { pullAll } from './array-pull-all';

describe('pullAll', () => {
  test('should remove specified values from an array', () => {
    const arr = ['a', 'b', 'c', 'a', 'b'];
    pullAll(arr, ['a', 'c']);
    expect(arr).toEqual(['b', 'b']);
  });

  test('should mutate the original array', () => {
    const arr = [1, 2, 3, 1];
    pullAll(arr, [1]);
    expect(arr).toEqual([2, 3]);
  });

  test('should handle values not present in the array', () => {
    const arr = [1, 2, 3];
    pullAll(arr, [4, 5]);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should handle empty array for values to pull', () => {
    const arr = [1, 2, 3];
    pullAll(arr, []);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should handle empty array for target array', () => {
    const arr = [];
    pullAll(arr, [1, 2]);
    expect(arr).toEqual([]);
  });

  test('should handle pulling null and undefined', () => {
    const arr = [1, null, 2, undefined, null];
    pullAll(arr, [null, undefined]);
    expect(arr).toEqual([1, 2]);
  });

  test('should handle objects by reference', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };
    const arr = [obj1, obj2, obj1];
    pullAll(arr, [obj1]);
    expect(arr).toEqual([obj2]);
  });

  test('should return the modified array', () => {
    const arr = [1, 2, 3];
    const result = pullAll(arr, [1]);
    expect(result).toBe(arr); // Should be the same array instance
    expect(result).toEqual([2, 3]);
  });

  test('should handle non-array input for target array by returning it as is', () => {
    const nonArray = null;
    expect(pullAll(nonArray, [1])).toBe(null);
    const str = 'test';
    expect(pullAll(str, ['t'])).toBe('test');
  });

  test('should handle non-array input for values to remove by returning original array', () => {
    const arr = [1, 2, 3];
    expect(pullAll(arr, null)).toEqual([1, 2, 3]);
    expect(pullAll(arr, undefined)).toEqual([1, 2, 3]);
  });
});
