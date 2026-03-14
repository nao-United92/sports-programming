const standardDeviationPopulation = require('./math-standard-deviation-population');

describe('standardDeviationPopulation', () => {
  test('calculates population standard deviation', () => {
    expect(standardDeviationPopulation([10, 2, 38, 23, 38, 23, 21])).toBeCloseTo(12.30, 2);
  });

  test('returns 0 for single element', () => {
    expect(standardDeviationPopulation([10])).toBe(0);
  });

  test('returns 0 for empty array', () => {
    expect(standardDeviationPopulation([])).toBe(0);
  });

  test('handles zero variance', () => {
    expect(standardDeviationPopulation([5, 5, 5])).toBe(0);
  });
});
