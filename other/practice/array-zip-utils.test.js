const {
  zip
} = require('./array-zip-utils');

describe('zip', () => {
  test('should zip together arrays of the same length', () => {
    const arr1 = ['a', 'b'];
    const arr2 = [1, 2];
    const arr3 = [true, false];
    expect(zip(arr1, arr2, arr3)).toEqual([
      ['a', 1, true],
      ['b', 2, false]
    ]);
  });

  test('should zip together arrays of different lengths', () => {
    const arr1 = ['a', 'b', 'c'];
    const arr2 = [1, 2];
    expect(zip(arr1, arr2)).toEqual([
      ['a', 1],
      ['b', 2]
    ]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(zip()).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(zip([], [1, 2])).toEqual([]);
    expect(zip([1, 2], [])).toEqual([]);
    expect(zip([], [])).toEqual([]);
  });

  test('should handle a single array', () => {
    expect(zip([1, 2, 3])).toEqual([
      [1],
      [2],
      [3]
    ]);
  });
});