const {
  uniq
} = require('./array-uniq-utils');

describe('uniq', () => {
  test('should remove duplicate values from an array', () => {
    expect(uniq([1, 2, 2, 3, 3, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should return the same array if it has no duplicates', () => {
    expect(uniq([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should handle an empty array', () => {
    expect(uniq([])).toEqual([]);
  });

  test('should handle an array with one element', () => {
    expect(uniq([1])).toEqual([1]);
  });

  test('should handle non-array input', () => {
    expect(uniq(null)).toEqual([]);
    expect(uniq(undefined)).toEqual([]);
    expect(uniq('string')).toEqual([]);
  });
});