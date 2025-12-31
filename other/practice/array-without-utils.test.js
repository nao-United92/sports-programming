import { without } from './array-without-utils.js';

describe('without', () => {
  it('should return a new array excluding specified values', () => {
    expect(without([1, 2, 3, 1, 4], 1, 4)).toEqual([2, 3]);
  });

  it('should return the original array if no values are excluded', () => {
    expect(without([1, 2, 3], 4, 5)).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(without([], 1, 2)).toEqual([]);
  });

  it('should handle excluding values not present in the array', () => {
    expect(without([1, 2, 3], 4)).toEqual([1, 2, 3]);
  });

  it('should handle no values to exclude', () => {
    expect(without([1, 2, 3])).toEqual([1, 2, 3]);
  });
});