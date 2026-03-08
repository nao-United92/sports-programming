import { isMonotonic } from './array-is-monotonic';

describe('isMonotonic', () => {
  test('should return true for monotonic arrays', () => {
    expect(isMonotonic([1, 2, 2, 3])).toBe(true);
    expect(isMonotonic([3, 2, 1])).toBe(true);
    expect(isMonotonic([1, 1, 1])).toBe(true);
  });

  test('should return false for non-monotonic arrays', () => {
    expect(isMonotonic([1, 3, 2])).toBe(false);
  });
});
