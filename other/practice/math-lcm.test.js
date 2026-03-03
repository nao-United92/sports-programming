const lcm = require('./math-lcm');

describe('math-lcm', () => {
  test('computes LCM of 12 and 18', () => {
    expect(lcm(12, 18)).toBe(36);
  });

  test('computes LCM of 5 and 7', () => {
    expect(lcm(5, 7)).toBe(35);
  });

  test('handles zero values', () => {
    expect(lcm(0, 5)).toBe(0);
    expect(lcm(5, 0)).toBe(0);
  });

  test('handles negative values', () => {
    expect(lcm(-12, 18)).toBe(36);
    expect(lcm(12, -18)).toBe(36);
  });
});
