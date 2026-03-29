import { gcd } from './math-gcd.js';
describe('gcd', () => {
  it('should return the greatest common divisor', () => {
    expect(gcd(48, 18)).toBe(6);
    expect(gcd(7, 13)).toBe(1);
  });
});
