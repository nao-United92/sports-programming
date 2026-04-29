import { isPerfectSquareFast } from './math-is-perfect-square-fast';

describe('isPerfectSquareFast', () => {
  test('should return true for perfect squares', () => {
    expect(isPerfectSquareFast(0)).toBe(true);
    expect(isPerfectSquareFast(1)).toBe(true);
    expect(isPerfectSquareFast(4)).toBe(true);
    expect(isPerfectSquareFast(9)).toBe(true);
    expect(isPerfectSquareFast(16)).toBe(true);
    expect(isPerfectSquareFast(25)).toBe(true);
  });

  test('should return false for non-perfect squares', () => {
    expect(isPerfectSquareFast(2)).toBe(false);
    expect(isPerfectSquareFast(3)).toBe(false);
    expect(isPerfectSquareFast(5)).toBe(false);
    expect(isPerfectSquareFast(10)).toBe(false);
    expect(isPerfectSquareFast(26)).toBe(false);
  });
});
