import { isDisariumNumber } from './math-is-disarium-number';

describe('isDisariumNumber', () => {
  test('should return true for Disarium numbers', () => {
    expect(isDisariumNumber(89)).toBe(true); // 8^1 + 9^2 = 8 + 81 = 89
    expect(isDisariumNumber(135)).toBe(true); // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
    expect(isDisariumNumber(175)).toBe(true); // 1^1 + 7^2 + 5^3 = 1 + 49 + 125 = 175
    expect(isDisariumNumber(1)).toBe(true);
  });

  test('should return false for non-Disarium numbers', () => {
    expect(isDisariumNumber(88)).toBe(false);
    expect(isDisariumNumber(100)).toBe(false);
  });
});
