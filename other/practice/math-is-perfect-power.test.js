import { isPerfectPower } from './math-is-perfect-power';

describe('isPerfectPower', () => {
  test('should return true for perfect powers', () => {
    expect(isPerfectPower(4)).toBe(true); // 2^2
    expect(isPerfectPower(8)).toBe(true); // 2^3
    expect(isPerfectPower(9)).toBe(true); // 3^2
    expect(isPerfectPower(16)).toBe(true); // 2^4 or 4^2
    expect(isPerfectPower(25)).toBe(true); // 5^2
    expect(isPerfectPower(27)).toBe(true); // 3^3
    expect(isPerfectPower(32)).toBe(true); // 2^5
    expect(isPerfectPower(100)).toBe(true); // 10^2
  });

  test('should return false for non-perfect powers', () => {
    expect(isPerfectPower(2)).toBe(false);
    expect(isPerfectPower(3)).toBe(false);
    expect(isPerfectPower(5)).toBe(false);
    expect(isPerfectPower(6)).toBe(false);
    expect(isPerfectPower(7)).toBe(false);
    expect(isPerfectPower(10)).toBe(false);
    expect(isPerfectPower(12)).toBe(false);
  });

  test('should return false for numbers <= 1', () => {
    expect(isPerfectPower(1)).toBe(false);
    expect(isPerfectPower(0)).toBe(false);
    expect(isPerfectPower(-8)).toBe(false);
  });
});
