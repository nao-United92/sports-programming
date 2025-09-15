const { clamp } = require('./clamp-utils');

describe('clamp', () => {
  it('should clamp a number within the given range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('should clamp a number to the lower bound', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it('should clamp a number to the upper bound', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it('should work with negative numbers', () => {
    expect(clamp(-15, -10, -5)).toBe(-10);
    expect(clamp(-2, -10, -5)).toBe(-5);
    expect(clamp(-7, -10, -5)).toBe(-7);
  });

  it('should handle zero correctly', () => {
    expect(clamp(0, -5, 5)).toBe(0);
    expect(clamp(-10, -5, 0)).toBe(-5);
    expect(clamp(10, 0, 5)).toBe(5);
  });

  it('should handle the case where lower and upper bounds are inverted', () => {
    // Even if the bounds are inverted, it should still work as expected.
    // The function logic itself ensures this by comparing with upper first, then lower.
    expect(clamp(5, 10, 0)).toBe(0); // number <= upper (0) is false, so number becomes 0. Then number >= lower (10) is false, so it remains 0.
    expect(clamp(15, 10, 0)).toBe(0);
    expect(clamp(-5, 10, 0)).toBe(0);
  });

  it('should handle non-numeric inputs gracefully', () => {
    expect(clamp(NaN, 0, 10)).toBe(0);
    expect(clamp(5, NaN, 10)).toBe(0);
    expect(clamp(5, 0, NaN)).toBe(0);
    expect(clamp(undefined, 0, 10)).toBe(0);
    expect(clamp(null, 0, 10)).toBe(0);
  });
});
