const arrayWithout = require('./array-without-utils');

describe('arrayWithout', () => {
  test('should return a new array excluding a single specified value', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayWithout(arr, 3)).toEqual([1, 2, 4, 5]);
  });

  test('should return a new array excluding multiple specified values', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayWithout(arr, 2, 4)).toEqual([1, 3, 5]);
  });

  test('should handle values that are not present in the array', () => {
    const arr = [1, 2, 3];
    expect(arrayWithout(arr, 99)).toEqual([1, 2, 3]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    expect(arrayWithout(arr, 1, 2)).toEqual([]);
  });

  test('should handle an array with duplicate values and remove all occurrences', () => {
    const arr = [1, 2, 3, 2, 4, 2, 5];
    expect(arrayWithout(arr, 2)).toEqual([1, 3, 4, 5]);
  });

  test('should work with mixed types of values', () => {
    const arr = [1, '2', true, null, undefined, 1, '3'];
    expect(arrayWithout(arr, 1, '2')).toEqual([true, null, undefined, '3']);
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    arrayWithout(arr, 2);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayWithout(null, 1)).toThrow(TypeError);
    expect(() => arrayWithout('string', 1)).toThrow(TypeError);
    expect(() => arrayWithout(123, 1)).toThrow(TypeError);
  });
});
