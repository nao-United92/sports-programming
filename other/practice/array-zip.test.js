const { zip } = require('./array-zip');

describe('zip', () => {
  it('should zip together arrays of equal length', () => {
    const arr1 = ['a', 'b'];
    const arr2 = [1, 2];
    const arr3 = [true, false];
    expect(zip(arr1, arr2, arr3)).toEqual([['a', 1, true], ['b', 2, false]]);
  });

  it('should handle arrays of different lengths by padding with undefined', () => {
    const arr1 = ['a', 'b', 'c'];
    const arr2 = [1, 2];
    expect(zip(arr1, arr2)).toEqual([['a', 1], ['b', 2], ['c', undefined]]);
  });

  it('should return an empty array if no arrays are provided', () => {
    expect(zip()).toEqual([]);
  });

  it('should handle empty arrays', () => {
    expect(zip([], [])).toEqual([]);
    expect(zip([1, 2], [])).toEqual([[1, undefined], [2, undefined]]);
  });

  it('should work with a single array', () => {
    expect(zip(['a', 'b'])).toEqual([['a'], ['b']]);
  });
});
