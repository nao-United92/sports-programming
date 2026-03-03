const isPrime = require('./math-is-prime');

describe('math-is-prime', () => {
  test('returns true for prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(19)).toBe(true);
    expect(isPrime(23)).toBe(true);
    expect(isPrime(29)).toBe(true);
  });

  test('returns false for non-prime numbers', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(15)).toBe(false);
    expect(isPrime(21)).toBe(false);
    expect(isPrime(25)).toBe(false);
    expect(isPrime(27)).toBe(false);
  });

  test('handles zero and negative numbers', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(-7)).toBe(false);
  });
});
