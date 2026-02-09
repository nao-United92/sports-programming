import intersection from './array-intersection-basic';

describe('intersection', () => {
  it('should return the intersection of two arrays', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [4, 5, 6];
    expect(intersection(arr1, arr2)).toEqual([4, 5]);
  });

  it('should return an empty array if there is no intersection', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    expect(intersection(arr1, arr2)).toEqual([]);
  });

  it('should return the array itself if the arrays are the same', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(intersection(arr1, arr2)).toEqual([1, 2, 3]);
  });

  it('should handle empty arrays', () => {
    expect(intersection([1, 2, 3], [])).toEqual([]);
    expect(intersection([], [1, 2, 3])).toEqual([]);
    expect(intersection([], [])).toEqual([]);
  });

  it('should work with strings', () => {
    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['b', 'd', 'a'];
    expect(intersection(arr1, arr2)).toEqual(['a', 'b']);
  });
});
