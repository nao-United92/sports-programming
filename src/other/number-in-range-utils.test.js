import { inRange } from './number-in-range-utils';

describe('inRange', () => {
  it('should return true if the number is within the range', () => {
    expect(inRange(3, 2, 4)).toBe(true);
  });

  it('should work with a single range argument', () => {
    expect(inRange(4, 8)).toBe(true);
    expect(inRange(2, 5)).toBe(true);
    expect(inRange(5, 5)).toBe(false);
  });

  it('should return false if the number is outside the range', () => {
    expect(inRange(4, 2)).toBe(false);
    expect(inRange(1, 2, 4)).toBe(false);
  });

  it('should handle negative ranges', () => {
    expect(inRange(-3, -2, -6)).toBe(true);
    expect(inRange(-1, -2, -6)).toBe(false);
  });

  it('should handle the start being greater than the end', () => {
    expect(inRange(3, 4, 2)).toBe(true);
  });

  it('should return false if the number is equal to the end', () => {
    expect(inRange(4, 2, 4)).toBe(false);
  });

  it('should handle zero correctly', () => {
    expect(inRange(0, 0, 5)).toBe(true);
    expect(inRange(0, -1, 0)).toBe(false);
  });
});