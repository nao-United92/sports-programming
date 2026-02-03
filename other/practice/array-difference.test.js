import { difference } from './array-difference.js';

describe('difference', () => {
  it('should return the difference of two arrays', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    expect(difference(arr1, arr2)).toEqual([1, 2]);
  });

  it('should return the first array if there is no intersection', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    expect(difference(arr1, arr2)).toEqual([1, 2, 3]);
  });

  it('should handle empty arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    expect(difference(arr1, arr2)).toEqual([1, 2, 3]);
    expect(difference([], arr1)).toEqual([]);
  });

  it('should handle arrays with duplicate values', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [2, 3, 3, 4];
    expect(difference(arr1, arr2)).toEqual([1]);
  });
});
