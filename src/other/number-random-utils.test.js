const { random } = require('./number-random-utils');

describe('random', () => {
  // Test for integer generation
  test('should generate an integer between 0 and upper (inclusive) when only upper is provided', () => {
    const upper = 10;
    const result = random(upper);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(upper);
    expect(Number.isInteger(result)).toBe(true);
  });

  test('should generate an integer between lower and upper (inclusive)', () => {
    const lower = 5;
    const upper = 10;
    const result = random(lower, upper);
    expect(result).toBeGreaterThanOrEqual(lower);
    expect(result).toBeLessThanOrEqual(upper);
    expect(Number.isInteger(result)).toBe(true);
  });

  test('should generate an integer between lower and upper (inclusive) with negative numbers', () => {
    const lower = -10;
    const upper = -5;
    const result = random(lower, upper);
    expect(result).toBeGreaterThanOrEqual(lower);
    expect(result).toBeLessThanOrEqual(upper);
    expect(Number.isInteger(result)).toBe(true);
  });

  test('should generate an integer between lower and upper (inclusive) with mixed positive/negative', () => {
    const lower = -5;
    const upper = 5;
    const result = random(lower, upper);
    expect(result).toBeGreaterThanOrEqual(lower);
    expect(result).toBeLessThanOrEqual(upper);
    expect(Number.isInteger(result)).toBe(true);
  });

  // Test for floating-point generation
  test('should generate a floating-point number between 0 and upper when only upper and floating=true are provided', () => {
    const upper = 10;
    const result = random(upper, true); // random(upper, floating)
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(upper);
    expect(Number.isInteger(result)).toBe(false);
  });

  test('should generate a floating-point number between lower and upper', () => {
    const lower = 5;
    const upper = 10;
    const result = random(lower, upper, true);
    expect(result).toBeGreaterThanOrEqual(lower);
    expect(result).toBeLessThanOrEqual(upper);
    expect(Number.isInteger(result)).toBe(false);
  });

  test('should generate a floating-point number between lower and upper with negative numbers', () => {
    const lower = -10;
    const upper = -5;
    const result = random(lower, upper, true);
    expect(result).toBeGreaterThanOrEqual(lower);
    expect(result).toBeLessThanOrEqual(upper);
    expect(Number.isInteger(result)).toBe(false);
  });

  test('should handle lower > upper by swapping them', () => {
    const lower = 10;
    const upper = 5;
    const result = random(lower, upper);
    expect(result).toBeGreaterThanOrEqual(5);
    expect(result).toBeLessThanOrEqual(10);
    expect(Number.isInteger(result)).toBe(true);
  });

  test('should handle lower > upper by swapping them for floating point', () => {
    const lower = 10;
    const upper = 5;
    const result = random(lower, upper, true);
    expect(result).toBeGreaterThanOrEqual(5);
    expect(result).toBeLessThanOrEqual(10);
    expect(Number.isInteger(result)).toBe(false);
  });

  // Edge cases
  test('should return lower/upper if they are the same for integer', () => {
    expect(random(5, 5)).toBe(5);
  });

  test('should return lower/upper if they are the same for floating point', () => {
    expect(random(5, 5, true)).toBe(5);
  });
});
