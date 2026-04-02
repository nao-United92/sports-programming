const { combinationsCount } = require('./math-combinations-count-utils');

describe('combinationsCount', () => {
  test('calculates combinations correctly', () => {
    expect(combinationsCount(5, 2)).toBe(10);
    expect(combinationsCount(10, 3)).toBe(120);
    expect(combinationsCount(5, 0)).toBe(1);
    expect(combinationsCount(5, 5)).toBe(1);
    expect(combinationsCount(5, 1)).toBe(5);
  });

  test('handles edge cases', () => {
    expect(combinationsCount(5, 6)).toBe(0);
    expect(combinationsCount(5, -1)).toBe(0);
  });

  test('handles larger numbers correctly', () => {
    expect(combinationsCount(20, 10)).toBe(184756);
  });
});
