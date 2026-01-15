import { intersectionBy } from './array-intersection-by-utils.js';

describe('intersectionBy', () => {
  test('should return the intersection of two arrays based on a function', () => {
    expect(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([2.1]);
  });

  test('should work with objects and a property', () => {
    const arr1 = [{ x: 1 }, { x: 2 }];
    const arr2 = [{ x: 2 }, { x: 3 }];
    const result = intersectionBy(arr1, arr2, o => o.x);
    expect(result).toEqual([{ x: 2 }]);
  });

  test('should return an empty array if there is no intersection', () => {
    expect(intersectionBy([1.1, 2.2], [3.3, 4.4], Math.floor)).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(intersectionBy([], [1.1, 2.2], Math.floor)).toEqual([]);
  });
});