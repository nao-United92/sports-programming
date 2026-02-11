import { every } from './array-every-utils-new.js';

describe('every', () => {
  it('should return true if all elements satisfy the predicate', () => {
    const arr = [2, 4, 6];
    expect(every(arr, n => n % 2 === 0)).toBe(true);
  });

  it('should return false if any element does not satisfy the predicate', () => {
    const arr = [2, 3, 6];
    expect(every(arr, n => n % 2 === 0)).toBe(false);
  });

  it('should return true for an empty array', () => {
    expect(every([], n => n > 0)).toBe(true);
  });

  it('should return false for a non-array input', () => {
    expect(every(null, n => n > 0)).toBe(false);
    expect(every(undefined, n => n > 0)).toBe(false);
    expect(every("string", n => n > 0)).toBe(false);
    expect(every({}, n => n > 0)).toBe(false);
  });

  it('should pass index and array to the predicate function', () => {
    const arr = [1, 2, 3];
    const predicate = jest.fn((val, idx, array) => {
      expect(array).toBe(arr);
      return val === idx + 1;
    });
    expect(every(arr, predicate)).toBe(true);
    expect(predicate).toHaveBeenCalledTimes(3);
  });
});
