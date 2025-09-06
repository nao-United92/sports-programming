import { random, randomInt, formatNumberWithCommas, roundToDecimalPlaces } from './number-utils.js';

describe('random', () => {
  it('should generate a number within the specified range', () => {
    const result = random(1, 5);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThan(5);
  });

  it('should work with default values (0 to 1)', () => {
    const result = random();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(1);
  });
});

describe('randomInt', () => {
  it('should generate an integer within the specified range (inclusive)', () => {
    const result = randomInt(1, 10);
    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  it('should handle a small range', () => {
    const result = randomInt(5, 5);
    expect(result).toBe(5);
  });

  it('should generate numbers across the full range', () => {
    const results = new Set();
    for (let i = 0; i < 100; i++) {
      results.add(randomInt(1, 3));
    }
    expect(results.has(1)).toBe(true);
    expect(results.has(2)).toBe(true);
    expect(results.has(3)).toBe(true);
  });
});

describe('formatNumberWithCommas', () => {
  test('should format an integer with commas', () => {
    expect(formatNumberWithCommas(1000)).toBe('1,000');
    expect(formatNumberWithCommas(1234567)).toBe('1,234,567');
    expect(formatNumberWithCommas(100)).toBe('100');
  });

  test('should format a float with commas', () => {
    expect(formatNumberWithCommas(1234.56)).toBe('1,234.56');
    expect(formatNumberWithCommas(1234567.890)).toBe('1,234,567.89');
  });

  test('should handle negative numbers', () => {
    expect(formatNumberWithCommas(-1000)).toBe('-1,000');
    expect(formatNumberWithCommas(-1234567.89)).toBe('-1,234,567.89');
  });

  test('should throw error for non-number input', () => {
    expect(() => formatNumberWithCommas('abc')).toThrow('Expected a number');
    expect(() => formatNumberWithCommas(null)).toThrow('Expected a number');
    expect(() => formatNumberWithCommas(undefined)).toThrow('Expected a number');
  });
});

describe('roundToDecimalPlaces', () => {
  test('should round to specified decimal places', () => {
    expect(roundToDecimalPlaces(123.456, 2)).toBe(123.46);
    expect(roundToDecimalPlaces(123.456, 0)).toBe(123);
    expect(roundToDecimalPlaces(123.4, 2)).toBe(123.40);
    expect(roundToDecimalPlaces(123.45, 1)).toBe(123.5);
  });

  test('should handle negative numbers', () => {
    expect(roundToDecimalPlaces(-123.456, 2)).toBe(-123.46);
  });

  test('should handle zero decimal places', () => {
    expect(roundToDecimalPlaces(123.5, 0)).toBe(124);
  });

  test('should throw error for non-number input', () => {
    expect(() => roundToDecimalPlaces('abc', 2)).toThrow('Expected number for both arguments');
    expect(() => roundToDecimalPlaces(123, 'abc')).toThrow('Expected number for both arguments');
  });
});
