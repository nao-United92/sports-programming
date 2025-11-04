import { random } from './number-random-utils.js';

describe('random', () => {
  test('should return an integer within the specified range', () => {
    const result = random(0, 5);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(5);
    expect(Number.isInteger(result)).toBe(true);
  });

  test('should work with a single argument', () => {
    const result = random(5);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(5);
    expect(Number.isInteger(result)).toBe(true);
  });

  test('should return a floating-point number if floating is true', () => {
    const result = random(0, 5, true);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(5);
  });

  test('should return a floating-point number if bounds are floats', () => {
    const result = random(0, 2.5);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(2.5);
  });

  test('should handle negative ranges', () => {
    const result = random(-10, -5);
    expect(result).toBeGreaterThanOrEqual(-10);
    expect(result).toBeLessThanOrEqual(-5);
    expect(Number.isInteger(result)).toBe(true);
  });
});