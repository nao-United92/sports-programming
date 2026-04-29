import { isDeficientNumber } from './math-is-deficient-number';

describe('isDeficientNumber', () => {
  test('should return true for Deficient numbers', () => {
    expect(isDeficientNumber(10)).toBe(true); // 1+2+5 = 8 < 10
    expect(isDeficientNumber(15)).toBe(true); // 1+3+5 = 9 < 15
    expect(isDeficientNumber(1)).toBe(true); // 0 < 1
  });

  test('should return false for non-Deficient numbers', () => {
    expect(isDeficientNumber(12)).toBe(false);
    expect(isDeficientNumber(6)).toBe(false);
  });
});
