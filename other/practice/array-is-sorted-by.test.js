import { isSortedBy } from './array-is-sorted-by';

describe('isSortedBy', () => {
  test('should return true if sorted by default (numbers)', () => {
    expect(isSortedBy([1, 2, 2, 3])).toBe(true);
  });

  test('should return false if not sorted', () => {
    expect(isSortedBy([1, 3, 2])).toBe(false);
  });

  test('should handle custom comparator', () => {
    const desc = (a, b) => b - a;
    expect(isSortedBy([3, 2, 1], desc)).toBe(true);
    expect(isSortedBy([1, 2, 3], desc)).toBe(false);
  });
});
