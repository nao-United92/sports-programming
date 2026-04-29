import { isPositive } from './math-is-positive';

describe('isPositive', () => {
  test('should return true for positive numbers', () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(100)).toBe(true);
  });

  test('should return false for non-positive numbers', () => {
    expect(isPositive(0)).toBe(false);
    expect(isPositive(-1)).toBe(false);
  });
});
