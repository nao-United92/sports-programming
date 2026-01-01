const { pull } = require('./array-pull-elements-utils');

describe('pull', () => {
  test('should remove specified values from an array', () => {
    const arr = ['a', 'b', 'c', 'a', 'b'];
    pull(arr, 'a', 'c');
    expect(arr).toEqual(['b', 'b']);
  });

  test('should modify the original array', () => {
    const arr = [1, 2, 3];
    pull(arr, 1);
    expect(arr).toEqual([2, 3]);
  });

  test('should handle multiple values to pull', () => {
    const arr = [1, 2, 3, 1, 4];
    pull(arr, 1, 4);
    expect(arr).toEqual([2, 3]);
  });

  test('should handle values not present in the array', () => {
    const arr = [1, 2, 3];
    pull(arr, 4, 5);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should handle empty array', () => {
    const arr = [];
    pull(arr, 1);
    expect(arr).toEqual([]);
  });

  test('should handle non-array input', () => {
    expect(pull(null, 1)).toBeNull();
    expect(pull(undefined, 1)).toBeUndefined();
  });
});
