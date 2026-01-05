const arrayUnique = require('./array-unique-utils');

describe('arrayUnique', () => {
  test('should return an array with unique values', () => {
    const arr = [1, 2, 2, 3, 4, 3, 5];
    expect(arrayUnique(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should preserve the order of first occurrence', () => {
    const arr = [1, 2, 'a', 2, 3, 'a', 4];
    expect(arrayUnique(arr)).toEqual([1, 2, 'a', 3, 4]);
  });

  test('should handle an array with all unique values', () => {
    const arr = [1, 2, 3];
    expect(arrayUnique(arr)).toEqual([1, 2, 3]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(arrayUnique(arr)).toEqual([]);
  });

  test('should handle array with mixed types including null, undefined, NaN', () => {
    const arr = [1, null, 'a', undefined, NaN, 'a', null, 1, 0, NaN];
    expect(arrayUnique(arr)).toEqual([1, null, 'a', undefined, NaN, 0]);
    // Note: Set treats NaN as a single unique value.
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 1];
    arrayUnique(arr);
    expect(arr).toEqual([1, 2, 1]);
  });

  test('should throw TypeError if argument is not an array', () => {
    expect(() => arrayUnique(null)).toThrow(TypeError);
    expect(() => arrayUnique(123)).toThrow(TypeError);
    expect(() => arrayUnique('string')).toThrow(TypeError);
  });
});
