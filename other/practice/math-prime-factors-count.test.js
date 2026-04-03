const mathPrimeFactorsCount = require('./math-prime-factors-count');

describe('mathPrimeFactorsCount', () => {
  test('counts factors for 12 (2^2 * 3)', () => {
    expect(mathPrimeFactorsCount(12)).toEqual({ distinct: 2, total: 3 });
  });

  test('counts factors for 30 (2 * 3 * 5)', () => {
    expect(mathPrimeFactorsCount(30)).toEqual({ distinct: 3, total: 3 });
  });

  test('counts factors for a prime number 17', () => {
    expect(mathPrimeFactorsCount(17)).toEqual({ distinct: 1, total: 1 });
  });

  test('counts factors for 1', () => {
    expect(mathPrimeFactorsCount(1)).toEqual({ distinct: 0, total: 0 });
  });

  test('counts factors for 60 (2^2 * 3 * 5)', () => {
    expect(mathPrimeFactorsCount(60)).toEqual({ distinct: 3, total: 4 });
  });
});
