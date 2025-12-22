import { findLast } from './array-find-last-utils';

describe('findLast', () => {
  it('should find the last even number', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(findLast(arr, (n) => n % 2 === 0)).toBe(6);
  });

  it('should return undefined if no element is found', () => {
    const arr = [1, 3, 5];
    expect(findLast(arr, (n) => n % 2 === 0)).toBeUndefined();
  });

  it('should handle an empty array', () => {
    expect(findLast([], (n) => n > 0)).toBeUndefined();
  });

  it('should handle non-array inputs', () => {
    expect(findLast(null, (n) => n > 0)).toBeUndefined();
    expect(findLast(undefined, (n) => n > 0)).toBeUndefined();
    expect(findLast({}, (n) => n > 0)).toBeUndefined();
  });
});
