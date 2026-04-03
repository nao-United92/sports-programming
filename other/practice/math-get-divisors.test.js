const getDivisors = require('./math-get-divisors');

describe('getDivisors', () => {
  test('returns all divisors for a positive number', () => {
    expect(getDivisors(12)).toEqual([1, 2, 3, 4, 6, 12]);
    expect(getDivisors(1)).toEqual([1]);
    expect(getDivisors(7)).toEqual([1, 7]);
    expect(getDivisors(100)).toEqual([1, 2, 4, 5, 10, 20, 25, 50, 100]);
  });

  test('returns an empty array for non-positive numbers', () => {
    expect(getDivisors(0)).toEqual([]);
    expect(getDivisors(-5)).toEqual([]);
  });
});
