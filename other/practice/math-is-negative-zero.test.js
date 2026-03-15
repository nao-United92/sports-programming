import { isNegativeZero } from './math-is-negative-zero';

describe('isNegativeZero', () => {
  test('returns true for -0', () => {
    expect(isNegativeZero(-0)).toBe(true);
  });

  test('returns false for 0', () => {
    expect(isNegativeZero(0)).toBe(false);
  });

  test('returns false for other numbers', () => {
    expect(isNegativeZero(5)).toBe(false);
    expect(isNegativeZero(-5)).toBe(false);
  });
});
