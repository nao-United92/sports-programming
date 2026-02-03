import { takeRight } from './array-take-right-utils.js';

describe('takeRight', () => {
  it('should take the last n elements from an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(takeRight(arr, 2)).toEqual([4, 5]);
  });

  it('should take the last element if n is not provided', () => {
    const arr = [1, 2, 3];
    expect(takeRight(arr)).toEqual([3]);
  });

  it('should return an empty array if n is 0', () => {
    const arr = [1, 2, 3];
    expect(takeRight(arr, 0)).toEqual([]);
  });

  it('should return the whole array if n is greater than the array length', () => {
    const arr = [1, 2, 3];
    expect(takeRight(arr, 5)).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(takeRight([], 2)).toEqual([]);
  });
});
