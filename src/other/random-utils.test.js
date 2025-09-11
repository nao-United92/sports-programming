import { random } from './random-utils';

describe('random', () => {
  const ITERATIONS = 100;

  it('should return an integer within the specified range', () => {
    for (let i = 0; i < ITERATIONS; i++) {
      const result = random(0, 10);
      expect(Number.isInteger(result)).toBe(true);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(10);
    }
  });

  it('should return a floating-point number when floating is true', () => {
    let hasFloat = false;
    for (let i = 0; i < ITERATIONS; i++) {
      const result = random(0, 10, true);
      if (!Number.isInteger(result)) {
        hasFloat = true;
      }
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(10);
    }
    // It's statistically very likely that at least one float was generated.
    expect(hasFloat).toBe(true);
  });

  it('should handle swapped lower and upper bounds', () => {
    for (let i = 0; i < ITERATIONS; i++) {
      const result = random(10, 0);
      expect(Number.isInteger(result)).toBe(true);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(10);
    }
  });

  it('should handle negative ranges', () => {
    for (let i = 0; i < ITERATIONS; i++) {
      const result = random(-10, -5);
      expect(Number.isInteger(result)).toBe(true);
      expect(result).toBeGreaterThanOrEqual(-10);
      expect(result).toBeLessThanOrEqual(-5);
    }
  });

  it('should handle a range of a single number', () => {
    const result = random(5, 5);
    expect(result).toBe(5);
  });
});
