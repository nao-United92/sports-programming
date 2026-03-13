const getPrimeFactors = require('./math-prime-factors');

describe('getPrimeFactors', () => {
  test('returns prime factors of a number', () => {
    expect(getPrimeFactors(12)).toEqual([2, 2, 3]);
    expect(getPrimeFactors(30)).toEqual([2, 3, 5]);
  });

  test('returns empty for 1 or less', () => {
    expect(getPrimeFactors(1)).toEqual([]);
    expect(getPrimeFactors(0)).toEqual([]);
  });

  test('handles prime numbers', () => {
    expect(getPrimeFactors(7)).toEqual([7]);
    expect(getPrimeFactors(13)).toEqual([13]);
  });

  test('handles large numbers', () => {
    expect(getPrimeFactors(100)).toEqual([2, 2, 5, 5]);
  });
});
