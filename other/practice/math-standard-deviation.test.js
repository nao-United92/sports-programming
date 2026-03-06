const { variance, standardDeviation } = require('./math-standard-deviation');

describe('math-standard-deviation', () => {
  const data = [2, 4, 4, 4, 5, 5, 7, 9];
  // mean = (2+4+4+4+5+5+7+9)/8 = 40/8 = 5
  // variance = ((2-5)^2 + (4-5)^2*3 + (5-5)^2*2 + (7-5)^2 + (9-5)^2)/8
  // variance = (9 + 1*3 + 0 + 4 + 16)/8 = 32/8 = 4
  // stdDev = sqrt(4) = 2

  test('calculates variance correctly', () => {
    expect(variance(data)).toBe(4);
  });

  test('calculates standard deviation correctly', () => {
    expect(standardDeviation(data)).toBe(2);
  });

  test('returns 0 for empty array', () => {
    expect(variance([])).toBe(0);
    expect(standardDeviation([])).toBe(0);
  });

  test('returns 0 for single element array', () => {
    expect(variance([10])).toBe(0);
    expect(standardDeviation([10])).toBe(0);
  });
});
