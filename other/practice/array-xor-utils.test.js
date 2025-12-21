import xor from './array-xor-utils';

describe('xor', () => {
  it('should return the symmetric difference of two arrays', () => {
    expect(xor([2, 1], [2, 3])).toEqual([1]);
  });
});
