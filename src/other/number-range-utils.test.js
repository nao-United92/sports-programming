import { clamp, inRange } from './number-range-utils.js';

describe('clamp', () => {
  it('should clamp a number within the given range', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(10, -5, 5)).toBe(5);
  });

  it('should not change a number within the range', () => {
    expect(clamp(0, -5, 5)).toBe(0);
  });

  it('should handle the bounds correctly', () => {
    expect(clamp(-5, -5, 5)).toBe(-5);
    expect(clamp(5, -5, 5)).toBe(5);
  });

  it('should work with inverted bounds', () => {
    expect(clamp(-10, 5, -5)).toBe(-5);
    expect(clamp(10, 5, -5)).toBe(5);
  });

  it('should treat NaN bounds as 0', () => {
    expect(clamp(10, -5, NaN)).toBe(0);
    expect(clamp(-10, NaN, 5)).toBe(0);
  });
});

describe('inRange', () => {
  it('should return true if the number is in range', () => {
    expect(inRange(3, 2, 4)).toBe(true);
    expect(inRange(2, 8)).toBe(true); // start=0, end=8
  });

  it('should return false if the number is out of range', () => {
    expect(inRange(4, 2, 4)).toBe(false); // not inclusive of end
    expect(inRange(8, 8)).toBe(false); // start=0, end=8
    expect(inRange(1.2, 1.3, 3.4)).toBe(false);
  });

  it('should handle the start bound correctly', () => {
    expect(inRange(2, 2, 4)).toBe(true);
  });

  it('should work with inverted bounds', () => {
    expect(inRange(3, 4, 2)).toBe(true);
    expect(inRange(-3, -2, -6)).toBe(true);
  });

  it('should work with a single bound (start defaults to 0)', () => {
    expect(inRange(2, 4)).toBe(true);
    expect(inRange(4, 4)).toBe(false);
    expect(inRange(-2, -1)).toBe(false);
  });
});
