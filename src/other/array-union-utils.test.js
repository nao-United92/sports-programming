const { union } = require('./array-union-utils');

describe('union', () => {
  test('should return unique values from all given arrays', () => {
    expect(union([1, 2], [2, 3], [1, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should handle empty arrays', () => {
    expect(union([], [], [])).toEqual([]);
  });

  test('should handle single array input', () => {
    expect(union([1, 2, 1, 3])).toEqual([1, 2, 3]);
  });

  test('should handle arrays with different data types', () => {
    expect(union([1, 'a'], [2, 'a', null], [null, 3])).toEqual([1, 'a', 2, null, 3]);
  });

  test('should not modify the original arrays', () => {
    const arr1 = [1, 2];
    const arr2 = [2, 3];
    union(arr1, arr2);
    expect(arr1).toEqual([1, 2]);
    expect(arr2).toEqual([2, 3]);
  });
});