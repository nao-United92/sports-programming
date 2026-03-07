const valueToPercent = require('./math-value-to-percent');

describe('valueToPercent', () => {
  test('calculates 40 is what percent of 200', () => {
    expect(valueToPercent(40, 200)).toBe(20);
  });

  test('calculates 50 is what percent of 100', () => {
    expect(valueToPercent(50, 100)).toBe(50);
  });

  test('returns 0 if total is 0', () => {
    expect(valueToPercent(50, 0)).toBe(0);
  });
});
