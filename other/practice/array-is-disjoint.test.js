import { isDisjoint } from './array-is-disjoint';

describe('isDisjoint', () => {
  test('should return true if disjoint', () => {
    expect(isDisjoint([1, 2], [3, 4])).toBe(true);
  });

  test('should return false if not disjoint', () => {
    expect(isDisjoint([1, 2], [2, 3])).toBe(false);
  });
});
