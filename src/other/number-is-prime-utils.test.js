const { isPrime } = require('./number-is-prime-utils.js');

describe('isPrime', () => {
  test('should return false for numbers less than or equal to 1', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(-5)).toBe(false);
  });

  test('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(97)).toBe(true);
  });

  test('should return false for non-prime numbers', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(100)).toBe(false);
  });

  test('should handle larger numbers', () => {
    expect(isPrime(7919)).toBe(true); // 1000th prime
    expect(isPrime(7920)).toBe(false);
  });
});
