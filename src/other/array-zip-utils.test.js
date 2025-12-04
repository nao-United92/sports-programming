const { zip } = require('./array-zip-utils');

describe('zip', () => {
  test('should zip arrays of equal length', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
  });

  test('should zip arrays of different lengths', () => {
    expect(zip(['a', 'b', 'c'], [1, 2], [true])).toEqual([['a', 1, true], ['b', 2, undefined], ['c', undefined, undefined]]);
  });

  test('should return an empty array when no arrays are provided', () => {
    expect(zip()).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(zip([], [], [])).toEqual([]);
  });

  test('should handle a single array', () => {
    expect(zip(['a', 'b', 'c'])).toEqual([['a'], ['b'], ['c']]);
  });
});