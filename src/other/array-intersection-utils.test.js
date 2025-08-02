import { intersection, intersectionBy } from './array-intersection-utils.js';

describe('Array Intersection Utilities', () => {
  describe('intersection', () => {
    test('should return common elements from two arrays', () => {
      const array1 = [1, 2, 3];
      const array2 = [2, 3, 4];
      expect(intersection(array1, array2)).toEqual([2, 3]);
    });

    test('should return common elements from multiple arrays', () => {
      const array1 = [1, 2, 3, 4];
      const array2 = [2, 3, 5];
      const array3 = [3, 6, 2];
      expect(intersection(array1, array2, array3)).toEqual([2, 3]);
    });

    test('should handle empty arrays', () => {
      expect(intersection([1, 2], [])).toEqual([]);
      expect(intersection([], [1, 2])).toEqual([]);
    });

    test('should return an empty array if no common elements', () => {
      expect(intersection([1, 2], [3, 4])).toEqual([]);
    });

    test('should handle non-array input for the first argument', () => {
      expect(intersection(null, [1, 2])).toEqual([]);
      expect(intersection(undefined, [1, 2])).toEqual([]);
      expect(intersection('string', [1, 2])).toEqual([]);
    });
  });

  describe('intersectionBy', () => {
    test('should return common elements based on iteratee', () => {
      const array1 = [{ 'x': 1 }, { 'x': 2 }];
      const array2 = [{ 'x': 2 }, { 'x': 3 }];
      expect(intersectionBy(array1, [array2], o => o.x)).toEqual([{ 'x': 2 }]);
    });

    test('should handle multiple arrays with iteratee', () => {
      const array1 = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }];
      const array2 = [{ 'x': 2 }, { 'x': 4 }];
      const array3 = [{ 'x': 2 }, { 'x': 5 }];
      expect(intersectionBy(array1, [array2, array3], o => o.x)).toEqual([{ 'x': 2 }]);
    });

    test('should handle iteratee that returns primitive values', () => {
      const array1 = [1.2, 2.3, 3.4];
      const array2 = [2.1, 4.5];
      expect(intersectionBy(array1, [array2], Math.floor)).toEqual([2.3]);
    });

    test('should handle empty arrays with iteratee', () => {
      expect(intersectionBy([1, 2], [[]], x => x)).toEqual([]);
      expect(intersectionBy([], [[1, 2]], x => x)).toEqual([]);
    });

    test('should handle non-array input for the first argument', () => {
      expect(intersectionBy(null, [[1, 2]], x => x)).toEqual([]);
    });
  });
});
