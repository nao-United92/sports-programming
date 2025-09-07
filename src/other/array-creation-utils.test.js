import { range, fill } from './array-creation-utils.js';

describe('Array Creation Utilities', () => {
  describe('range', () => {
    it('should generate a range of numbers with default start and step', () => {
      expect(range(5)).toEqual([0, 1, 2, 3, 4]);
    });

    it('should generate a range of numbers with specified start and end', () => {
      expect(range(1, 5)).toEqual([1, 2, 3, 4]);
    });

    it('should generate a range of numbers with specified step', () => {
      expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
    });

    it('should generate a decreasing range of numbers', () => {
      expect(range(5, 0, -1)).toEqual([5, 4, 3, 2, 1]);
    });

    it('should handle empty range', () => {
      expect(range(5, 5)).toEqual([]);
    });
  });

  describe('fill', () => {
    it('should create an array filled with a specified value', () => {
      expect(fill(3, 'a')).toEqual(['a', 'a', 'a']);
    });

    it('should create an array filled with null', () => {
      expect(fill(2, null)).toEqual([null, null]);
    });

    it('should create an empty array if size is 0', () => {
      expect(fill(0, 'a')).toEqual([]);
    });
  });
});
