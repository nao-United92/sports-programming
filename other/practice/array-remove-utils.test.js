const arrayRemove = require('./array-remove-utils');

describe('arrayRemove', () => {
  test('should remove the first occurrence of a specified value', () => {
    const arr = [1, 2, 3, 2, 4];
    expect(arrayRemove(arr, 2)).toEqual([1, 3, 2, 4]);
  });

  test('should return the original array (shallow copy) if value is not found', () => {
    const arr = [1, 2, 3];
    const result = arrayRemove(arr, 99);
    expect(result).toEqual([1, 2, 3]);
    expect(result).not.toBe(arr); // Ensure it's a new array
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(arrayRemove(arr, 1)).toEqual([]);
  });

  test('should handle array with only one element and remove it', () => {
    const arr = [1];
    expect(arrayRemove(arr, 1)).toEqual([]);
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    arrayRemove(arr, 2);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should work with mixed types of values', () => {
    const arr = [1, 'a', null, undefined, 'a', 0];
    expect(arrayRemove(arr, 'a')).toEqual([1, null, undefined, 'a', 0]);
    expect(arrayRemove(arr, null)).toEqual([1, 'a', undefined, 'a', 0]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayRemove(null, 1)).toThrow(TypeError);
    expect(() => arrayRemove(123, 1)).toThrow(TypeError);
    expect(() => arrayRemove('string', 1)).toThrow(TypeError);
  });
});