const { round } = require('./number-round-utils');

describe('round', () => {
  test('should round a number to the default precision (0)', () => {
    expect(round(4.006)).toBe(4);
  });

  test('should round a number to the specified precision', () => {
    expect(round(4.006, 2)).toBe(4.01);
  });

  test('should handle negative precision', () => {
    expect(round(4060, -2)).toBe(4100);
  });

  test('should handle zero', () => {
    expect(round(0, 2)).toBe(0);
  });

  test('should handle negative numbers', () => {
    expect(round(-4.006, 2)).toBe(-4.01);
  });

  test('should handle numbers without decimals', () => {
    expect(round(5, 2)).toBe(5);
  });
});
