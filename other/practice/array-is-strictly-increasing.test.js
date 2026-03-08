import { isStrictlyIncreasing } from './array-is-strictly-increasing';

describe('isStrictlyIncreasing', () => {
  test('should return true for strictly increasing', () => {
    expect(isStrictlyIncreasing([1, 2, 3])).toBe(true);
  });

  test('should return false for non-strictly increasing', () => {
    expect(isStrictlyIncreasing([1, 2, 2, 3])).toBe(false);
  });
});
