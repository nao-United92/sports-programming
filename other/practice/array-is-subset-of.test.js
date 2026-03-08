import { isSubsetOf } from './array-is-subset-of';

describe('isSubsetOf', () => {
  test('should return true for actual subset', () => {
    expect(isSubsetOf([1, 2], [1, 2, 3])).toBe(true);
  });

  test('should return false if not subset', () => {
    expect(isSubsetOf([1, 4], [1, 2, 3])).toBe(false);
  });

  test('should return true for empty subset', () => {
    expect(isSubsetOf([], [1, 2])).toBe(true);
  });
});
