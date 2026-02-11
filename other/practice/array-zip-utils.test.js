import { zip } from './array-zip-utils.js';

describe('zip', () => {
  it('should zip multiple arrays together', () => {
    const arr1 = [1, 2, 3];
    const arr2 = ['a', 'b', 'c'];
    const arr3 = [true, false, true];
    expect(zip(arr1, arr2, arr3)).toEqual([
      [1, 'a', true],
      [2, 'b', false],
      [3, 'c', true]
    ]);
  });

  it('should handle arrays of different lengths, filling with undefined', () => {
    const arr1 = [1, 2];
    const arr2 = ['a', 'b', 'c'];
    expect(zip(arr1, arr2)).toEqual([
      [1, 'a'],
      [2, 'b'],
      [undefined, 'c']
    ]);
  });

  it('should return an empty array if no arrays are provided', () => {
    expect(zip()).toEqual([]);
  });

  it('should handle single array input', () => {
    const arr1 = [1, 2, 3];
    expect(zip(arr1)).toEqual([
      [1],
      [2],
      [3]
    ]);
  });

  it('should handle empty arrays', () => {
    expect(zip([], [])).toEqual([]);
    expect(zip([1, 2], [])).toEqual([[1, undefined], [2, undefined]]);
  });
});