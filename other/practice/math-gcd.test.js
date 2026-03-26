import { gcd } from './math-gcd.js';

describe('gcd', () => {
  it('should return the greatest common divisor of two numbers', () => {
    expect(gcd(8, 36)).toBe(4);
  });

  it('should return the greatest common divisor of multiple numbers', () => {
    expect(gcd(12, 18, 30)).toBe(6);
  });

  it('should handle zero correctly', () => {
    expect(gcd(0, 5)).toBe(5);
    expect(gcd(10, 0)).toBe(10);
  });
});
