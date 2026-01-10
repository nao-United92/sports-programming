const { union } = require('./array-combiner.js');

describe('union', () => {
  test('should return a new array of unique values from all given arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 4, 5];
    const arr3 = [5, 6, 7];
    expect(union(arr1, arr2, arr3)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('should handle arrays with duplicate values within themselves', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [3, 4, 4, 5];
    expect(union(arr1, arr2)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle arrays with different types of primitives', () => {
    const arr1 = [1, 'a', true];
    const arr2 = [true, false, 1];
    expect(union(arr1, arr2)).toEqual([1, 'a', true, false]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(union()).toEqual([]);
  });

  test('should handle empty arrays as arguments', () => {
    const arr1 = [1, 2];
    const arr2 = [];
    const arr3 = [3, 4];
    expect(union(arr1, arr2, arr3)).toEqual([1, 2, 3, 4]);
  });

  test('should maintain the order of first appearance', () => {
    const arr1 = [1, 2, 'a'];
    const arr2 = ['a', 3, 4];
    expect(union(arr1, arr2)).toEqual([1, 2, 'a', 3, 4]);
  });

  test('should return unique values for objects based on reference equality', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 1 }; // Different reference
    const arr1 = [obj1, obj2];
    const arr2 = [obj2, obj3];
    expect(union(arr1, arr2)).toEqual([obj1, obj2, obj3]);
  });

  test('should throw an error if any argument is not an array', () => {
    const arr1 = [1, 2];
    expect(() => union(arr1, null)).toThrow('All arguments must be arrays.');
    expect(() => union(arr1, undefined)).toThrow('All arguments must be arrays.');
    expect(() => union(arr1, 'string')).toThrow('All arguments must be arrays.');
    expect(() => union(arr1, {})).toThrow('All arguments must be arrays.');
  });
});
