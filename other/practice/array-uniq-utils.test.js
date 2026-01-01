const { uniq } = require('./array-uniq-utils');

describe('uniq', () => {
  test('should remove duplicate values from an array', () => {
    expect(uniq([2, 1, 2, 3, 1])).toEqual([2, 1, 3]);
  });

  test('should return the same array if it has no duplicates', () => {
    expect(uniq([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should handle an empty array', () => {
    expect(uniq([])).toEqual([]);
  });

  test('should handle an array with various data types', () => {
    const mixedArray = [1, '1', 2, '2', 1, '1'];
    expect(uniq(mixedArray)).toEqual([1, '1', 2, '2']);
  });

  test('should handle non-array inputs', () => {
    expect(uniq(null)).toEqual([]);
    expect(uniq(undefined)).toEqual([]);
    expect(uniq({})).toEqual([]);
  });
});
