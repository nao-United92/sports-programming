const { roundToDecimalPlace } = require('./number-round-to-decimal');

describe('roundToDecimalPlace', () => {
  test('should round a number to the specified decimal places', () => {
    expect(roundToDecimalPlace(10.12345, 2)).toBe(10.12);
    expect(roundToDecimalPlace(10.128, 2)).toBe(10.13);
    expect(roundToDecimalPlace(10.5, 0)).toBe(11);
    expect(roundToDecimalPlace(10.4, 0)).toBe(10);
  });

  test('should handle negative numbers correctly', () => {
    expect(roundToDecimalPlace(-10.12345, 2)).toBe(-10.12);
    expect(roundToDecimalPlace(-10.128, 2)).toBe(-10.13);
    expect(roundToDecimalPlace(-10.5, 0)).toBe(-10); // Math.round rounds -0.5 to -0
    expect(roundToDecimalPlace(-10.4, 0)).toBe(-10);
  });

  test('should handle zero decimal places as default', () => {
    expect(roundToDecimalPlace(10.55)).toBe(11);
    expect(roundToDecimalPlace(10.45)).toBe(10);
  });

  test('should handle zero value', () => {
    expect(roundToDecimalPlace(0, 2)).toBe(0);
  });

  test('should handle already rounded numbers', () => {
    expect(roundToDecimalPlace(10.12, 2)).toBe(10.12);
  });

  test('should throw TypeError if num is not a number', () => {
    expect(() => roundToDecimalPlace('10.12', 2)).toThrow(TypeError);
    expect(() => roundToDecimalPlace(null, 2)).toThrow(TypeError);
    expect(() => roundToDecimalPlace(undefined, 2)).toThrow(TypeError);
    expect(() => roundToDecimalPlace({}, 2)).toThrow(TypeError);
  });

  test('should throw TypeError if decimalPlaces is not a non-negative integer', () => {
    expect(() => roundToDecimalPlace(10.12, '2')).toThrow(TypeError);
    expect(() => roundToDecimalPlace(10.12, -1)).toThrow(TypeError);
    expect(() => roundToDecimalPlace(10.12, 1.5)).toThrow(TypeError);
    expect(() => roundToDecimalPlace(10.12, null)).toThrow(TypeError);
    expect(() => roundToDecimalPlace(10.12, undefined)).toThrow(TypeError);
  });
});
