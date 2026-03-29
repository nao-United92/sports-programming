import { isPrime } from './math-is-prime.js';
describe('isPrime', () => {
  it('should check if number is prime', () => {
    expect(isPrime(7)).toBe(true);
    expect(isPrime(10)).toBe(false);
  });
});
