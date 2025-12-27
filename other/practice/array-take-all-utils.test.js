import takeAll from './array-take-all-utils';

describe('takeAll', () => {
  it('should return the first N elements of an array', () => {
    expect(takeAll([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
  });

  it('should return the entire array if N is greater than or equal to array length', () => {
    expect(takeAll([1, 2, 3], 5)).toEqual([1, 2, 3]);
    expect(takeAll([1, 2, 3], 3)).toEqual([1, 2, 3]);
  });

  it('should return an empty array if N is 0', () => {
    expect(takeAll([1, 2, 3], 0)).toEqual([]);
  });

  it('should return the first element if N is not provided (defaults to 1)', () => {
    expect(takeAll([1, 2, 3])).toEqual([1]);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(takeAll([])).toEqual([]);
  });

  it('should return an empty array if the input is not an array', () => {
    expect(takeAll(null, 2)).toEqual([]);
    expect(takeAll(undefined, 2)).toEqual([]);
    expect(takeAll('string', 2)).toEqual([]);
    expect(takeAll({}, 2)).toEqual([]);
  });

  it('should handle negative N values by treating them as 0', () => {
    expect(takeAll([1, 2, 3], -1)).toEqual([]);
  });
});