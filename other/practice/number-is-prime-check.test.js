
const numberIsPrimeCheck = require('./number-is-prime-check');

describe('numberIsPrimeCheck', () => {
  test('returns true for primes', () => {
    expect(numberIsPrimeCheck(2)).toBe(true);
    expect(numberIsPrimeCheck(3)).toBe(true);
    expect(numberIsPrimeCheck(5)).toBe(true);
    expect(numberIsPrimeCheck(7)).toBe(true);
    expect(numberIsPrimeCheck(11)).toBe(true);
    expect(numberIsPrimeCheck(13)).toBe(true);
  });

  test('returns false for non-primes', () => {
    expect(numberIsPrimeCheck(1)).toBe(false);
    expect(numberIsPrimeCheck(4)).toBe(false);
    expect(numberIsPrimeCheck(6)).toBe(false);
    expect(numberIsPrimeCheck(9)).toBe(false);
    expect(numberIsPrimeCheck(10)).toBe(false);
  });

  test('returns false for negative numbers', () => {
    expect(numberIsPrimeCheck(-1)).toBe(false);
    expect(numberIsPrimeCheck(-5)).toBe(false);
  });
});
