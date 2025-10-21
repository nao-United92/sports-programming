import { intersectionBy } from './array-intersection-by-utils.js';

describe('intersectionBy', () => {
  test('should return the intersection of two arrays based on a function', () => {
    const arr1 = [{ 'x': 1 }, { 'x': 2 }];
    const arr2 = [{ 'x': 2 }, { 'x': 3 }];
    const result = intersectionBy(arr1, arr2, o => o.x);
    expect(result).toEqual([{ 'x': 2 }]);
  });

  test('should work with Math.floor', () => {
    const arr1 = [2.1, 1.2];
    const arr2 = [2.3, 3.4];
    const result = intersectionBy(arr1, arr2, Math.floor);
    expect(result).toEqual([2.1]);
  });

  test('should return an empty array if there is no intersection', () => {
    const arr1 = [{ 'x': 1 }];
    const arr2 = [{ 'x': 3 }];
    const result = intersectionBy(arr1, arr2, o => o.x);
    expect(result).toEqual([]);
  });
});
