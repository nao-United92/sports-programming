import { xor } from './array-xor-utils';

describe('xor', () => {
  it('should return the symmetric difference of two arrays', () => {
    expect(xor([2, 1], [2, 3])).toEqual([1, 3]);
  });

  it('should handle multiple arrays', () => {
    expect(xor([1, 2, 3], [2, 3, 4], [3, 4, 5])).toEqual([1, 5]);
  });

  it('should return an empty array if all arrays are the same', () => {
    expect(xor([1, 2], [1, 2])).toEqual([]);
  });

  it('should handle empty arrays', () => {
    expect(xor([1, 2], [])).toEqual([1, 2]);
  });

  it('should work with different data types', () => {
    expect(xor([1, 'a'], ['a', null])).toEqual([1, null]);
  });
});
