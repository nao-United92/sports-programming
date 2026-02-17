import arrayPullAll from './array-pull-all';

describe('arrayPullAll', () => {
  test('should mutate the original array by removing all specified values', () => {
    const arr = [1, 2, 3, 1, 2];
    arrayPullAll(arr, [1]);
    expect(arr).toEqual([2, 3, 2]);

    const arr2 = [1, 2, 3, 1, 2];
    arrayPullAll(arr2, [1, 2]);
    expect(arr2).toEqual([3]);

    const arr3 = [1, 2, 3];
    arrayPullAll(arr3, [4]);
    expect(arr3).toEqual([1, 2, 3]);
  });

  test('should return the modified array', () => {
    const arr = [1, 2, 3];
    const result = arrayPullAll(arr, [1]);
    expect(result).toBe(arr); // Should be the same reference
  });

  test('should handle an empty array to modify', () => {
    const arr = [];
    arrayPullAll(arr, [1, 2]);
    expect(arr).toEqual([]);
  });

  test('should handle an empty array of values to remove', () => {
    const arr = [1, 2, 3];
    arrayPullAll(arr, []);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'a', 2, 'b', 1];
    arrayPullAll(arr, [1, 'b']);
    expect(arr).toEqual(['a', 2]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayPullAll(null, [1])).toThrow('Expected both arguments to be arrays.');
    expect(() => arrayPullAll(undefined, [1])).toThrow('Expected both arguments to be arrays.');
    expect(() => arrayPullAll('string', [1])).toThrow('Expected both arguments to be arrays.');
  });

  test('should throw an error if the second argument is not an array', () => {
    expect(() => arrayPullAll([1], null)).toThrow('Expected both arguments to be arrays.');
    expect(() => arrayPullAll([1], 'string')).toThrow('Expected both arguments to be arrays.');
  });
});
