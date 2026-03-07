const standardDeviation = require('./math-standard-deviation-utils');

describe('standardDeviation', () => {
  test('calculates sample standard deviation', () => {
    const data = [10, 2, 38, 23, 38, 23, 21];
    expect(standardDeviation(data)).toBeCloseTo(13.28, 2);
  });

  test('calculates population standard deviation', () => {
    const data = [10, 2, 38, 23, 38, 23, 21];
    expect(standardDeviation(data, true)).toBeCloseTo(12.30, 2);
  });

  test('returns 0 for single element sample', () => {
    expect(standardDeviation([10])).toBe(0);
  });

  test('returns 0 for empty array', () => {
    expect(standardDeviation([])).toBe(0);
  });
});
