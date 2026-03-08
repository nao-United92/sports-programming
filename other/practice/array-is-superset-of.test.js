import { isSupersetOf } from './array-is-superset-of';

describe('isSupersetOf', () => {
  test('should return true for actual superset', () => {
    expect(isSupersetOf([1, 2, 3], [1, 2])).toBe(true);
  });

  test('should return false if not superset', () => {
    expect(isSupersetOf([1, 2], [1, 3])).toBe(false);
  });
});
