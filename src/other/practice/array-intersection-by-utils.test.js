import { intersectionBy } from './array-intersection-by-utils.js';

describe('intersectionBy', () => {
  test('should return the intersection of two arrays based on a function', () => {
    const result = intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
    expect(result).toEqual([2.1]);
  });

  test('should return the intersection of two arrays of objects based on a property', () => {
    const result = intersectionBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], (obj) => obj.x);
    expect(result).toEqual([{ 'x': 1 }]);
  });

  test('should return an empty array if there is no intersection', () => {
    const result = intersectionBy([1, 2, 3], [4, 5, 6], x => x);
    expect(result).toEqual([]);
  });

  test('should return an empty array if the first array is empty', () => {
    const result = intersectionBy([], [1, 2, 3], x => x);
    expect(result).toEqual([]);
  });
});
