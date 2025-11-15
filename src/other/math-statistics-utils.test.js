import { sum, median, mode } from './math-statistics-utils';

describe('math-statistics-utils', () => {
  describe('sum', () => {
    test('should calculate the sum of an array of numbers', () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    test('should return 0 for an empty array', () => {
      expect(sum([])).toBe(0);
    });

    test('should handle negative numbers', () => {
      expect(sum([-1, -2, 3])).toBe(0);
    });
  });

  describe('median', () => {
    test('should calculate the median of an odd-length array', () => {
      expect(median([1, 2, 3, 4, 5])).toBe(3);
    });

    test('should calculate the median of an even-length array', () => {
      expect(median([1, 2, 3, 4])).toBe(2.5);
    });

    test('should handle unsorted arrays', () => {
      expect(median([5, 1, 4, 2, 3])).toBe(3);
    });

    test('should return null for an empty array', () => {
      expect(median([])).toBeNull();
    });
  });

  describe('mode', () => {
    test('should calculate the mode of an array with a single mode', () => {
      expect(mode([1, 2, 2, 3, 4])).toEqual([2]);
    });

    test('should calculate the mode of an array with multiple modes', () => {
      expect(mode([1, 2, 2, 3, 3, 4])).toEqual([2, 3]);
    });

    test('should return an empty array for an empty input', () => {
      expect(mode([])).toEqual([]);
    });

    test('should handle arrays where all numbers appear once', () => {
      expect(mode([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
  });
});
