import { lcm } from './math-lcm';

describe('lcm', () => {
  test('calculates the least common multiple of two numbers', () => {
    expect(lcm(12, 18)).toBe(36);
    expect(lcm(8, 12)).toBe(24);
    expect(lcm(17, 13)).toBe(221);
  });

  test('handles negative numbers', () => {
    expect(lcm(-12, 18)).toBe(36);
    expect(lcm(12, -18)).toBe(36);
  });

  test('handles zero', () => {
    expect(lcm(0, 5)).toBe(0);
    expect(lcm(5, 0)).toBe(0);
  });
});
