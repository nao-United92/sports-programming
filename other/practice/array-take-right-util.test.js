import { takeRight } from './array-take-right-util';

describe('takeRight', () => {
  it('should take n elements from the end of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(takeRight(arr, 3)).toEqual([3, 4, 5]);
  });

  it('should take 1 element by default', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(takeRight(arr)).toEqual([5]);
  });

  it('should return an empty array if n is 0', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(takeRight(arr, 0)).toEqual([]);
  });

  it('should return the whole array if n is greater than the array length', () => {
    const arr = [1, 2, 3];
    expect(takeRight(arr, 5)).toEqual([1, 2, 3]);
  });

  it('should return an empty array if the input is not an array', () => {
    expect(takeRight(null, 3)).toEqual([]);
    expect(takeRight(undefined, 3)).toEqual([]);
  });
});
