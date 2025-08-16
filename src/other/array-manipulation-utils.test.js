import { flatten, compact } from './array-manipulation-utils';

describe('Array Manipulation Utilities', () => {
  describe('flatten', () => {
    it('should flatten an array by one level by default', () => {
      expect(flatten([1, [2, [3]]])).toEqual([1, 2, [3]]);
    });

    it('should flatten an array to a specified depth', () => {
      expect(flatten([1, [2, [3]]], 2)).toEqual([1, 2, 3]);
    });

    it('should handle empty arrays', () => {
      expect(flatten([])).toEqual([]);
    });

    it('should handle non-array elements', () => {
      expect(flatten([1, 'a', { b: 2 }])).toEqual([1, 'a', { b: 2 }]);
    });

    it('should handle depth 0', () => {
      expect(flatten([1, [2, [3]]], 0)).toEqual([1, [2, [3]]]);
    });

    it('should handle negative depth', () => {
      expect(flatten([1, [2, [3]]], -1)).toEqual([]);
    });
  });

  describe('compact', () => {
    it('should remove all falsey values from an array', () => {
      expect(compact([0, 1, false, 2, '', 3, null, 'a', undefined, NaN])).toEqual([1, 2, 3, 'a']);
    });

    it('should handle empty arrays', () => {
      expect(compact([])).toEqual([]);
    });

    it('should handle arrays with only falsey values', () => {
      expect(compact([0, false, '', null, undefined, NaN])).toEqual([]);
    });

    it('should handle arrays with no falsey values', () => {
      expect(compact([1, 2, 3, 'a'])).toEqual([1, 2, 3, 'a']);
    });

    it('should handle non-array input', () => {
      expect(compact(null)).toEqual([]);
      expect(compact(undefined)).toEqual([]);
      expect(compact(123)).toEqual([]);
    });
  });
});
