import { inRange } from './number-range-utils';

describe('inRange', () => {
  it('should return true if the number is within the range', () => {
    expect(inRange(3, 2, 4)).toBe(true);
    expect(inRange(4, 8)).toBe(true);
    expect(inRange(2, 2)).toBe(false);
  });

  it('should return false if the number is outside the range', () => {
    expect(inRange(1, 2, 4)).toBe(false);
    expect(inRange(5, 2, 4)).toBe(false);
    expect(inRange(8, 4)).toBe(false);
  });

  it('should handle negative numbers', () => {
    expect(inRange(-3, -2, -4)).toBe(true);
    expect(inRange(-1, -2, -4)).toBe(false);
  });

  it('should swap start and end if start is greater than end', () => {
    expect(inRange(3, 4, 2)).toBe(true);
    expect(inRange(5, 4, 2)).toBe(false);
  });

  it('should work with a single argument for the end of the range', () => {
    expect(inRange(2, 4)).toBe(true);
    expect(inRange(0, 4)).toBe(true);
    expect(inRange(4, 4)).toBe(false);
    expect(inRange(-1, 4)).toBe(false);
  });
});
