import { isEqual, isSubset } from './array-comparison-utils.js';

describe('Array Comparison Utilities', () => {
  describe('isEqual', () => {
    it('should return true for equal arrays', () => {
      expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    });

    it('should return false for arrays with different lengths', () => {
      expect(isEqual([1, 2], [1, 2, 3])).toBe(false);
    });

    it('should return false for arrays with different elements', () => {
      expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    });

    it('should return false for arrays with same elements but different order', () => {
      expect(isEqual([1, 2, 3], [3, 2, 1])).toBe(false);
    });

    it('should handle empty arrays', () => {
      expect(isEqual([], [])).toBe(true);
    });
  });

  describe('isSubset', () => {
    it('should return true if the first array is a subset of the second', () => {
      expect(isSubset([1, 2], [1, 2, 3, 4])).toBe(true);
    });

    it('should return true if the arrays are identical', () => {
      expect(isSubset([1, 2, 3], [1, 2, 3])).toBe(true);
    });

    it('should return false if the first array contains elements not in the second', () => {
      expect(isSubset([1, 5], [1, 2, 3, 4])).toBe(false);
    });

    it('should handle empty subset', () => {
      expect(isSubset([], [1, 2, 3])).toBe(true);
    });

    it('should handle empty superset', () => {
      expect(isSubset([1], [])).toBe(false);
    });
  });
});