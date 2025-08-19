const { roundToDecimal } = require('./number-utils.js');

describe('roundToDecimal', () => {
  test('should round a number to the specified decimal places', () => {
    expect(roundToDecimal(123.456, 2)).toBe(123.46);
    expect(roundToDecimal(123.454, 2)).toBe(123.45);
    expect(roundToDecimal(123.455, 2)).toBe(123.46); // Standard rounding (round half up)
  });

  test('should round to zero decimal places', () => {
    expect(roundToDecimal(123.5, 0)).toBe(124);
    expect(roundToDecimal(123.4, 0)).toBe(123);
  });

  test('should handle negative numbers', () => {
    expect(roundToDecimal(-123.456, 2)).toBe(-123.46);
    expect(roundToDecimal(-123.454, 2)).toBe(-123.45);
  });

  test('should return NaN for non-numeric input', () => {
    expect(roundToDecimal('abc', 2)).toBeNaN();
    expect(roundToDecimal(null, 2)).toBeNaN();
    expect(roundToDecimal(undefined, 2)).toBeNaN();
  });

  test('should return the number itself if decimalPlaces is negative', () => {
    expect(roundToDecimal(123.456, -1)).toBe(123.456);
  });

  test('should handle numbers with fewer decimal places than specified', () => {
    expect(roundToDecimal(123.4, 2)).toBe(123.4);
    expect(roundToDecimal(123, 2)).toBe(123);
  });
});