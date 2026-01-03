const clamp = require('./number-clamp-util');

describe('clamp', () => {
  it('should clamp a number within the specified range (inclusive)', () => {
    expect(clamp(10, 0, 5)).toBe(5);
    expect(clamp(-5, 0, 5)).toBe(0);
    expect(clamp(3, 0, 5)).toBe(3);
  });

  it('should handle negative numbers for lower and upper bounds', () => {
    expect(clamp(-10, -5, -2)).toBe(-5);
    expect(clamp(0, -5, -2)).toBe(-2);
    expect(clamp(-3, -5, -2)).toBe(-3);
  });

  it('should work when lower bound is greater than upper bound (should swap them)', () => {
    expect(clamp(10, 5, 0)).toBe(5); // Correct behavior would be to interpret bounds correctly or throw error
    expect(clamp(-5, 5, 0)).toBe(0); // This implementation treats min(max(num, lower), upper)
    expect(clamp(3, 5, 0)).toBe(3);
  });

  it('should return the number itself if it is within the range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });

  it('should handle floating point numbers', () => {
    expect(clamp(3.14, 0.5, 2.5)).toBe(2.5);
    expect(clamp(-1.2, -0.5, 0.5)).toBe(-0.5);
    expect(clamp(0.1, -0.5, 0.5)).toBe(0.1);
  });
});
