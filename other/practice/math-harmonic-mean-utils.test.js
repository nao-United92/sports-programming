const harmonicMean = require('./math-harmonic-mean-utils');

describe('harmonicMean', () => {
  test('calculates harmonic mean of 1, 4, 4', () => {
    expect(harmonicMean([1, 4, 4])).toBe(2);
  });

  test('calculates harmonic mean of 1, 2, 4', () => {
    expect(harmonicMean([1, 2, 4])).toBeCloseTo(1.714, 3);
  });

  test('returns 0 if any number is zero', () => {
    expect(harmonicMean([1, 0, 4])).toBe(0);
  });
});
