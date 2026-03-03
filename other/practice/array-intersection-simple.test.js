import { intersection } from './array-intersection-simple';

describe('intersection', () => {
  test('should return intersecting values from two arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    const result = intersection(arr1, arr2);
    expect(result).toEqual([2, 3]);
  });

  test('should return intersecting values from multiple arrays', () => {
    const result = intersection([1, 2], [2, 3], [2, 4]);
    expect(result).toEqual([2]);
  });

  test('should return an empty array when no intersection exists', () => {
    const result = intersection([1], [2], [3]);
    expect(result).toEqual([]);
  });
});
