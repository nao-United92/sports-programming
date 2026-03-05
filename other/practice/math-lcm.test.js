const lcm = require('./math-lcm');

describe('lcm', () => {
  test('calculates the LCM of two positive numbers', () => {
    expect(lcm(12, 18)).toBe(36);
    expect(lcm(5, 7)).toBe(35);
  });

  test('returns 0 if either number is zero', () => {
    expect(lcm(12, 0)).toBe(0);
    expect(lcm(0, 0)).toBe(0);
  });

  test('handles negative numbers', () => {
    expect(lcm(-12, 18)).toBe(36);
  });
});
