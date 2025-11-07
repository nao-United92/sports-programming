import { clamp } from './number-clamp-utils.js';

describe('clamp', () => {
  it('should clamp a number within the inclusive bounds', () => {
    expect(clamp(10, 0, 100)).toBe(10);
    expect(clamp(0, 0, 100)).toBe(0);
    expect(clamp(100, 0, 100)).toBe(100);
  });

  it('should return the lower bound if number is less than lower', () => {
    expect(clamp(-10, 0, 100)).toBe(0);
  });

  it('should return the upper bound if number is greater than upper', () => {
    expect(clamp(110, 0, 100)).toBe(100);
  });

  it('should handle negative bounds', () => {
    expect(clamp(-5, -10, 10)).toBe(-5);
    expect(clamp(-15, -10, 10)).toBe(-10);
    expect(clamp(15, -10, 10)).toBe(10);
  });

  it('should swap bounds if lower is greater than upper', () => {
    expect(clamp(50, 100, 0)).toBe(50);
    expect(clamp(-10, 100, 0)).toBe(0);
    expect(clamp(110, 100, 0)).toBe(100);
  });

  it('should handle non-numeric inputs by coercing to number', () => {
    expect(clamp('10', '0', '100')).toBe(10);
    expect(clamp(null, 0, 100)).toBe(0); // null becomes 0
    expect(clamp(undefined, 0, 100)).toBe(0); // undefined becomes NaN, then 0 for lower/upper
    expect(clamp(50, 'a', 100)).toBe(0); // 'a' becomes NaN, then 0 for lower
  });
});