const arrayWithoutEqual = require('./array-without-equal-utils');

describe('arrayWithoutEqual', () => {
  test('should return a new array excluding elements strictly equal to the value', () => {
    const arr = [1, 2, 3, '3', 4, 3, 5];
    expect(arrayWithoutEqual(arr, 3)).toEqual([1, 2, '3', 4, 5]);
  });

  test('should handle values not present in the array', () => {
    const arr = [1, 2, 3];
    expect(arrayWithoutEqual(arr, 99)).toEqual([1, 2, 3]);
  });

  test('should handle empty array', () => {
    const arr = [];
    expect(arrayWithoutEqual(arr, 1)).toEqual([]);
  });

  test('should remove all occurrences of the strictly equal value', () => {
    const arr = [1, 2, 3, 2, '2', 4, 2];
    expect(arrayWithoutEqual(arr, 2)).toEqual([1, 3, '2', 4]);
  });

  test('should differentiate between different types with same value (e.g., number 3 and string "3")', () => {
    const arr = [1, 3, '3', 4];
    expect(arrayWithoutEqual(arr, 3)).toEqual([1, '3', 4]);
    expect(arrayWithoutEqual(arr, '3')).toEqual([1, 3, 4]);
  });

  test('should handle null and undefined values strictly', () => {
    const arr = [null, 1, undefined, null, 2];
    expect(arrayWithoutEqual(arr, null)).toEqual([1, undefined, 2]);
    expect(arrayWithoutEqual(arr, undefined)).toEqual([null, 1, null, 2]);
  });

  test('should handle NaN values correctly (NaN !== NaN)', () => {
    const arr = [1, NaN, 2, NaN];
    expect(arrayWithoutEqual(arr, NaN)).toEqual([1, NaN, 2, NaN]); // NaN !== NaN is true
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    arrayWithoutEqual(arr, 2);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayWithoutEqual(null, 1)).toThrow(TypeError);
    expect(() => arrayWithoutEqual(123, 1)).toThrow(TypeError);
    expect(() => arrayWithoutEqual('string', 1)).toThrow(TypeError);
  });
});
