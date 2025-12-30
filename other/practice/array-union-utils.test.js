import union from './array-union-utils';

describe('union', () => {
  test('should return the union of two arrays', () => {
    expect(union([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should work with multiple arrays', () => {
    expect(union([1, 2], [3, 4], [4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should work with arrays containing different types', () => {
    expect(union([1, 'a'], ['a', 3, null])).toEqual([1, 'a', 3, null]);
  });

  test('should handle empty arrays', () => {
    expect(union([1, 2], [], [3])).toEqual([1, 2, 3]);
  });

  test('should return a new array instance', () => {
    const arr = [1, 2];
    const result = union(arr);
    expect(result).not.toBe(arr);
    expect(result).toEqual(arr);
  });
});
