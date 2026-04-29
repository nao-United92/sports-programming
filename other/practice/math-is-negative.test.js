import { isNegative } from './math-is-negative';

describe('isNegative', () => {
  test('should return true for negative numbers', () => {
    expect(isNegative(-1)).toBe(true);
    expect(isNegative(-100)).toBe(true);
  });

  test('should return false for non-negative numbers', () => {
    expect(isNegative(0)).toBe(false);
    expect(isNegative(1)).toBe(false);
  });
});
