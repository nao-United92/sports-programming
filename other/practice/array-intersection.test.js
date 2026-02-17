import arrayIntersection from './array-intersection';

describe('arrayIntersection', () => {
  test('should return unique values present in all given arrays', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    const arr3 = [4, 6, 7, 8];
    expect(arrayIntersection(arr1, arr2, arr3)).toEqual([4]);
  });

  test('should handle two arrays with common elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    expect(arrayIntersection(arr1, arr2)).toEqual([3]);
  });

  test('should handle no common elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    expect(arrayIntersection(arr1, arr2)).toEqual([]);
  });

  test('should handle empty arrays', () => {
    const arr1 = [1, 2];
    const arr2 = [];
    expect(arrayIntersection(arr1, arr2)).toEqual([]);
  });

  test('should handle all empty arrays', () => {
    expect(arrayIntersection([], [], [])).toEqual([]);
  });

  test('should handle arrays with duplicate values within themselves', () => {
    const arr1 = [1, 1, 2];
    const arr2 = [1, 2, 2];
    expect(arrayIntersection(arr1, arr2)).toEqual([1, 2]);
  });

  test('should handle arrays with mixed types', () => {
    const arr1 = [1, 'a', 2];
    const arr2 = ['a', 3, 1];
    expect(arrayIntersection(arr1, arr2)).toEqual([1, 'a']);
  });

  test('should throw an error if any argument is not an array', () => {
    const arr1 = [1, 2];
    expect(() => arrayIntersection(arr1, null)).toThrow('Expected all arguments to be arrays.');
    expect(() => arrayIntersection(undefined, arr1)).toThrow('Expected all arguments to be arrays.');
    expect(() => arrayIntersection(arr1, 'string')).toThrow('Expected all arguments to be arrays.');
  });

  test('should return unique elements of the single array if only one array is provided', () => {
    const arr = [1, 2, 2, 3];
    expect(arrayIntersection(arr)).toEqual([1, 2, 3]);
  });
});
