import { inRange } from './number-in-range-utils.js';

describe('inRange', () => {
  it('should return true when number is within range (start < end)', () => {
    expect(inRange(5, 0, 10)).toBe(true);
  });

  it('should return true when number is within range (end < start)', () => {
    expect(inRange(5, 10, 0)).toBe(true);
  });

  it('should return true when number is equal to start (inclusive)', () => {
    expect(inRange(0, 0, 10)).toBe(true);
  });

  it('should return false when number is equal to end (exclusive)', () => {
    expect(inRange(10, 0, 10)).toBe(false);
  });

  it('should return false when number is outside range (less than start)', () => {
    expect(inRange(-1, 0, 10)).toBe(false);
  });

  it('should return false when number is outside range (greater than end)', () => {
    expect(inRange(11, 0, 10)).toBe(false);
  });

  it('should handle only one argument (end, start defaults to 0)', () => {
    expect(inRange(5, 10)).toBe(true);
    expect(inRange(0, 10)).toBe(true);
    expect(inRange(10, 10)).toBe(false);
    expect(inRange(-1, 10)).toBe(false);
  });

  it('should handle negative ranges', () => {
    expect(inRange(-5, -10, 0)).toBe(true);
    expect(inRange(0, -10, 0)).toBe(false);
    expect(inRange(-10, -10, 0)).toBe(true);
  });

  it('should handle floating point numbers', () => {
    expect(inRange(5.5, 0.1, 10.9)).toBe(true);
    expect(inRange(0.0, 0.1, 10.9)).toBe(false);
    expect(inRange(10.9, 0.1, 10.9)).toBe(false);
  });

  it('should return false for non-numeric inputs', () => {
    expect(inRange('5', 0, 10)).toBe(false);
    expect(inRange(5, '0', 10)).toBe(false);
    expect(inRange(5, 0, '10')).toBe(false);
    expect(inRange(null, 0, 10)).toBe(false);
    expect(inRange(undefined, 0, 10)).toBe(false);
    expect(inRange({}, 0, 10)).toBe(false);
  });
});