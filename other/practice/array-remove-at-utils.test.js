const arrayRemoveAt = require('./array-remove-at-utils');

describe('arrayRemoveAt', () => {
  test('should remove an element at the specified index', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayRemoveAt(arr, 2)).toEqual([1, 2, 4, 5]);
  });

  test('should return the original array (shallow copy) if index is out of bounds (too low)', () => {
    const arr = [1, 2, 3];
    const result = arrayRemoveAt(arr, -1);
    expect(result).toEqual([1, 2, 3]);
    expect(result).not.toBe(arr); // Ensure it's a new array
  });

  test('should return the original array (shallow copy) if index is out of bounds (too high)', () => {
    const arr = [1, 2, 3];
    const result = arrayRemoveAt(arr, 3);
    expect(result).toEqual([1, 2, 3]);
    expect(result).not.toBe(arr); // Ensure it's a new array
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(arrayRemoveAt(arr, 0)).toEqual([]);
  });

  test('should remove the first element', () => {
    const arr = [1, 2, 3];
    expect(arrayRemoveAt(arr, 0)).toEqual([2, 3]);
  });

  test('should remove the last element', () => {
    const arr = [1, 2, 3];
    expect(arrayRemoveAt(arr, 2)).toEqual([1, 2]);
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    arrayRemoveAt(arr, 1);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayRemoveAt(null, 0)).toThrow(TypeError);
    expect(() => arrayRemoveAt(123, 0)).toThrow(TypeError);
    expect(() => arrayRemoveAt('string', 0)).toThrow(TypeError);
  });
});
