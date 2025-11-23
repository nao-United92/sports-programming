import { clamp } from './number-clamp-utils';

describe('clamp', () => {
  it('should clamp a number within the given positive range', () => {
    expect(clamp(10, 0, 5)).toBe(5);
    expect(clamp(0, 0, 5)).toBe(0);
    expect(clamp(-10, 0, 5)).toBe(0);
  });

  it('should clamp a number within the given negative range', () => {
    expect(clamp(10, -5, -1)).toBe(-1);
    expect(clamp(-10, -5, -1)).toBe(-5);
  });

  it('should handle the lower bound being greater than the upper bound', () => {
    expect(clamp(10, 5, -5)).toBe(5);
    expect(clamp(-10, 5, -5)).toBe(-5);
  });

  it('should handle the case where upper is not specified', () => {
    expect(clamp(10, 5)).toBe(5);
    expect(clamp(-10, 5)).toBe(0);
    expect(clamp(3, 5)).toBe(3);
  });

  it('should return 0 if number is undefined', () => {
    expect(clamp(undefined, -5, 5)).toBe(0);
  });

  it('should handle floating point numbers', () => {
    expect(clamp(7.5, 1.1, 5.5)).toBe(5.5);
    expect(clamp(0.5, 1.1, 5.5)).toBe(1.1);
  });
});
