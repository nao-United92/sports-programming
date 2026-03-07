const geometricMean = require('./math-geometric-mean-utils');

describe('geometricMean', () => {
  test('calculates geometric mean of 4 and 9', () => {
    expect(geometricMean([4, 9])).toBe(6);
  });

  test('calculates geometric mean of 1, 3, 9', () => {
    expect(geometricMean([1, 3, 9])).toBeCloseTo(3, 5);
  });

  test('returns 0 if any number is zero or less', () => {
    expect(geometricMean([1, 0, 9])).toBe(0);
    expect(geometricMean([1, -1, 9])).toBe(0);
  });
});
