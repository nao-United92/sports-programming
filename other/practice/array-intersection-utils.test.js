import { intersection } from './array-intersection-utils.js';

describe('intersection', () => {
  it('should return the intersection of two arrays', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    expect(intersection(arr1, arr2)).toEqual([3, 4]);
  });

  it('should return an empty array if there is no intersection', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    expect(intersection(arr1, arr2)).toEqual([]);
  });

  it('should handle empty arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    expect(intersection(arr1, arr2)).toEqual([]);
    expect(intersection([], arr1)).toEqual([]);
  });

  it('should handle arrays with duplicate values', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [2, 3, 3, 4];
    expect(intersection(arr1, arr2)).toEqual([2, 2, 3]);
  });
});
