import { isStrictlyDecreasing } from './array-is-strictly-decreasing';

describe('isStrictlyDecreasing', () => {
  test('should return true for strictly decreasing', () => {
    expect(isStrictlyDecreasing([3, 2, 1])).toBe(true);
  });

  test('should return false for non-strictly decreasing', () => {
    expect(isStrictlyDecreasing([3, 2, 2, 1])).toBe(false);
  });
});
