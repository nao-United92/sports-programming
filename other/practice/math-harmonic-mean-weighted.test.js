const harmonicMeanWeighted = require('./math-harmonic-mean-weighted');

describe('harmonicMeanWeighted', () => {
  test('calculates weighted harmonic mean', () => {
    expect(harmonicMeanWeighted([1, 2, 4], [1, 2, 1])).toBeCloseTo(1.777778, 6); // 4 / (1/1 + 2/2 + 1/4) = 4 / 2.25 = 1.7777...
  });

  test('returns normal harmonic mean when weights are equal', () => {
    expect(harmonicMeanWeighted([1, 2], [1, 1])).toBeCloseTo(1.333333, 6);
  });

  test('throws error for unequal lengths', () => {
    expect(() => harmonicMeanWeighted([1], [1, 2])).toThrow();
  });

  test('throws error for zero values', () => {
    expect(() => harmonicMeanWeighted([0], [1])).toThrow('Values must be non-zero');
  });
});
