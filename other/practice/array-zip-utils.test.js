const zip = require('./array-zip-utils');

describe('zip', () => {
  test('should group corresponding elements from multiple arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = ['a', 'b', 'c'];
    const arr3 = [true, false, true];
    expect(zip(arr1, arr2, arr3)).toEqual([
      [1, 'a', true],
      [2, 'b', false],
      [3, 'c', true],
    ]);
  });

  test('should handle arrays of different lengths, padding with undefined', () => {
    const arr1 = [1, 2];
    const arr2 = ['a', 'b', 'c', 'd'];
    expect(zip(arr1, arr2)).toEqual([
      [1, 'a'],
      [2, 'b'],
      [undefined, 'c'],
      [undefined, 'd'],
    ]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(zip()).toEqual([]);
  });

  test('should return an array of empty arrays if all input arrays are empty', () => {
    expect(zip([], [], [])).toEqual([]);
  });

  test('should handle a single array', () => {
    expect(zip([1, 2, 3])).toEqual([[1], [2], [3]]);
  });

  test('should handle arrays with mixed types', () => {
    const arr1 = [1, null];
    const arr2 = ['a', undefined];
    expect(zip(arr1, arr2)).toEqual([
      [1, 'a'],
      [null, undefined],
    ]);
  });

  test('should throw an error for non-array input', () => {
    expect(() => zip([1, 2], null)).toThrow('Expected all arguments to be arrays');
    expect(() => zip(1, [2, 3])).toThrow('Expected all arguments to be arrays');
  });
});
