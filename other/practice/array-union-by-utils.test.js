const unionBy = require('./array-union-by-utils');

describe('unionBy', () => {
  it('should create a union of arrays based on an iteratee function', () => {
    const arr1 = [{ x: 1 }, { x: 2 }];
    const arr2 = [{ x: 2 }, { x: 3 }];
    const result = unionBy(arr1, arr2, item => item.x);
    expect(result).toEqual([{ x: 1 }, { x: 2 }, { x: 3 }]);
  });

  it('should work with a simple array and a default iteratee', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    const arr3 = [3, 4, 5];
    const result = unionBy(arr1, arr2, arr3);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle different types and an iteratee', () => {
    const arr1 = [2.1, 1.2];
    const arr2 = [2.3, 3.4];
    const result = unionBy(arr1, arr2, Math.floor);
    expect(result).toEqual([2.1, 1.2, 3.4]);
  });

  it('should return an empty array if no arrays are provided', () => {
    expect(unionBy()).toEqual([]);
  });

  it('should handle empty arrays', () => {
    const arr1 = [1, 2];
    expect(unionBy(arr1, [])).toEqual([1, 2]);
    expect(unionBy([], arr1)).toEqual([1, 2]);
    expect(unionBy([], [])).toEqual([]);
  });

  it('should handle non-array inputs gracefully', () => {
    const arr1 = [1, 2];
    expect(unionBy(arr1, null, [3, 4], undefined)).toEqual([1, 2, 3, 4]);
  });
});
