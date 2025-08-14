import { roundToDecimal } from './number-round-utils';

describe('roundToDecimal', () => {
  test('should round a number to the specified decimal places', () => {
    expect(roundToDecimal(123.456, 2)).toBe(123.46);
    expect(roundToDecimal(123.454, 2)).toBe(123.45);
    expect(roundToDecimal(123.455, 2)).toBe(123.46);
    expect(roundToDecimal(123.000, 2)).toBe(123.00);
  });

  test('should round to integer if decimalPlaces is 0 or not provided', () => {
    expect(roundToDecimal(123.456, 0)).toBe(123);
    expect(roundToDecimal(123.556, 0)).toBe(124);
    expect(roundToDecimal(123.456)).toBe(123);
  });

  test('should handle negative numbers', () => {
    expect(roundToDecimal(-123.456, 2)).toBe(-123.46);
    expect(roundToDecimal(-123.454, 2)).toBe(-123.45);
    expect(roundToDecimal(-123.556, 0)).toBe(-124);
  });

  test('should handle large numbers', () => {
    expect(roundToDecimal(123456789.123456, 3)).toBe(123456789.123);
  });

  test('should handle small numbers', () => {
    expect(roundToDecimal(0.00000123, 7)).toBe(0.0000012);
    expect(roundToDecimal(0.00000125, 7)).toBe(0.0000013);
  });

  test('should return NaN for non-numeric input', () => {
    expect(roundToDecimal('abc', 2)).toBeNaN();
    expect(roundToDecimal(null, 2)).toBeNaN();
    expect(roundToDecimal(undefined, 2)).toBeNaN();
    expect(roundToDecimal({}, 2)).toBeNaN();
  });

  test('should handle negative decimalPlaces (treat as 0)', () => {
    expect(roundToDecimal(123.456, -1)).toBe(123);
  });

  test('should handle non-integer decimalPlaces (treat as 0)', () => {
    expect(roundToDecimal(123.456, 1.5)).toBe(123);
  });
});
