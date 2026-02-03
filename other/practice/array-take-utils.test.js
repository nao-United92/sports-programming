import { take } from './array-take-utils.js';

describe('take', () => {
  it('should take the first n elements from an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(take(arr, 2)).toEqual([1, 2]);
  });

  it('should take the first element if n is not provided', () => {
    const arr = [1, 2, 3];
    expect(take(arr)).toEqual([1]);
  });

  it('should return an empty array if n is 0', () => {
    const arr = [1, 2, 3];
    expect(take(arr, 0)).toEqual([]);
  });

  it('should return the whole array if n is greater than the array length', () => {
    const arr = [1, 2, 3];
    expect(take(arr, 5)).toEqual([1, 2, 3]);
  });

  it('should handle an empty array', () => {
    expect(take([], 2)).toEqual([]);
  });
});
