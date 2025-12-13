const uniqueAll = require('./array-unique-all-utils').default;

describe('uniqueAll', () => {
  test('should return a new array with unique elements', () => {
    const arr = [2, 1, 2, 3, 1];
    expect(uniqueAll(arr)).toEqual([2, 1, 3]);
  });

  test('should maintain the order of the first occurrence of each element', () => {
    const arr = ['a', 'b', 'a', 'c', 'b'];
    expect(uniqueAll(arr)).toEqual(['a', 'b', 'c']);
  });

  test('should handle arrays with no duplicates', () => {
    const arr = [1, 2, 3];
    expect(uniqueAll(arr)).toEqual([1, 2, 3]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(uniqueAll(arr)).toEqual([]);
  });

  test('should handle an array with all duplicate elements', () => {
    const arr = [1, 1, 1, 1];
    expect(uniqueAll(arr)).toEqual([1]);
  });

  test('should handle mixed data types', () => {
    const arr = [1, '1', 2, 1, '2', 2, true, 'true', true];
    expect(uniqueAll(arr)).toEqual([1, '1', 2, '2', true, 'true']);
  });

  test('should handle NaN values correctly', () => {
    const arr = [NaN, 1, NaN, 2];
    // Set treats multiple NaNs as one unique value
    expect(uniqueAll(arr)).toEqual([NaN, 1, 2]);
  });

  test('should handle objects and arrays as elements (by reference)', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const arr1 = [1];
    const arr2 = [2];
    const arr = [obj1, obj2, obj1, arr1, arr2, arr1];
    expect(uniqueAll(arr)).toEqual([obj1, obj2, arr1, arr2]);
  });

  test('should not modify the original array', () => {
    const originalArray = [1, 2, 1, 3];
    uniqueAll(originalArray);
    expect(originalArray).toEqual([1, 2, 1, 3]);
  });

  test('should return an empty array if the input is not an array', () => {
    expect(uniqueAll(null)).toEqual([]);
    expect(uniqueAll(undefined)).toEqual([]);
    expect(uniqueAll(123)).toEqual([]);
    expect(uniqueAll('string')).toEqual([]);
    expect(uniqueAll({})).toEqual([]);
  });
});