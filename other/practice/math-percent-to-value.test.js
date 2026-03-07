const percentToValue = require('./math-percent-to-value');

describe('percentToValue', () => {
  test('calculates 20% of 200', () => {
    expect(percentToValue(20, 200)).toBe(40);
  });

  test('calculates 50% of 100', () => {
    expect(percentToValue(50, 100)).toBe(50);
  });

  test('calculates 100% of 500', () => {
    expect(percentToValue(100, 500)).toBe(500);
  });
});
