import { lcm } from './math-lcm-utils.js';

describe('lcm', () => {
  test('should return the correct lcm for two positive integers', () => {
    expect(lcm(12, 18)).toBe(36);
    expect(lcm(7, 5)).toBe(35);
  });

  test('should return 0 if one of the numbers is 0', () => {
    expect(lcm(12, 0)).toBe(0);
    expect(lcm(0, 12)).toBe(0);
  });

  test('should work with one as one of the numbers', () => {
    expect(lcm(1, 5)).toBe(5);
    expect(lcm(5, 1)).toBe(5);
  });

  test('should work with identical numbers', () => {
    expect(lcm(7, 7)).toBe(7);
  });
});
