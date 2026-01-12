import { difference } from './array-difference-util';

describe('difference', () => {
  it('should return the difference between two arrays', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7];
    expect(difference(arr1, arr2)).toEqual([1, 2]);
  });

  it('should return the first array if there are no common elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    expect(difference(arr1, arr2)).toEqual([1, 2, 3]);
  });

  it('should handle arrays with duplicate values', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [2, 3, 4];
    expect(difference(arr1, arr2)).toEqual([1]);
  });

  it('should return an empty array if either argument is not an array', () => {
    expect(difference([1, 2, 3], null)).toEqual([]);
    expect(difference(null, [1, 2, 3])).toEqual([]);
    expect(difference(undefined, [1, 2, 3])).toEqual([]);
    expect(difference([1, 2, 3], undefined)).toEqual([]);
  });
});
