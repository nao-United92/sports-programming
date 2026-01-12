import { intersection } from './array-intersection-util';

describe('intersection', () => {
  it('should return an array of elements that appear in both arrays', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7];
    expect(intersection(arr1, arr2)).toEqual([3, 4, 5]);
  });

  it('should return an empty array if there are no common elements', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    expect(intersection(arr1, arr2)).toEqual([]);
  });

  it('should handle arrays with duplicate values', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [2, 2, 3, 4];
    expect(intersection(arr1, arr2)).toEqual([2, 2, 3]);
  });

  it('should return an empty array if either argument is not an array', () => {
    expect(intersection([1, 2, 3], null)).toEqual([]);
    expect(intersection(null, [1, 2, 3])).toEqual([]);
    expect(intersection(undefined, [1, 2, 3])).toEqual([]);
    expect(intersection([1, 2, 3], undefined)).toEqual([]);
  });
});
