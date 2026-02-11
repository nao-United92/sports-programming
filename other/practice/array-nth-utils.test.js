import { nth } from './array-nth-utils.js';

describe('nth', () => {
  const arr = [1, 2, 3, 4, 5];

  it('should return the element at a positive index', () => {
    expect(nth(arr, 0)).toBe(1);
    expect(nth(arr, 2)).toBe(3);
    expect(nth(arr, 4)).toBe(5);
  });

  it('should return the element at a negative index', () => {
    expect(nth(arr, -1)).toBe(5);
    expect(nth(arr, -3)).toBe(3);
    expect(nth(arr, -5)).toBe(1);
  });

  it('should return undefined for an out-of-bounds positive index', () => {
    expect(nth(arr, 5)).toBeUndefined();
    expect(nth(arr, 10)).toBeUndefined();
  });

  it('should return undefined for an out-of-bounds negative index', () => {
    expect(nth(arr, -6)).toBeUndefined();
    expect(nth(arr, -10)).toBeUndefined();
  });

  it('should return undefined for an empty array', () => {
    expect(nth([], 0)).toBeUndefined();
    expect(nth([], -1)).toBeUndefined();
  });

  it('should return undefined for a non-array input', () => {
    expect(nth(null, 0)).toBeUndefined();
    expect(nth(undefined, 0)).toBeUndefined();
    expect(nth("string", 0)).toBeUndefined();
    expect(nth({}, 0)).toBeUndefined();
  });

  it('should handle default index 0 if not provided', () => {
    expect(nth(arr)).toBe(1);
  });
});