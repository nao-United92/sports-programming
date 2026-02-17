import arrayPull from './array-pull';

describe('arrayPull', () => {
  test('should mutate the original array by removing specified values', () => {
    const arr = [1, 2, 3, 1, 2];
    arrayPull(arr, 1);
    expect(arr).toEqual([2, 3, 2]);

    const arr2 = [1, 2, 3, 1, 2];
    arrayPull(arr2, 1, 2);
    expect(arr2).toEqual([3]);

    const arr3 = [1, 2, 3];
    arrayPull(arr3, 4);
    expect(arr3).toEqual([1, 2, 3]);
  });

  test('should return the modified array', () => {
    const arr = [1, 2, 3];
    const result = arrayPull(arr, 1);
    expect(result).toBe(arr); // Should be the same reference
  });

  test('should handle an empty array', () => {
    const arr = [];
    arrayPull(arr, 1, 2);
    expect(arr).toEqual([]);
  });

  test('should handle no values to remove', () => {
    const arr = [1, 2, 3];
    arrayPull(arr);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should handle arrays with mixed types', () => {
    const arr = [1, 'a', 2, 'b', 1];
    arrayPull(arr, 1, 'b');
    expect(arr).toEqual(['a', 2]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => arrayPull(null, 1)).toThrow('Expected an array for the first argument.');
    expect(() => arrayPull(undefined, 1)).toThrow('Expected an array for the first argument.');
    expect(() => arrayPull('string', 1)).toThrow('Expected an array for the first argument.');
  });
});
