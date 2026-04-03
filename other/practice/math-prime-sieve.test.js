const primeSieve = require('./math-prime-sieve');

describe('primeSieve', () => {
  test('returns primes up to n', () => {
    expect(primeSieve(10)).toEqual([2, 3, 5, 7]);
    expect(primeSieve(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    expect(primeSieve(2)).toEqual([2]);
    expect(primeSieve(1)).toEqual([]);
    expect(primeSieve(0)).toEqual([]);
  });

  test('returns correct number of primes for larger n', () => {
    expect(primeSieve(100).length).toBe(25);
  });
});
