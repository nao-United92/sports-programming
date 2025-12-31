import { zip } from './array-zip-utils.js';

describe('zip', () => {
  it('should group elements from corresponding positions in multiple arrays', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([
      ['a', 1, true],
      ['b', 2, false],
    ]);
  });

  it('should handle arrays of different lengths, filling with undefined for missing elements', () => {
    expect(zip(['a', 'b', 'c'], [1, 2])).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', undefined],
    ]);
  });

  it('should return an empty array if no arrays are provided', () => {
    expect(zip()).toEqual([]);
  });

  it('should return an array of arrays with undefined if input arrays are empty', () => {
    expect(zip([], [])).toEqual([]);
  });

  it('should handle a single array input', () => {
    expect(zip([1, 2, 3])).toEqual([[1], [2], [3]]);
  });
});