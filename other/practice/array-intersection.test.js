const { intersection } = require('./array-intersection');

describe('intersection', () => {
  it('should return the intersection of two arrays of numbers', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    expect(intersection(arr1, arr2)).toEqual([3, 4]);
  });

  it('should return the intersection of two arrays of strings', () => {
    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['b', 'c', 'd'];
    expect(intersection(arr1, arr2)).toEqual(['b', 'c']);
  });

  it('should return an empty array if there is no intersection', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    expect(intersection(arr1, arr2)).toEqual([]);
  });

  it('should handle empty arrays', () => {
    expect(intersection([1, 2], [])).toEqual([]);
    expect(intersection([], [1, 2])).toEqual([]);
    expect(intersection([], [])).toEqual([]);
  });

  it('should return an empty array for non-array inputs', () => {
    expect(intersection(null, [1, 2])).toEqual([]);
    expect(intersection([1, 2], {})).toEqual([]);
  });
  
  it('should not return duplicate values', () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [2, 3, 3, 4];
    expect(intersection(arr1, arr2)).toEqual([2, 3]);
  });
});
