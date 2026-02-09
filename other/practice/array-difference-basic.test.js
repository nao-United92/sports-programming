import difference from './array-difference-basic';

describe('difference', () => {
  it('should return the difference between two arrays', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [4, 5, 6];
    expect(difference(arr1, arr2)).toEqual([1, 2, 3]);
  });

  it('should return the first array if there is no intersection', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    expect(difference(arr1, arr2)).toEqual([1, 2, 3]);
  });

  it('should return an empty array if the arrays are the same', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(difference(arr1, arr2)).toEqual([]);
  });

  it('should handle empty arrays', () => {
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(difference([], [1, 2, 3])).toEqual([]);
    expect(difference([], [])).toEqual([]);
  });

  it('should work with strings', () => {
    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['b', 'd'];
    expect(difference(arr1, arr2)).toEqual(['a', 'c']);
  });
});
