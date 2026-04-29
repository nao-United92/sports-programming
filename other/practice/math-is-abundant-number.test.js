import { isAbundantNumber } from './math-is-abundant-number';

describe('isAbundantNumber', () => {
  test('should return true for Abundant numbers', () => {
    expect(isAbundantNumber(12)).toBe(true); // 1+2+3+4+6 = 16 > 12
    expect(isAbundantNumber(18)).toBe(true); // 1+2+3+6+9 = 21 > 18
    expect(isAbundantNumber(20)).toBe(true); // 1+2+4+5+10 = 22 > 20
  });

  test('should return false for non-Abundant numbers', () => {
    expect(isAbundantNumber(11)).toBe(false); // 1 < 11
    expect(isAbundantNumber(6)).toBe(false); // 1+2+3 = 6 (Perfect, not Abundant)
  });
});
