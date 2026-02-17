import arrayUnion from './array-union';

describe('arrayUnion', () => {
  test('should return a new array with unique values from all given arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    const arr3 = [5, 6, 7];
    expect(arrayUnion(arr1, arr2, arr3)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('should handle empty arrays', () => {
    const arr1 = [];
    const arr2 = [1, 2];
    expect(arrayUnion(arr1, arr2)).toEqual([1, 2]);
  });

  test('should handle all empty arrays', () => {
    expect(arrayUnion([], [], [])).toEqual([]);
  });

  test('should handle arrays with duplicate values within themselves and across arrays', () => {
    const arr1 = [1, 1, 2];
    const arr2 = [2, 3, 3];
    expect(arrayUnion(arr1, arr2)).toEqual([1, 2, 3]);
  });

  test('should handle arrays with mixed types', () => {
    const arr1 = [1, 'a', 2];
    const arr2 = ['a', 3, 'b'];
    expect(arrayUnion(arr1, arr2)).toEqual([1, 'a', 2, 3, 'b']);
  });

  test('should throw an error if any argument is not an array', () => {
    const arr1 = [1, 2];
    expect(() => arrayUnion(arr1, null)).toThrow('Expected all arguments to be arrays.');
    expect(() => arrayUnion(undefined, arr1)).toThrow('Expected all arguments to be arrays.');
    expect(() => arrayUnion(arr1, 'string')).toThrow('Expected all arguments to be arrays.');
  });
});
