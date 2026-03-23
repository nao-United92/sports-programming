import { isPrime } from './math-isPrime.js';

describe('isPrime', () => {
  test('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(97)).toBe(true);
  });

  test('should return false for composite numbers', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(100)).toBe(false);
  });

  test('should return false for 1 and numbers <= 0', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-5)).toBe(false);
  });
  
  test('should return false for non-integers', () => {
      expect(isPrime(2.5)).toBe(false);
  });
});
