const lcm = require('./nebula-math-lcm');

describe('nebula-math-lcm', () => {
  test('should return lcm of two positive integers', () => {
    expect(lcm(4, 6)).toBe(12);
    expect(lcm(12, 15)).toBe(60);
    expect(lcm(7, 5)).toBe(35);
  });

  test('should handle zero', () => {
    expect(lcm(0, 5)).toBe(0);
    expect(lcm(5, 0)).toBe(0);
  });

  test('should handle negative numbers', () => {
    expect(lcm(-4, 6)).toBe(12);
    expect(lcm(4, -6)).toBe(12);
    expect(lcm(-4, -6)).toBe(12);
  });

  test('should throw error for non-number input', () => {
    expect(() => lcm('a', 5)).toThrow('Input must be numbers');
  });
});
