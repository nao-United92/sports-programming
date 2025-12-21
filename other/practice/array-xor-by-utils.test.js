import xorBy from './array-xor-by-utils';

describe('xorBy', () => {
  it('should return the symmetric difference of two arrays based on a iteratee', () => {
    expect(xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2]);
  });
});
