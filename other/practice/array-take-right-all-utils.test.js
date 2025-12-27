import takeRightAll from './array-take-right-all-utils';

describe('takeRightAll', () => {
  it('should return the last N elements of an array', () => {
    expect(takeRightAll([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
  });

  it('should return the entire array if N is greater than or equal to array length', () => {
    expect(takeRightAll([1, 2, 3], 5)).toEqual([1, 2, 3]);
    expect(takeRightAll([1, 2, 3], 3)).toEqual([1, 2, 3]);
  });

  it('should return an empty array if N is 0', () => {
    expect(takeRightAll([1, 2, 3], 0)).toEqual([]);
  });

  it('should return the last element if N is not provided (defaults to 1)', () => {
    expect(takeRightAll([1, 2, 3])).toEqual([3]);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(takeRightAll([])).toEqual([]);
  });

  it('should return an empty array if the input is not an array', () => {
    expect(takeRightAll(null, 2)).toEqual([]);
    expect(takeRightAll(undefined, 2)).toEqual([]);
    expect(takeRightAll('string', 2)).toEqual([]);
    expect(takeRightAll({}, 2)).toEqual([]);
  });

  it('should handle negative N values by treating them as 0', () => {
    expect(takeRightAll([1, 2, 3], -1)).toEqual([]);
  });
});