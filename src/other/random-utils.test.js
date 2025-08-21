import { random } from './random-utils.js';

describe('random', () => {
  const isBetween = (value, lower, upper) => value >= lower && value <= upper;

  test('should return an integer between the bounds', () => {
    const result = random(0, 5);
    expect(Number.isInteger(result)).toBe(true);
    expect(isBetween(result, 0, 5)).toBe(true);
  });

  test('should handle a single argument, returning between 0 and the value', () => {
    const result = random(5);
    expect(Number.isInteger(result)).toBe(true);
    expect(isBetween(result, 0, 5)).toBe(true);
  });

  test('should return a floating-point number if floating is true', () => {
    const result = random(0, 5, true);
    expect(Number.isInteger(result)).toBe(false);
    expect(isBetween(result, 0, 5)).toBe(true);
  });

  test('should return a floating-point number if one of the bounds is a float', () => {
    const result = random(0, 2.5);
    expect(Number.isInteger(result)).toBe(false);
    expect(isBetween(result, 0, 2.5)).toBe(true);
  });

  test('should handle negative ranges', () => {
    const result = random(-10, -5);
    expect(Number.isInteger(result)).toBe(true);
    expect(isBetween(result, -10, -5)).toBe(true);
  });

  test('should handle a single negative argument', () => {
    const result = random(-5);
    expect(Number.isInteger(result)).toBe(true);
    expect(isBetween(result, -5, 0)).toBe(true);
  });

  test('should default to a number between 0 and 1', () => {
    const result = random();
    expect(isBetween(result, 0, 1)).toBe(true);
  });
});