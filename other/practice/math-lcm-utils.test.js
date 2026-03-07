const lcm = require('./math-lcm-utils');

describe('lcm', () => {
  test('calculates LCM of 4 and 6', () => {
    expect(lcm(4, 6)).toBe(12);
  });

  test('calculates LCM of 5 and 7', () => {
    expect(lcm(5, 7)).toBe(35);
  });

  test('returns 0 if one of the numbers is 0', () => {
    expect(lcm(0, 10)).toBe(0);
  });

  test('handles negative numbers', () => {
    expect(lcm(-4, 6)).toBe(12);
  });
});
