import { inRange } from './number-range-utils.js';

describe('inRange', () => {
  it('should return true if number is within the range [start, end)', () => {
    expect(inRange(5, 0, 10)).toBe(true);
    expect(inRange(0, 0, 10)).toBe(true); // Inclusive start
    expect(inRange(9, 0, 10)).toBe(true);
  });

  it('should return false if number is outside the range [start, end)', () => {
    expect(inRange(-1, 0, 10)).toBe(false);
    expect(inRange(10, 0, 10)).toBe(false); // Exclusive end
    expect(inRange(11, 0, 10)).toBe(false);
  });

  it('should handle cases where start is greater than end', () => {
    expect(inRange(5, 10, 0)).toBe(true); // Effectively inRange(5, 0, 10)
    expect(inRange(0, 10, 0)).toBe(true);
    expect(inRange(9, 10, 0)).toBe(true);
    expect(inRange(-1, 10, 0)).toBe(false);
    expect(inRange(10, 10, 0)).toBe(false);
  });

  it('should handle end being omitted (range [0, start))', () => {
    expect(inRange(5, 10)).toBe(true); // Effectively inRange(5, 0, 10)
    expect(inRange(0, 10)).toBe(true);
    expect(inRange(9, 10)).toBe(true);
    expect(inRange(10, 10)).toBe(false);
    expect(inRange(-1, 10)).toBe(false);
  });

  it('should return false for non-numeric inputs for number', () => {
    expect(inRange('5', 0, 10)).toBe(false);
    expect(inRange(null, 0, 10)).toBe(false);
    expect(inRange(undefined, 0, 10)).toBe(false);
    expect(inRange(NaN, 0, 10)).toBe(false);
  });

  it('should return false for non-numeric inputs for start or end', () => {
    expect(inRange(5, '0', 10)).toBe(false);
    expect(inRange(5, 0, '10')).toBe(false);
    expect(inRange(5, null, 10)).toBe(false);
    expect(inRange(5, 0, undefined)).toBe(false);
    expect(inRange(5, NaN, 10)).toBe(false);
    expect(inRange(5, 0, NaN)).toBe(false);
  });

  it('should handle negative ranges', () => {
    expect(inRange(-5, -10, 0)).toBe(true);
    expect(inRange(-10, -10, 0)).toBe(true);
    expect(inRange(-1, -10, 0)).toBe(true);
    expect(inRange(0, -10, 0)).toBe(false);
    expect(inRange(-11, -10, 0)).toBe(false);
  });

  it('should handle zero as a boundary', () => {
    expect(inRange(0, -5, 5)).toBe(true);
    expect(inRange(0, 0, 5)).toBe(true);
    expect(inRange(0, -5, 0)).toBe(false);
  });
});