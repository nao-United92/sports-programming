import { clamp } from './clamp-utils.js';

describe('clamp', () => {
  it('should clamp a number to the lower bound', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  it('should clamp a number to the upper bound', () => {
    expect(clamp(10, -5, 5)).toBe(5);
  });

  it('should not clamp a number within the bounds', () => {
    expect(clamp(0, -5, 5)).toBe(0);
  });

  it('should work with negative bounds', () => {
    expect(clamp(-20, -10, -5)).toBe(-10);
    expect(clamp(0, -10, -5)).toBe(-5);
  });

  it('should work with floating point numbers', () => {
    expect(clamp(3.14, 0.5, 2.5)).toBe(2.5);
    expect(clamp(1.618, 0.5, 2.5)).toBe(1.618);
  });
});