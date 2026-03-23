import { lcm } from './math-lcm.js';

describe('lcm', () => {
  test('should find LCM of two positive integers', () => {
    expect(lcm(12, 15)).toBe(60);
  });

  test('should find LCM when one number is 0', () => {
    expect(lcm(10, 0)).toBe(0);
    expect(lcm(0, 5)).toBe(0);
  });

  test('should handle negative numbers', () => {
    expect(lcm(-12, 15)).toBe(60);
  });

  test('should return NaN for non-integers', () => {
    expect(lcm(12.5, 15)).toBe(NaN);
  });
});
