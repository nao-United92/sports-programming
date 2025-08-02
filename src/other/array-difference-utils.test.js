import { difference, differenceBy } from './array-difference-utils.js';

describe('Array Difference Utilities', () => {
  describe('difference', () => {
    test('should return the difference between two arrays', () => {
      const array = [1, 2, 3, 4, 5];
      const exclude = [3, 5, 6];
      expect(difference(array, exclude)).toEqual([1, 2, 4]);
    });

    test('should handle multiple exclusion arrays', () => {
      const array = [1, 2, 3, 4, 5, 6];
      const exclude1 = [2, 4];
      const exclude2 = [1, 5];
      expect(difference(array, exclude1, exclude2)).toEqual([3, 6]);
    });

    test('should return the original array if no common elements', () => {
      const array = [1, 2, 3];
      const exclude = [4, 5, 6];
      expect(difference(array, exclude)).toEqual([1, 2, 3]);
    });

    test('should return an empty array if all elements are excluded', () => {
      const array = [1, 2, 3];
      const exclude = [1, 2, 3];
      expect(difference(array, exclude)).toEqual([]);
    });

    test('should handle empty input array', () => {
      expect(difference([], [1, 2])).toEqual([]);
    });

    test('should handle empty exclusion array', () => {
      const array = [1, 2, 3];
      expect(difference(array, [])).toEqual([1, 2, 3]);
    });

    test('should handle non-array input for the first argument', () => {
      expect(difference(null, [1, 2])).toEqual([]);
      expect(difference(undefined, [1, 2])).toEqual([]);
      expect(difference('string', [1, 2])).toEqual([]);
    });
  });

  describe('differenceBy', () => {
    test('should return the difference based on iteratee function', () => {
      const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }];
      const values = [{ 'x': 2 }, { 'x': 4 }];
      expect(differenceBy(array, values, o => o.x)).toEqual([{ 'x': 1 }, { 'x': 3 }]);
    });

    test('should handle iteratee that returns primitive values', () => {
      const array = [1.2, 2.3, 3.4];
      const values = [2.1, 4.5];
      expect(differenceBy(array, values, Math.floor)).toEqual([1.2, 3.4]);
    });

    test('should handle empty input array', () => {
      expect(differenceBy([], [{ 'x': 1 }], o => o.x)).toEqual([]);
    });

    test('should handle empty values array', () => {
      const array = [{ 'x': 1 }, { 'x': 2 }];
      expect(differenceBy(array, [], o => o.x)).toEqual([{ 'x': 1 }, { 'x': 2 }]);
    });

    test('should handle non-array input for the first argument', () => {
      expect(differenceBy(null, [{ 'x': 1 }], o => o.x)).toEqual([]);
    });
  });
});
