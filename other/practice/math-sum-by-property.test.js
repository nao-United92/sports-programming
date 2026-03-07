const sumByProperty = require('./math-sum-by-property');

describe('sumByProperty', () => {
  test('calculates the sum of a specific property across objects', () => {
    const data = [{ a: 1 }, { a: 2 }, { a: 3 }];
    expect(sumByProperty(data, 'a')).toBe(6);
  });

  test('returns 0 for empty array', () => {
    expect(sumByProperty([], 'a')).toBe(0);
  });

  test('handles missing properties as 0', () => {
    const data = [{ a: 1 }, { b: 2 }];
    expect(sumByProperty(data, 'a')).toBe(1);
  });
});
