const { uniq, difference } = require('./array-set-operations');

describe('Array Set Operations', () => {
  describe('uniq', () => {
    test('should remove duplicate numbers from an array', () => {
      expect(uniq([2, 1, 2, 3, 1])).toEqual([2, 1, 3]);
    });

    test('should remove duplicate strings from an array', () => {
      expect(uniq(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
    });

    test('should return an empty array if input is not an array', () => {
      expect(uniq(null)).toEqual([]);
      expect(uniq(undefined)).toEqual([]);
      expect(uniq({})).toEqual([]);
    });

    test('should handle an array with no duplicates', () => {
      expect(uniq([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('should handle an empty array', () => {
      expect(uniq([])).toEqual([]);
    });
  });

  describe('difference', () => {
    test('should return the difference between two arrays', () => {
      expect(difference([2, 1], [2, 3])).toEqual([1]);
    });

    test('should return the difference from multiple arrays', () => {
      expect(difference([1, 2, 3, 4, 5], [5, 2], [1, 4])).toEqual([3]);
    });

    test('should return the original array if no values are provided to exclude', () => {
      expect(difference([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('should handle empty arrays', () => {
      expect(difference([], [1, 2])).toEqual([]);
      expect(difference([1, 2], [])).toEqual([1, 2]);
    });

    test('should return an empty array if input is not an array', () => {
      expect(difference(null, [1])).toEqual([]);
    });
  });
});
