import { inRange, random, formatNumberWithCommas } from './number-utils.js';

describe('inRange', () => {
  test('should return true if the number is in the range', () => {
    expect(inRange(3, 2, 4)).toBe(true);
    expect(inRange(4, 8)).toBe(true);
    expect(inRange(4, 2, 8)).toBe(true);
    expect(inRange(2, 2, 8)).toBe(true);
  });

  test('should return false if the number is not in the range', () => {
    expect(inRange(1, 2, 4)).toBe(false);
    expect(inRange(8, 4)).toBe(false);
    expect(inRange(8, 2, 8)).toBe(false);
  });
});

describe('random', () => {
  test('should return a random integer between two numbers', () => {
    const result = random(1, 10);
    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  test('should return a random float between two numbers', () => {
    const result = random(1.5, 9.5, true);
    expect(result).toBeGreaterThanOrEqual(1.5);
    expect(result).toBeLessThanOrEqual(9.5);
  });

  test('should work with a single argument', () => {
    const result = random(5);
    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(5);
  });
});

describe('formatNumberWithCommas', () => {
  test('should format a positive integer with commas', () => {
    expect(formatNumberWithCommas(1000)).toBe('1,000');
    expect(formatNumberWithCommas(1234567)).toBe('1,234,567');
  });

  test('should format a negative integer with commas', () => {
    expect(formatNumberWithCommas(-1000)).toBe('-1,000');
    expect(formatNumberWithCommas(-1234567)).toBe('-1,234,567');
  });

  test('should format a floating-point number with commas', () => {
    expect(formatNumberWithCommas(1234.56)).toBe('1,234.56');
    expect(formatNumberWithCommas(-1234.56)).toBe('-1,234.56');
  });

  test('should handle numbers less than 1000 without commas', () => {
    expect(formatNumberWithCommas(123)).toBe('123');
    expect(formatNumberWithCommas(-123)).toBe('-123');
  });

  test('should handle zero', () => {
    expect(formatNumberWithCommas(0)).toBe('0');
  });

  test('should handle NaN', () => {
    expect(formatNumberWithCommas(NaN)).toBe('NaN');
  });

  test('should handle non-numeric input', () => {
    expect(formatNumberWithCommas('abc')).toBe('abc');
    expect(formatNumberWithCommas(null)).toBe('null');
    expect(formatNumberWithCommas(undefined)).toBe('undefined');
  });
});
