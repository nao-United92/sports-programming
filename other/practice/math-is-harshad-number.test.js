import { isHarshadNumber } from './math-is-harshad-number';

describe('isHarshadNumber', () => {
  test('should return true for Harshad numbers', () => {
    expect(isHarshadNumber(18)).toBe(true); // 1 + 8 = 9, 18 / 9 = 2
    expect(isHarshadNumber(21)).toBe(true); // 2 + 1 = 3, 21 / 3 = 7
    expect(isHarshadNumber(24)).toBe(true); // 2 + 4 = 6, 24 / 6 = 4
    expect(isHarshadNumber(200)).toBe(true); // 2 + 0 + 0 = 2, 200 / 2 = 100
  });

  test('should return false for non-Harshad numbers', () => {
    expect(isHarshadNumber(19)).toBe(false); // 1 + 9 = 10, 19 % 10 != 0
    expect(isHarshadNumber(22)).toBe(false);
  });

  test('should return false for numbers <= 0', () => {
    expect(isHarshadNumber(0)).toBe(false);
    expect(isHarshadNumber(-1)).toBe(false);
  });
});
