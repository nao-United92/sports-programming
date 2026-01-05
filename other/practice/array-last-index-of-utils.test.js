const arrayLastIndexOf = require('./array-last-index-of-utils');

describe('arrayLastIndexOf', () => {
  test('should return the last index of a value', () => {
    const arr = [1, 2, 3, 4, 3, 2, 1];
    expect(arrayLastIndexOf(arr, 3)).toBe(4);
  });

  test('should return -1 if the value is not found', () => {
    const arr = [1, 2, 3];
    expect(arrayLastIndexOf(arr, 99)).toBe(-1);
  });

  test('should return -1 for an empty array', () => {
    const arr = [];
    expect(arrayLastIndexOf(arr, 1)).toBe(-1);
  });

  test('should return the last index when value appears multiple times', () => {
    const arr = ['a', 'b', 'a', 'c'];
    expect(arrayLastIndexOf(arr, 'a')).toBe(2);
  });

  test('should handle `fromIndex` parameter correctly', () => {
    const arr = [1, 2, 3, 4, 3, 2, 1];
    expect(arrayLastIndexOf(arr, 3, 3)).toBe(2); // Search from index 3 backwards
    expect(arrayLastIndexOf(arr, 2, 1)).toBe(1); // Search from index 1 backwards
    expect(arrayLastIndexOf(arr, 1, 0)).toBe(0); // Search from index 0 backwards
  });

  test('should handle `fromIndex` greater than or equal to array length', () => {
    const arr = [1, 2, 3];
    expect(arrayLastIndexOf(arr, 3, 10)).toBe(2); // fromIndex > arr.length - 1
    expect(arrayLastIndexOf(arr, 3, 2)).toBe(2); // fromIndex = arr.length - 1
  });

  test('should handle `fromIndex` that is negative, counting from the end of the array', () => {
    const arr = [1, 2, 3, 2, 1];
    expect(arrayLastIndexOf(arr, 2, -1)).toBe(3); // Start search at index (5 + (-1)) = 4
    expect(arrayLastIndexOf(arr, 2, -2)).toBe(3); // Start search at index (5 + (-2)) = 3
    expect(arrayLastIndexOf(arr, 1, -3)).toBe(0); // Start search at index (5 + (-3)) = 2
    expect(arrayLastIndexOf(arr, 1, -10)).toBe(-1); // Start search beyond the beginning
  });

  test('should work with different data types', () => {
    const arr = [1, 'hello', null, undefined, 'hello', 0, false];
    expect(arrayLastIndexOf(arr, 'hello')).toBe(4);
    expect(arrayLastIndexOf(arr, null)).toBe(2);
    expect(arrayLastIndexOf(arr, undefined)).toBe(3);
    expect(arrayLastIndexOf(arr, false)).toBe(6);
  });

  test('should handle NaN correctly (returns -1)', () => {
    const arr = [1, NaN, 2, NaN];
    expect(arrayLastIndexOf(arr, NaN)).toBe(-1);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayLastIndexOf(null, 1)).toThrow(TypeError);
    expect(() => arrayLastIndexOf(123, 1)).toThrow(TypeError);
    expect(() => arrayLastIndexOf('string', 1)).toThrow(TypeError);
  });
});
