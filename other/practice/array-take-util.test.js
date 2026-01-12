import { take } from './array-take-util';

describe('take', () => {
  it('should take n elements from the beginning of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(take(arr, 3)).toEqual([1, 2, 3]);
  });

  it('should take 1 element by default', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(take(arr)).toEqual([1]);
  });

  it('should return an empty array if n is 0', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(take(arr, 0)).toEqual([]);
  });

  it('should return the whole array if n is greater than the array length', () => {
    const arr = [1, 2, 3];
    expect(take(arr, 5)).toEqual([1, 2, 3]);
  });

  it('should return an empty array if the input is not an array', () => {
    expect(take(null, 3)).toEqual([]);
    expect(take(undefined, 3)).toEqual([]);
  });
});
